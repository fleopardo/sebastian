$('.ayuda .content .left-column h3').on('click',function(){
	if ( $(this).hasClass('active') ) {
		$(this).removeClass('active');
	}else{
		$(this).addClass('active');
	}
	$(this).next().stop(true,true).slideToggle();
});