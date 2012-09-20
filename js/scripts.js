//Esta funcion le asigna el ancho de la pantalla a las imagenes 
var queNumeroGaleria = 0;

function removePreload(){
	$("#preload img").fadeOut("slow",function(){
		$("#preload").fadeOut("normal", function(){
			$("#preload").remove();
		});
	});
}

function rotarServicios(){

	$(".servicios").css("margin-left",$(window).width());
	
	$(".index").click(function(){
		$(".servicios .txt-container").css("display","none");
		$("nav").fadeIn();
		$("h1 a").removeClass("contactLogo");
		
		$(".servicios").stop().animate({
			marginLeft:$(window).width()
		},velocidad_de_transicion,'swing');
		
		$("#home").stop().animate({
			left:"0"
		},velocidad_de_transicion,'swing', function(){
			$(".servicios").css("z-index","50");
			$(".servicios .txt-container").css("z-index","50");
			$("#home").css("z-index","100");
		});
		
		$(".feed").fadeIn();
		$(".servicios").removeClass("selected");
	});
	
	$(".submenu li a, .contact, .four").each(function(){
		$(this).click(function(){
			servicioSeleccionado = $(this).attr("title");
			servicioActivo = $(".selected").attr("id");
			
			if(servicioSeleccionado == servicioActivo){
				return false;
			}
			
			$(".servicios .txt-container").css("display","none");
			$(".meDeboIr .txt-container").css("display","block");
			$("#"+servicioSeleccionado+" .txt-container").css("display","block");
			
			//Se va el texto de la pantalla que estaba activa.
			$(".meDeboIr .txt-container").stop().animate({
				right: ""+$(window).width()
			},velocidad_de_texto_salida,'swing',function(){
				//cuando termina de animarse lo oculto y lo vuelvo a su posicion original.
				$(".meDeboIr .txt-container").css("display","none");
				$(".meDeboIr .txt-container").css("right","-500px");
			});
			
			$(".servicios").css("z-index","50");
			$("#home").css("z-index","50");
			$("#"+servicioSeleccionado).css("z-index","100");
			
			//despues del texto se va la pantalla, el fondo..
			$(".selected").stop().delay(100).animate({
				marginLeft:"-"+$(window).width()
			},velocidad_de_transicion,'swing');
			
			$("#home").stop().delay(100).animate({
				left:"-"+$(window).width()
			},velocidad_de_transicion,'swing');
			
			$(".feed").fadeOut();
						
			$(".servicios").removeClass("selected");
			$("#"+servicioSeleccionado).addClass("selected");
			
			if(servicioSeleccionado == "contacto"){
				$("nav").fadeOut();
				$("h1 a").addClass("contactLogo");
			};
			
			if(servicioSeleccionado == "content"){
				$("nav").fadeOut();
			};
			
			$("#"+servicioSeleccionado+" .txt-container").css("display","none");
			$("#"+servicioSeleccionado).stop().delay(100).animate({
				marginLeft:"0"
			},velocidad_de_transicion,'swing',function(){
				$(".servicios:not('#"+servicioSeleccionado+")").css("margin-left",$(window).width());
				
				$("#"+servicioSeleccionado +" .txt-container").css("right","-100px");
				$("#"+servicioSeleccionado +" .txt-container").css("display","block");
				
				if(servicioSeleccionado == "content"){
					$('#content #scroll').jScrollPane({
						verticalDragMaxHeight : 12,
						verticalDragMinHeight : 12 
					});
					$("#"+servicioSeleccionado +" .txt-container").delay(100).animate({
						right: ""+$(window).width() - 710
					},velocidad_de_texto_entrada,'swing');
				}else{
					$("#"+servicioSeleccionado +" .txt-container").delay(100).animate({
						right: "60"
					},velocidad_de_texto_entrada,'swing');
				}				
			});
			
			$(".servicios").removeClass("meDeboIr");
			$("#"+servicioSeleccionado).addClass("meDeboIr");
		});
	});
	
}

function armarGaleria() {

	var cantidadDeFotos = $(".jq_ez_bg.gallery img").length;
	
	$(".jq_ez_bg.gallery").css("width",(cantidadDeFotos*$(window).width())+"px");
	$(".jq_ez_bg.gallery img").css("width",$(window).width()+"px");

	var contFotos = 0;
	
	$(".jq_ez_bg.gallery img").each(function(){
		$(this).css("left",($(window).width()*contFotos)+"px");
		contFotos++;
	});
	
	
	//PAGINADO
	$(".paginado a").each(function(){
		$(this).click(function(){
			var numeroPaginado = $(this).attr("title")-1;
			queNumeroGaleria = numeroPaginado;
			if( numeroPaginado == 0 ){
				$("#home .jq_ez_bg").stop().animate({
					left:"0px"
				});
			} else {
				var valor = "-" + ($(window).width()*numeroPaginado) + "px";
				$(".jq_ez_bg.gallery").stop().animate({
					left:valor
				});
			}
		});
	});
}

$(document).ready(function(){


	$(".txt-container").css("display","none");
	
	/*plug in background animado*/
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = $.curCSS;
		$.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}

	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};

	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}

	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}

			start = toArray(start);
			fx.start = [start[0],start[2]];
			var end = toArray(fx.end);
			fx.end = [end[0],end[2]];

			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};

	/*FIN PLUG IN BACKGROUND ANIMADO*/
	
	
	$(window).resize(function(){
		
		
		$("#content .txt-container").css({
			right: ""+$(window).width() - 710
		});
		
		
		//resizeo los backgrounds de la galeria
		var cantidadDeFotos = $(".jq_ez_bg.gallery img").length;
		$(".jq_ez_bg.gallery").css("width",(cantidadDeFotos*$(window).width())+"px");
		$(".jq_ez_bg.gallery img").css("width",$(window).width()+"px");
		
		var contFotos = 0;
		
		$(".jq_ez_bg.gallery img").each(function(){
			$(this).css("left",($(window).width()*contFotos)+"px");
			contFotos++;
		});
		
		if( queNumeroGaleria == 0 ){
			$("#home .jq_ez_bg").css("left","0px");
		} else {
			var valor = "-" + ($(window).width()*queNumeroGaleria) + "px";
			$(".jq_ez_bg.gallery").css("left",valor);
		}
		
		//saber si estoy en home o en servicio, para cuando hago el resize, dar los margenes correctos para que se vea la pantalla que se tiene qeu ver.
		var nombreServicioActivo = ""; 		
		$(".servicios").each(function(){
			if( $(this).hasClass("selected") ){
				nombreServicioActivo = $(this).attr("id");
			}
		});		
		if(nombreServicioActivo == ""){
			$(".servicios").css("margin-left",$(window).width());
		}else{
			$(".servicios:not('#"+nombreServicioActivo+"')").css("margin-left",$(window).width());
		}
		
		//Acomodo el paginado
		var topPaginado = $(window).height()-60 + "px";
		$(".paginado").css("top", topPaginado);
		
	});
	
	//Acomodo el paginado
	var topPaginado = $(window).height()-60 + "px";
	$(".paginado").css("top", topPaginado);
		
	setTimeout("armarGaleria()",5000); 
	rotarServicios();
	
	/*COMIENZO NAVIGATOR*/
	
	//animacion lista principal
	$('nav > ul > li').each(function(){
		$(this).mouseenter(function(){
			$(this).animate({
			backgroundPosition : '0 -48'},
			150);
			
			$(this).children(':first').css('width' , '214px');
			$(this).children().children().removeClass('DN');
		});
	
		$(this).mouseleave(function(){
			$(this).animate({
			backgroundPosition : '0 0'},
			150);
			$(this).children(':first').css('width' , '20px');
			$(this).children().children().addClass('DN');
		});
	});
	
	//cuando me paro en la lista servicios despliego submenu
	$('.contSub').mouseover(function(){
		$('.submenu').css('display','block');
		$(".submenu").siblings().children().css("color","#fff");
	});
	
	//Apago submenu cuando me voy de servicios
	$('.contSub').mouseleave(function(){
		$('.submenu').css('display','none');
	});
	
	//cuando me paro sobre un li del submenu cambia el color de cada uno de ellos
	$('.submenu > li').each(function(){
		$(this).mouseover(function(){
			$(this).css({
				'background':'#000',
				'opacity' : '0.9'
			});
		})
		
		$(this).mouseout(function(){
			$(this).css('background','none');
		})
	});

	/*FIN NAVIGATOR*/
	
	
	/*DESPLEGABLE RSS*/
	$('.aside-desplegable').css('right','0px');
	$('.aside-desplegable').css('width','3px');
	$('.aside-desplegable ul').css('display','none');
	
	
	$('.feed .first').mouseenter(function(){
		$('.aside-desplegable').stop().animate({
			width: '630px'
		}, 200,function(){
			$('.aside-desplegable ul').fadeIn("fast");
		});
	});
	
	
	$('.feed .first').mouseleave(function(){
		$('.aside-desplegable ul').css("display","none");
		$('.aside-desplegable').stop().animate({
			width: '0px'
		}, 200);
	});
	
	
	$('.aside-desplegable').mouseenter(function(){
		$(this).css('width', '630px');
	});
	
	
	$('.aside-desplegable').mouseleave(function(){
		$('.aside-desplegable ul').css("display","none");
		$(this).stop().animate({
			width: '0px'
		}, 200);
	});
	
	var left = ($(window).width() - 100)/2;
	var top = ($(window).height() - 100)/2;
	
	$("#preload img").css({
		position: "absolute",
		top: top,
		left: left
	});
	
	setTimeout("removePreload()",6500);
	
	
});