var gallery = {
	group:[
		{
			id:'summerGallery',
			img:[
				'img/im_slider1.jpg',
				'img/im_slider1.jpg'
			]
		},
		{
			id:'winterGallery',
			img:[
				'img/im_slider1.jpg',
				'img/im_slider1.jpg',
				'img/im_slider1.jpg'
			]
		},
		{
			id:'springGallery',
			img:[
				'img/im_slider1.jpg',
				'img/im_slider1.jpg',
				'img/im_slider1.jpg',
				'img/im_slider1.jpg'
			]
		},
		{
			id:'autumnGallery',
			img:[
				'img/im_slider1.jpg',
				'img/im_slider1.jpg',
				'img/im_slider1.jpg',
				'img/im_slider1.jpg',
				'img/im_slider1.jpg'
			]
		}
	]
}

function createGallery(obj){
	
	//creo la variable que contendra el html de la galeria
	var content = '';
	//array de galerias
	var grupoDeGalerias = obj.group;
	//recorro el array para entrar en cada posicion/galeria
	for( var i = 0 ; i < grupoDeGalerias.length ; i++ ){
		content += '<div class="contentIndividualGallery DN" id="'+grupoDeGalerias[i].id+'"><ul>';
		var images = grupoDeGalerias[i].img;
		//recorro el array de imagenes que tiene cada galeria
		for( var e = 0 ; e < images.length ; e++ ){
			content += '<li><img src='+images[e]+' /></li>';
		}
		content += '</ul></div>';
	};

	//las appendeo al documento
	$('#wrapperGalleries').append(content);
	
	//las instancio a todas
	$('.contentIndividualGallery ul').each(function(){
		$(this).jcarousel({
			scroll: 1,
			start : 1
		});
	});
}


function delay(){
	$('#loading').fadeOut(function(){
		$('#loading').remove();
		$('.contentIndividualGallery:first').removeClass('DN');
		$('.contentIndividualGallery:first').addClass('DB');
	});
}

$(function(){
	//centro la imagen loading..
	var widthContainer = $("#wrapperGalleries").width();
	var heightContainer = $("#wrapperGalleries").height();
	var widthImage = $("#loading").width();
	var heightImage = $("#loading").height();
	
	var top = (heightContainer-heightImage)/2;
	var left = (widthContainer-widthImage)/2;
	
	$("#loading").css({
		'position':'absolute',
		'top':top,
		'left':left,
	});
	
	$("#loading").removeClass('DN');

	//creo la galeria
	createGallery(gallery);
	
	//muestro la galeria despues del tiempo seteado
	setTimeout("delay()",1000);

	//comportamiento a los botones
	$('.show').click(function(){
		var section = $(this).attr('data-id');
		if( $("#"+section).hasClass('DN') ){
			$("#"+section).fadeIn('slow',function(){
				$(this).removeClass('DN');
				$(this).addClass('DB');
			});

			$(".contentIndividualGallery.DB").fadeOut('fast',function(){
				$(this).removeClass('DB');
				$(this).addClass('DN');
			});
		}
	});

})