$('.ayuda .content .left-column h3').on('click',function(){
	if ( $(this).hasClass('active') ) {
		$(this).removeClass('active');
		$(this).parent('div').css('background','none');
	}else{
		$(this).addClass('active');
		$(this).parent('div').css('background','#ffffff');
	}
	$(this).next().stop(true,true).slideToggle();
});