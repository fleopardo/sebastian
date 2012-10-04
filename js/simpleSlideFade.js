/*
 * Simple jQuery Slideshow Script
*/

var simpleSlideFade = (function(){

    function init(timer){

    	setInterval(function(){

	    	var $active = $('.slideshow img.active');

		    if ( $active.length == 0 ) $active = $('.slideshow img:last');

		    var $next =  $active.next().length ? $active.next() : $('.slideshow img:first');

		    // uncomment the 3 lines below to pull the images in random order

		    // var $sibs  = $active.siblings();
		    // var rndNum = Math.floor(Math.random() * $sibs.length );
		    // var $next  = $( $sibs[ rndNum ] );

		    $active.addClass('last-active');

		    $next
		    	.css({opacity: 0.0})
		    	.addClass('active')
		        .animate({opacity: 1.0}, 1000, function() {
		            $active.removeClass('active last-active');
		    	});

		},timer);

	}

	return{
		init: init
	}

})();