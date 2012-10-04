(function(){


	//Instancio background slider
	$('#background-slide').superslides({
		'play': true,
		'slide_easing': 'easeOutQuint',
		'slide_speed': 3000,
		'pagination': false
	});

	//Instanciar slider con fade
	simpleSlideFade.init(3500);


})();