$(document).ready(function(){
	
	//VARIABLES GLOBALES
	var homepage = $("#home");
	var secciones = $(".secciones");
	var txt_container = $(".secciones .txt-container");
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	
	homepage.css("height",windowHeight);
	txt_container.css("display","none");
	
	//animacion de pantallas
	var velocidad_de_transicion = 600;

	secciones.css("margin-left",windowWidth);
	
	$(".index").click(function(){
		
		homepage.css("z-index","200");
		
		secciones.stop().animate({
			marginLeft:windowWidth
		},velocidad_de_transicion,'swing');
		
		homepage.stop().animate({
			left:"0"
		},velocidad_de_transicion,'swing', function(){
			secciones.css("z-index","50");
			txt_container.css("z-index","50");
		});
		
		secciones.removeClass("selected");
	});
	
	
	$("nav li a").each(function(){
		$(this).click(function(){
			servicioSeleccionado = $(this).attr("class");
			servicioActivo = $(".selected").attr("id");
			
			if(servicioSeleccionado == servicioActivo){
				return false;
			}
			
			txt_container.css("display","none");
			$(".meDeboIr .txt-container").css("display","block");
			$("#"+servicioSeleccionado+" .txt-container").css("display","block");
			
			//Se va el texto de la pantalla que estaba activa.
			$(".meDeboIr .txt-container").stop().animate({
				right: windowWidth
			},velocidad_de_transicion,'swing',function(){
				//cuando termina de animarse lo oculto y lo vuelvo a su posicion original.
				$(".meDeboIr .txt-container").css("display","none");
				$(".meDeboIr .txt-container").css("right","-2000px");
			});
			
			secciones.css("z-index","50");
			homepage.css("z-index","50");
			$("#"+servicioSeleccionado).css("z-index","100");
			
			//despues del texto se va la pantalla, el fondo..
			$(".selected").stop().animate({
				marginLeft:"-"+windowWidth
			},velocidad_de_transicion,'swing');
			
			homepage.stop().animate({
				left:"-"+windowWidth
			},velocidad_de_transicion,'swing');
						
			secciones.removeClass("selected");
			$("#"+servicioSeleccionado).addClass("selected");
			
			$("#"+servicioSeleccionado+" .txt-container").css("display","none");
			$("#"+servicioSeleccionado).stop().animate({
				marginLeft:"0"
			},velocidad_de_transicion,'swing',function(){
				$(".secciones:not('#"+servicioSeleccionado+")").css("margin-left",windowWidth);
				
				$("#"+servicioSeleccionado +" .txt-container").css("right","-600px");
				$("#"+servicioSeleccionado +" .txt-container").css("display","block");
				
				$("#"+servicioSeleccionado +" .txt-container").animate({
					right: windowWidth - 1050
				},velocidad_de_transicion,'swing');
								
			});
			
			secciones.removeClass("meDeboIr");
			$("#"+servicioSeleccionado).addClass("meDeboIr");
		});
	});
	
	//animacion lista principal
	$('nav > ul > li').each(function(){
		$(this).mouseenter(function(){
			$(this).animate({backgroundPosition : '0 -48'
			},150);
		});
	
		$(this).mouseleave(function(){
			$(this).animate({
				backgroundPosition : '0 0'
			},150);
		});
	});
	
	//muestro el scroll vertical si la pantalla es muy chica
	if(windowHeight < 650){
		$("html,body").css("overflow-y","visible");
	}else{
		$("html,body").css("overflow","hidden");
	}
	
	//onresize
	$(window).resize(function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		//saber si estoy en home o en servicio
		//para cuando hago el resize, dar los margenes correctos para que se vea la pantalla que se tiene qeu ver.
		var nombreServicioActivo = ""; 		
		$(".secciones").each(function(){
			if( $(this).hasClass("selected") ){
				nombreServicioActivo = $(this).attr("id");
			}
		});	
		if(nombreServicioActivo == ""){
			$(".secciones").css("margin-left",windowWidth);
		}else{
			$(".secciones:not('#"+nombreServicioActivo+"')").css("margin-left",windowWidth);
		}

		//muestro el scroll vertical si la pantalla es muy chica
		if(windowHeight < 650){
			$("html,body").css("overflow-y","visible");
		}else{
			$("html,body").css("overflow","hidden");
		}
	});
	
	
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

});





$(window).bind("load", function() {
	$("#noui").slideViewerPro({
    autoslide: true,
	galBorderWidth: 0,
	//galBorderColor: '#cacaca',
	thumbs: 15,	//Cantidad de thumbnails
	typo: false,
	thumbsPercentReduction: 10,	// porcentaje que se reduce el thumbnail
	easeTime: 980,	// Tiempo q demora la transicion
	asTimer: 4000   //Tiempo que dura estacionada cada imagen
    }); 
}); 