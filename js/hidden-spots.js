var gallery = {
	group:[
		{
			id:'foto1',
			img:[
				'img/im_slider1.jpg'
			]
		},
		{
			id:'foto2',
			img:[
				'img/im_slider1.jpg'
			]
		},
		{
			id:'foto3',
			img:[
				'img/im_slider1.jpg'
			]
		},
		{
			id:'foto4',
			img:[
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
		var images = grupoDeGalerias[i].img;
		//recorro el array de imagenes que tiene cada galeria
		for( var e = 0 ; e < images.length ; e++ ){
			content += '<img src='+images[e]+' id='+grupoDeGalerias[i].id+' class="DN"/>';
		}
	};
	//las appendeo al documento
	$('.destacado').append(content);

}

function delay(){
	$('#loading').fadeOut(function(){
		$('#loading').remove();
		$('.destacado img:first').removeClass('DN');
		$('.destacado img:first').addClass('DB');
	});
}

$(function(){
	//centro la imagen loading..
	var widthContainer = $(".destacado").width();
	var heightContainer = $(".destacado").height();
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

			$(".destacado img.DB").fadeOut('fast',function(){
				$(this).removeClass('DB');
				$(this).addClass('DN');
			});
		}
	});

})