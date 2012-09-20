$(function(){

	/* THUMBNAILS*/
	
	$('.home .page-sections .cont-thumb').mouseenter(function(){
		$(this).append('<a href="#" title="" class="appended"><img src="img/fd_index-thumbs-hover.png" alt="" class="thumb-hover" /></a>');
	});
	
	$('.home .page-sections .cont-thumb').mouseleave(function(){
		$(this).children('.appended').remove();
	});
	
}); 