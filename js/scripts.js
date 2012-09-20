$(function(){

	/*SUBMENU*/
	$(".submenu").css("display","none");
	
	//muestro el desplegable
	$('header nav > ul > li').mouseover(function(){
		$(this).children('ul').css("display","block");
	});
	
	//si me voy al desplegable lo mantengo visible
	$('.submenu').mouseover(function(){
		$(this).parent().addClass('current');
		$(this).css("display","block");
	});
	
	// si me voy del li principal o del desplegable oculto los desplegables
	$('header ul li, .submenu').mouseout(function(){
		$(this).parent().removeClass('current');
		$('.submenu').css("display","none");
	});


	/*INCIALIZACION DE PLUG IN SELECTMENU*/
	
	$('select').selectmenu({
		transferClasses:true
	});
	
	/*INICIALIZACION JCAROUSEL*/
	$('.jcarousel').jcarousel({
		scroll: 1,
		start : 1
	});

}); 