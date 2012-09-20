/****** Data para el Sliders ******/

var galeriaHome = {
	firstImage : 1,
	totalImages : $('.gallery li').length,
	container : $('.gallery ul'),
	imgs : $('.gallery li'),
	content : $('.content'),
	velocity : 1000,
	easing : 'swing'
}

var navegador = $(window);

$(function(){
	//acomodo el tamaño de la mascara al tamaño de la pantalla.
	galeriaHome.container.parent().css("width",navegador.width()+"px");
	
	//y el tamaño del contenedor al tamaño necesario para que contenga todas las imagenes que lleve adentro
	galeriaHome.container.css("width",(galeriaHome.totalImages*navegador.width())+"px");
	galeriaHome.container.css("height",navegador.height()+"px");
	
	//acomodo el content siempre a 43px del bottom
	var topContent = ( navegador.height() - (galeriaHome.content.height() + 46) )+ 'px';
	galeriaHome.content.css('top',topContent);
	
	//Y si hay mas de una imagen de fondo inicializo el slider, Sino, solo se muestra un background comun
	if( galeriaHome.totalImages > 1 ){
		slider(galeriaHome);
	}else{
		//resize del contenedor del fondo y la imagen de fondo cuando es una sola.
		navegador.resize(function(){
			resizeSlider(galeriaHome);
		});
	}
})


/****** FUNCIONES DEL SLIDER ******/

var slider = function(galeria){

	//Creo las flechas y las agrego al documento
	var snippetArrows = '<a href="javascript:void(0)" id="arrowLeft"><span style="display:none;">PREV</span></a>'+
						'<a href="javascript:void(0)" id="arrowRight"><span style="display:none;">NEXT</span></a>';
	
	galeria.container.parent().append(snippetArrows);
	
	//Una vez creadas guardo las flechas en variables para usarlas despues.
	var arrowLeft = $('.gallery #arrowLeft');
	var arrowRight = $('.gallery #arrowRight');
	
	//acomodo las flechas y muestro la flecha derecha
	var top = ( ( navegador.height() - arrowLeft.height() ) /2 )+ 'px';
	arrowLeft.css('top',top);
	arrowRight.css('top',top);
	arrowRight.css('display','block');
	
	//ajusto el left de los LI
	galeria.imgs.each(function(i,e){
		$(this).css('left',(i * navegador.width())+"px");
	});
	
	prevImg = function(){
		if(galeria.firstImage == 1){
			return false;
		}else{
			galeria.firstImage--;
			//retrocedo una foto y resto numerodePagina
			//Si estoy en la primer pagina oculto la flecha izquierda
			if(galeria.firstImage == 1){
				arrowLeft.css('display','none');
			}
			galeria.container.stop().animate({
				left: (navegador.width() - (navegador.width() * galeria.firstImage)) +'px'
			},galeria.velocity,galeria.easing);
			
			arrowRight.css('display','block');
		}
	}
	
	nextImg = function(){
		if(galeria.firstImage < galeria.totalImages){
			//avanzo el content
			var text = galeria.content[galeria.firstImage-1]; //el contenedor que esta visible
			
			$(text).stop().animate({
				left: '-1000px'
			},galeria.velocity,galeria.easing,function(){
				//CALLBACK
				//avanzo el brackground y aumento firstImage.
				//Si estoy en la ultima pagina oculto la flecha derecha
				galeria.firstImage++;
				
				if(galeria.firstImage == galeria.totalImages){
					arrowRight.css('display','none');
				}
				
				galeria.container.stop().animate({
					left: -(navegador.width() * (galeria.firstImage-1))+'px'
				},galeria.velocity,galeria.easing,function(){
					//2do CALLBACK
					
					arrowLeft.css('display','block');
					
					//Vuelvo a ubicar el texto de la pantalla que se fue
					$(text).css('left','160px');
				});
			});
		}else{
			return false;
		}
	}
	
	//Comportamiento para las flechas
	arrowLeft.bind('click',prevImg);
	arrowRight.bind('click',nextImg);
	
	navegador.resize(function(){
		resizeSlider(galeria);
		
		//acomodo las flechas
		var top = ( ( navegador.height() - arrowLeft.height() ) /2 )+ 'px';
		arrowLeft.css('top',top);
		arrowRight.css('top',top);
		
		//acomodo el content siempre a 43px del bottom
		var topContent = ( navegador.height() - (galeriaHome.content.height() + 46) )+ 'px';
		galeriaHome.content.css('top',topContent);
	});
}


// EN ESTA FUNCION ESTOY HACIENDO EL RESIZE DE LAS IMAGENES Y LOS CONTENEDORES. 
// ESTOY ACOMODANDO LOS LEFT PARA QUE CADA IMAGEN SE PONGA A LA DERECHA DE LA ANTERIOR.

//PENSAR QUE MAS IRIA DENTRO DE ESTA FUNCION, POR EJEMPLO: LAS FLECHAS...
//DESPUES HACER BACKUP DE LO ANTERIOR y BORRAR LO QUE AHORA LO HACE MEDIANTE ESTA FUNCION ..... CAMBIO PRIIRPPPPP

function resizeSlider(galeria){
	
	// Resize the img object to the proper ratio of the window.
	var iw = galeria.container.parent().find('img').width();
	var ih = galeria.container.parent().find('img').height();
	
	if ($(window).width() > $(window).height()) {
	    if (iw > ih) {
	        var fRatio = iw/ih;
	        //acomodo los anchos de las imagenes
	        galeria.container.find('img').each(function(i,e){
	       		$(this).css("width",$(window).width() + "px");
	       		$(this).parent().css("left",(i*$(window).width()) + "px"); //tambien deberia acomodar el left
	       	});
	       	
	       	//acomodo los anchos de los contenedores tambien  	
	       	galeria.container.parent().css("width",navegador.width()+"px");
	       	galeria.container.css("width",(navegador.width() * galeria.totalImages) + "px");
	       	
	       	//acomodo los altos de las imagenes
	        galeria.container.parent().find('img').each(function(){
	        	$(this).css("height",Math.round($(window).width() * (1/fRatio)));
			});
			
			//acomodo los altos de los contenedores tambien
	       	galeria.container.css("height",Math.round($(window).width() * (1/fRatio)));
			galeria.container.parent().css("height",navegador.height()+"px");
			
	        var newIh = Math.round($(window).width() * (1/fRatio));
	        
	        if(newIh < $(window).height()) {
	            var fRatio = ih/iw;
	            
	            //acomodo los anchos
	            galeria.container.parent().find('img').each(function(i,e){
	            	$(this).css("width",Math.round(navegador.height() * (1/fRatio)));
	            	$(this).parent().css("left",(i*(Math.round(navegador.height() * (1/fRatio)))) + "px"); 
	            });
	            
	            
	            //acomodo los anchos de los contenedores tambien
		       	galeria.container.css("width",(Math.round(navegador.height() * (1/fRatio)) * galeria.totalImages) + "px");
		       	galeria.container.parent().css("width",navegador.width()+"px"); //esto estara bien o hay que usar math roudn tambien??? Pensarlo..
	            
	            //acomodo los altos de las imagenes
	            galeria.container.parent().find('img').each(function(){
	            	$(this).css("height",$(window).height());
	            });
	            
	            //acomodo los altos de los contenedores tambien
	       		galeria.container.css("height",$(window).height());
	       		galeria.container.parent().css("height",navegador.height()+"px");
	        }
	        
	    } else {
	    	
	    	
	        var fRatio = ih/iw;
	        
	        //acomodo los altos de las imagenes
	        galeria.container.parent().find('img').each(function(){
	           	$(this).css("height",$(window).height());
	        });
	        
	        //acomodo los altos de los contenedores tambien
	       	galeria.container.css("height",$(window).height());
	       	galeria.container.parent().css("height",navegador.height()+"px");
	       		   
	        galeria.container.find('img').each(function(i,e){
	           	$(this).css("width",Math.round($(window).height() * (1/fRatio)));
	           	$(this).parent().css("left",(i*(Math.round($(window).height() * (1/fRatio)))) + "px");
	        });
	        
	        //acomodo los anchos de los contenedores tambien
	       	galeria.container.css("width",(Math.round($(window).height() * (1/fRatio)) * galeria.totalImages) + "px");
	       	galeria.container.parent().css("width",navegador.width()+"px"); //esto estara bien o hay que usar math roudn tambien??? Pensarlo..
	    }
	    
	} else {
	    var fRatio = ih/iw;
	   
	    //acomodo los altos de las imagenes
	    galeria.container.parent().find('img').each(function(){
	    	$(this).css("height",$(window).height());
	    });
	    
	    //acomodo los altos de los contenedores tambien
	    galeria.container.css("height",$(window).height());
	    
	    //acomodo los anchos de las imagenes
	    galeria.container.find('img').each(function(i,e){
	    	$(this).css("width",Math.round($(window).height() * (1/fRatio)));
	    	$(this).parent().css("left",(i*(Math.round($(window).height() * (1/fRatio)))) + "px");
	    });
	    
	    //acomodo los anchos de los contenedores tambien
       	galeria.container.css("width",(Math.round($(window).height() * (1/fRatio)) * galeria.totalImages) + "px");
       	galeria.container.parent().css("width",navegador.width()+"px"); //esto estara bien o hay que usar math roudn tambien??? Pensarlo..
	}
}
