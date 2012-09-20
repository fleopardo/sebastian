$(function(){
	//cuando cualquier pagina carga, se le aplica la clase "loaded" al content
	//mostramos "loading" y cuando la carga finaliza, se anima.
	//cuando cargo un contenido creo un div "toAnimate" que tendra los estilos necesarios para que este oculto
	//terminada la animacion, busco ".loaded" y la borro del documento.
	//le cambio la clase "toAnimate" por "loaded".
	
	
	
	
	/***  IMPLEMENTACION  ***/ 
	var anchoDePantalla = $(window).width();
	//cuando cualquier pagina carga, se le aplica la clase "loaded" al content
	$('.content').addClass('loaded');
	
	//bindeo click a los links
	$("a").click(function(){
		
		//mostramos "loading" y cuando la carga finaliza, se anima.
		var loading = $('body').append('<div id="preload">LOADING</div>');
		
		//detecto que pagina quiero cargar
		var pageToLoad = $(this).attr('id');
		var namePageToLoad = $(this).text();
		
		//cuando cargo un contenido creo un div "toAnimate" que tendra los estilos necesarios para que este oculto
		$('nav').after('<div class="toAnimate"></div>');
		
		$('.toAnimate').css({
			'position':'relative',
			'top':0,
			'width': anchoDePantalla,
			'left': anchoDePantalla
		});
		
		$('.loaded').css({
			'position':'absolute',
			'top': 0,
			'width': anchoDePantalla,
			'left': 0
		});
		
		switch(pageToLoad){
			case 'homePage':
			var htmlName = 'index.html';
			break;
			
			case 'portfolioPage':
			var htmlName = 'portfolio.html';
			break;
			
			case 'contactoPage':
			var htmlName = 'contacto.html';
			break;
			
			case 'blogPage':
			var htmlName = 'blog.html';
			break;
			
			case 'seguinosPage':
			var htmlName = 'seguinos.html';
			break;
			
			case 'clientesPage':
			var htmlName = 'clientes.html';
			break;
		}
		
		$('.toAnimate').load("./"+htmlName+" .content", function(response,status,xhr){
			if(xhr.status >= 400){
				alert("Se produjo un error en la carga");
			}else{
				
				$('#preload').remove();
				
				$('.loaded').animate({
					left : -anchoDePantalla
				},'slow');
				
				$('.toAnimate').animate({
					left : 0
				},'slow',function(){
					$('.loaded').remove();
					$('.toAnimate').addClass('loaded');
					$('.loaded').removeClass('toAnimate');
					
					//scripts a cargar segun seccion
					switch(htmlName){
						case "portfolio.html":
						$.getScript('../js/portfolio.js');
						break;
						
						case 'contacto.html':
						$.getScript('../js/jquery.label_handle.js');
						$.getScript('../js/map.js');
						break;
						
					}
				});
				
				
				var pathName = window.location.pathname;
				window.history.pushState(null, namePageToLoad, pathName+"#!/"+pageToLoad);
				return false;
			}
		});
		
	});
	
})