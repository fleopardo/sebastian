$('.colors-selector a').on('click',function(event){

    event.preventDefault();

    $('.colors-selector a').removeClass('selected');

    if ( $(this).hasClass('selected') ) {
		$(this).removeClass('selected');
	}else{
		$(this).addClass('selected');
	}

	$('.container-images img').attr('src', $(this).attr('href'));
});

