$(document).ready(function(){
	
	
	/*INICIO PLUG IN LABELS*/
	$('.blog input[type=text], .blog textarea, .contacto input[type=text], .contacto textarea, .crac-agence input[type=text]').labelHandle();
	
	
	
	/*CRAC AGENCE AGREGAR MASCARA NEGRA CON TEXTO DENTRO */
	$('.crac-agence .col-izq li').each(function(){
		$(this).mouseenter(function(){
			$(this).append('<div class="mascara"></div> ');
			var alturaLista = $('.crac-agence .col-izq li').height();
			var alturaNombre = $(this).children('p').height();
			var centrarNombre = (alturaLista - alturaNombre) / 2;
			$(this).children('p').css({
			'top':centrarNombre,
			'display':'block'
			});
		});
		
		$(this).mouseleave(function(){
			$(this).children('.mascara').remove();
			$(this).children('p').css({
			'display':'none'
			});
		});
		
	});




});