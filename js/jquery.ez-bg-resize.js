(function($) {
	
	// Global Namespace
    var jqez = {};

    // Define the plugin
    $.fn.ezBgResize = function(options) {
		
		// Set global to obj passed
		jqez = options;
		
		// If img option is string convert to array.
		// This is in preparation for accepting an slideshow of images.
		if (!$.isArray(jqez.img)) {
			var tmp_img = jqez.img;
			jqez.img = [tmp_img]
		}
		
		if($.browser.msie){
			$(function(){
				createImages();
			});
		}else{
			$("<img/>").attr("src", jqez.img).load(function() {
				createImages(this);
			});
		}
		
    };

	$(window).bind("resize", function() {
		resizeImage();
	});
	
	// Actual resize function
    function resizeImage() {

        $(".jq_ez_bg.notGallery").css({
            "position":"absolute",
            "top":"0px",
			"left":"0px",
            "z-index":"-1",
            "overflow":"hidden",
            "width":$(window).width() + "px",
            "height":$(window).height() + "px"/* ,
			"opacity" : jqez.opacity */
        });	
		
		$(".jq_ez_bg.gallery").css({
            "position":"absolute",
            "top":"0px",
            "z-index":"-1",
            "overflow":"hidden",
            "width":$(".jq_ez_bg.gallery").width() + "px",
            "height":$(window).height() + "px"/* ,
			"opacity" : jqez.opacity */
        });	
		
		
		// Image relative to its container
		$(".jq_ez_bg").children('img').css("position", "absolute");

        // Resize the img object to the proper ratio of the window.
        var iw = $(".jq_ez_bg.notGallery").children('img').width();
        var ih = $(".jq_ez_bg.notGallery").children('img').height();
        
        if ($(window).width() > $(window).height()) {
		   if (iw > ih) {
                var fRatio = iw/ih;
                $(".jq_ez_bg").children('img').css("width",$(window).width() + "px");
                $(".jq_ez_bg").children('img').css("height",Math.round($(window).width() * (1/fRatio)));

                var newIh = Math.round($(window).width() * (1/fRatio));

                if(newIh < $(window).height()) {
                    var fRatio = ih/iw;
                    $(".jq_ez_bg").children('img').css("height",$(window).height());
                    $(".jq_ez_bg").children('img').css("width",Math.round($(window).height() * (1/fRatio)));
                }
            } else {
                var fRatio = ih/iw;
                $(".jq_ez_bg").children('img').css("height",$(window).height());
                $(".jq_ez_bg").children('img').css("width",Math.round($(window).height() * (1/fRatio)));
            }
        } else {
            var fRatio = ih/iw;
            $(".jq_ez_bg").children('img').css("height",$(window).height());
            $(".jq_ez_bg").children('img').css("width",Math.round($(window).height() * (1/fRatio)));
        }
		
		// Center the image
		if (typeof(jqez.center) == 'undefined' || jqez.center) {
				
			if ($(".jq_ez_bg:not('.gallery')").children('img').width() > $(window).width()) {
				var this_left = ($(".jq_ez_bg").children('img').width() - $(window).width()) / 2;
				$(".jq_ez_bg").children('img').css({
					"top"  : 0,
					"left" : -this_left
				});
			}
			
			if ($(".jq_ez_bg:not('.gallery')").children('img').height() > $(window).height()) {
				var this_height = ($(".jq_ez_bg").children('img').height() - $(window).height()) / 2;
				$(".jq_ez_bg").children('img').css({
					"left" : 0,
					"top" : -this_height
				});
			}
			
		}

        $(".jq_ez_bg").css({
			"visibility" : "visible"
		});

		// Allow scrolling again
		/* $("body").css({
            "overflow":"auto"
        }); */
        
    }

	//function to create images in DOM
	function createImages(img){		
		if($.browser.msie){
			jqez.width = $(window).width();
			jqez.height = $(window).height();
		}else{
			jqez.width = img.width;
			jqez.height = img.height;
		}
		
		// Create a unique div container
		$("#home").append('<div class="jq_ez_bg gallery"></div>');
		$("#technology").append('<div class="jq_ez_bg notGallery"></div>');
		$("#creativity").append('<div class="jq_ez_bg notGallery"></div>');
		$("#strategy").append('<div class="jq_ez_bg notGallery"></div>');
		$("#art").append('<div class="jq_ez_bg notGallery"></div>');
		$("#contacto").append('<div class="jq_ez_bg notGallery"></div>');
		$("#content").append('<div class="jq_ez_bg notGallery"></div>');
		/* // Add the image to it.
		$(".jq_ez_bg").html('<img src="' + jqez.img[0] + '" width="' + jqez.width + '" height="' + jqez.height + '" border="0">'); */
		
		//galery home
		
		
						
		var galeriaHome = '';
		for (var i = 0; i<fotos_de_galeria.length;i++){
			galeriaHome += '<img src="img/'+fotos_de_galeria[i]+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">';
		}
		
		$("#home .jq_ez_bg").html(galeriaHome);
		$("#technology .jq_ez_bg").html('<img src="img/'+background_technology+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');
		$("#creativity .jq_ez_bg").html('<img src="img/'+background_creativity+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');
		$("#strategy .jq_ez_bg").html('<img src="img/'+background_strategy+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');
		$("#art .jq_ez_bg").html('<img src="img/'+background_art+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');
		$("#contacto .jq_ez_bg").html('<img src="img/'+background_contacto+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');
		$("#content .jq_ez_bg").html('<img src="img/'+background_content+'" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');
		
		// First position object
	   /*  $(".jq_ez_bg").css("visibility","hidden"); */

		// Overflow set to hidden so scroll bars don't mess up image size.
		$("body").css({
			"overflow":"hidden"
		});

		resizeImage();
	}
})(jQuery);