;(function(){

	$(function(){

		var background = $("#bg"),

			contentGlobal = $(".contentGlobal");


		if(background){

			var winHeight = $(window).height();

			contentGlobal.css("height",winHeight);

			$(window).resize(function(){

				setTimeout(function(){

					var winHeight = $(window).height();

					contentGlobal.css("height",winHeight);

				},100);

			})

		}

	});

})();

