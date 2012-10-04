(function(){

	//Seteo un flag para pausar e iniciar el slider
	var flagSliderOn = true;

	//Instancio background slider
	var slides = $('#background-slide').superslides({
		'play': true,
		'slide_easing': 'easeOutQuint',
		'delay': 4000,
		'slide_speed': 1000,
		'pagination': false
	});

	// Pausar / reiniciar slider
	$('#background-slide').bind("click",function(){
		if(flagSliderOn == true){
			slides.superslides("stop");
			flagSliderOn = false;
		}else{
			slides.superslides("play");
			flagSliderOn = true;
		}
	});

	//Instanciar slider. El parametro es la velocidad del fadeIn que hace al arrancar.
	simpleSlideFade.init(3500);

})();