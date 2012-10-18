;(function(window){

	$(function(){
		/*
		 * Cache de variables
		*/
		var document = window.document,

			winHeight = $(window).height(),

			sliderContent = $("#makeMeScrollable"),

			flagScrollOn = true,

			refreshHeight = function(){

				return $(window).height();

			};


		/*
		 * Ejecuto solo si existe el id "makeMeScrollable"
		*/
		if(sliderContent.length){

			/*
			 * Seteo el alto del slider = alto de pantalla
			*/
			sliderContent.css("height",winHeight).fadeIn();

			/*
			 * Bindeo el resize para recalcular el alto y reiniciar la galeria
			*/
			$(window).bind("resize",function(){

				setTimeout(function(){

					sliderContent.css("height",refreshHeight());

					sliderContent.smoothDivScroll("recalculateScrollableArea");

				},100);


			})

			/*
			 * Instanciacion de slider
			*/
			sliderContent.smoothDivScroll({
				autoScrollingMode: "always",
				autoScrollingStep: 4,
				autoScrollingInterval: 25
			});

			/*
			 * Bindeo el evento click para pausar y arrancar el slider
			*/
			sliderContent.bind("click", function() {

				if(flagScrollOn == true){

					$(this).smoothDivScroll("stopAutoScrolling");

					flagScrollOn = false;

				}else{

					$(this).smoothDivScroll("startAutoScrolling");

					flagScrollOn = true;

				}

			});

		}

	})

})(window);