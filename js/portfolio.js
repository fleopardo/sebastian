/****** Data para portfolio ******/
var conf = {
	firstImage : 1,
	container : $('.gallery'),
	move : $('.move'),
	velocity : 1000,
	easing : 'swing'
}

/******* 

 Este objeto debe venir desde PHP.

*******/

var galeriaPortfolio = {
	projects : [
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo1',
			'tag' : 'Imagen Institucional',
			'date' : '14/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'Direccion de arte',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo3',
			'tag' : 'Imagen Institucional',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo4',
			'tag' : 'Direccion de arte',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo5',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'Titulo de ejemplo',
			'tag' : 'Imagen Institucional',
			'date' : '14/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo2',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo3',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo4',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo5',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'Titulo de ejemplo',
			'tag' : 'Imagen Institucional',
			'date' : '14/10/2011'
		},
		
		{
			'imageName' : 'fd_logo.png',
			'title' : 'titulo de ejemplo5',
			'tag' : 'tag1',
			'date' : '15/10/2011'
		}
	]
};

//FUNCION QUE CREA Y APPENDEA EL HTML DEL PORTFOLIO

var htmlPortfolio = function(galeria,conf){
	var projects = galeria.projects;
	var html = '';
	
	for (var i = 0 ; i < projects.length ; i++) {
		var tagInClass = projects[i].tag.replace(/ /g,'-');
		tagInClass = tagInClass.toLowerCase();
		
		if(i==0){ html = '<div class="col">'; }
		
		html += '<div class="work '+tagInClass+'">'+
					'<img src="../img/'+projects[i].imageName+'" width="225" height="100" alt="trabajo 1" />'+
					'<div class="contentInfo">'+
						'<h3>'+projects[i].title+'</h3>'+
						'<p class="tag">'+projects[i].tag+'</p>'+
						'<p class="date">'+projects[i].date+'</p>'+
					'</div>'+
			    '</div>';
		
		if((i+1)%2==0){
			if( (i+1) == projects.length){
				html += '</div>';
			}else{
				html += '</div>';
				html += '<div class="col">';
			}
		}	
	}
		
	conf.move.fadeOut('fast',function(){
		conf.move.html(html);
		
		conf.move.fadeIn();

		//acomodo el tamaño del contenedor que se va a mover, para que abarque todas las columnas, 
		//incluso las ocultas por la mascara
		var cantCol = $('.gallery .col').length;
		conf.move.css('width',(245 * cantCol) + 'px');
		
		//armo el slider si hay mas de 4 columnas
		if(cantCol > 4){
			slider(galeria,conf);
		}
	});
		
}

//FUNCTION TAGS

var tags = function(galeria,conf){
	//click en los tags.
	var tagItem = $('.tagList li a');
	tagItem.each(function(){
		
		$(this).bind('click',function(){
			var tagSelected = $(this).html();
			tagSelected = tagSelected.replace(/ /g,'-');
			tagSelected = tagSelected.toLowerCase();
			
			conf.move.fadeOut('fast',function(){
				
				conf.move.html();
				
				var projects = galeria.projects;
				var html = '';
	
				for (var i = 0 ; i < projects.length ; i++) {
					var tagInClass = projects[i].tag.replace(/ /g,'-');
					tagInClass = tagInClass.toLowerCase();
					
					if(i==0){ html = '<div class="col">'; }
					
					if(tagSelected == tagInClass){
						html += '<div class="work '+tagInClass+'">'+
									'<img src="../img/'+projects[i].imageName+'" width="225" height="100" alt="trabajo 1" />'+
									'<div class="contentInfo">'+
										'<h3>'+projects[i].title+'</h3>'+
										'<p class="tag">'+projects[i].tag+'</p>'+
										'<p class="date">'+projects[i].date+'</p>'+
									'</div>'+
							    '</div>';

						if((i+1)%2==0){
							if( (i+1) == projects.length){
								html += '</div>';
							}else{
								html += '</div>';
								html += '<div class="col">';
							}
						}
					}
				}

				conf.move.html(html);
				slider(galeria,conf);
				conf.move.css('margin-left','0px');
				conf.move.fadeIn();

			});

		});
	});
}

/****** FUNCIONES DEL SLIDER ******/

var slider = function(galeria,conf){
	
	conf.firstImage=1;
	
	//Creo las flechas y las agrego al documento
	var snippetArrows = '<a href="javascript:void(0)" id="arrowLeft"><span style="display:none;">PREV</span></a>'+
						'<a href="javascript:void(0)" id="arrowRight"><span style="display:none;">NEXT</span></a>';
	
	conf.container.append(snippetArrows);
	//Una vez creadas guardo las flechas en variables para usarlas despues.
	var arrowLeft = $('.gallery #arrowLeft');
	var arrowRight = $('.gallery #arrowRight');
	
	var columnas = $('.gallery .col');
	if(columnas.length > 4){
		
		//acomodo las flechas y muestro la flecha derecha
		arrowLeft.css('display','none');
		arrowRight.css('display','block');
		
		//cuento las paginas, cada 4 columnas va una pagina..
		var cont = 0;
		var pages = 0;
		columnas.each(function(){
			cont++;
			if(cont%4 == 0){
				pages++;
			}
		});
		
		prevImg = function(){
			
			conf.firstImage--;
			//animo 
			if(conf.firstImage == 1){
				conf.move.animate({
					'marginLeft' : 0
				},conf.velocity,conf.easing);
			}else{
				conf.move.animate({
					'marginLeft' : - ( $('.mask').width() * (conf.firstImage-1) ) - 20
				},conf.velocity,conf.easing);
			}
			
			//muestro u oculto la flecha anterior
			if(conf.firstImage <= 1){
				arrowLeft.css('display','none');
			}else{
				arrowLeft.css('display','block');
			}
			//muestro la flecha siguiente..
			arrowRight.css('display','block');
		}
		
		nextImg = function(){
			//animo
			conf.move.animate({
				'marginLeft' : - ( $('.mask').width() * conf.firstImage ) - 20
			},conf.velocity,conf.easing);
			
			conf.firstImage++;
			//muestro la flecha anterior
			arrowLeft.css('display','block');
			
			//muestro y oculto la flecha siguiente
			
			if((conf.firstImage - 1) >= pages){
				arrowRight.css('display','none');
			}else{
				arrowRight.css('display','block');
			}
		}
		
		//Comportamiento para las flechas
		arrowLeft.bind('click',prevImg);
		arrowRight.bind('click',nextImg);
	}else{
		arrowLeft.remove();
		arrowRight.remove();
	}
}


$(function(){
	navegador = $(window);
	
	//acomodo el tamaño de la mascara al tamaño de la pantalla.
	conf.container.css("width",navegador.width()+"px");
	
	//cargo todo el portfolio
	htmlPortfolio(galeriaPortfolio,conf);
	
	//bindeo comportamiento a los tags
	tags(galeriaPortfolio,conf);
	
	//Ver todos
	$('#all').bind('click',function(){
		htmlPortfolio(galeriaPortfolio,conf);
	});
	
})