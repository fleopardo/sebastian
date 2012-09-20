/******************************************************
    * jQuery plug-in
    * Easy Background Image Resizer
    * Developed by J.P. Given (http://johnpatrickgiven.com)
    * Useage: anyone so long as credit is left alone
******************************************************/

/*  VARIABLE IMAGEHRATIO SETEARLA AL MOMENTO DE INICIAR PLUG IN.

<script>
		$(document).ready(function() {
			$("body").ezBgResize({
				img     : "img/fd_landing.jpg", // Relative path example.  You could also use an absolute url (http://...).
				opacity : 1,//Opacity. 1 = 100%.  This is optional.
				center  : false,// Boolean (true or false). This is optional. Default is true.
				imageHRatio : 0.5 // por defecto 1 (100% de alto)
			});
		});
	</script>

*/


(function($) {
	//console.info("entre");
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
		
		$("<img/>").attr("src", jqez.img).load(function() {
			jqez.width = this.width;
			jqez.height = this.height;
			
			// Create a unique div container
			$(".banner-container").append('<div id="jq_ez_bg"></div>');

			// Add the image to it.
			$("#jq_ez_bg").html('<img src="' + jqez.img[0] + '" width="' + jqez.width + '" height="' + jqez.height + '" border="0">');

			// First position object
	        $("#jq_ez_bg").css("visibility","hidden");

			// Overflow set to hidden so scroll bars don't mess up image size.
	        $("body").css({
	            "overflow":"hidden"
	        });

			resizeImage();
			acomodoTxtBanner();
			resizeContent();
		});
    };

	$(window).bind("resize", function() {
		resizeImage();
		acomodoTxtBanner();
		resizeContent(); //Se llama a la funcion pars que el contenido no pise al banner cuando resizea 
	});
	
	function acomodoTxtBanner(){
		var positionTxtBanner = $('#jq_ez_bg').children('img').height() - $('.txt-banner').height() - 35;
		$('.txt-banner').css('top' , positionTxtBanner);
	}
	
	//Funcion para que contenido no pise al banner
	function resizeContent(){
		var backgroundBanner = $('#jq_ez_bg').children('img').height() + 35;
		
		$('.content.clientes').css('marginTop' , backgroundBanner);
	}
	
	// Actual resize function
    function resizeImage() {
	
        $("#jq_ez_bg").css({
            "position":"absolute",
            "top":"0px",
            "left":"0px",
            "z-index":"-1",
            "overflow":"hidden",
            "width":$(window).width() + "px",
            "height":$(window).height() + "px",
			"opacity" : jqez.opacity
        });
		
		// Image relative to its container
		$("#jq_ez_bg").children('img').css("position", "relative");

        // Resize the img object to the proper ratio of the window.
        var iw = $("#jq_ez_bg").children('img').width();
        var ih = $("#jq_ez_bg").children('img').height();
        
		var alturaBanner = $(window).height() * jqez.imageHRatio;

        if ($(window).width() > $(window).height()) {
            //console.log(iw, ih);
            if (iw > ih) {
                var fRatio = iw/ih;
                $("#jq_ez_bg").children('img').css("width",$(window).width() + "px");
                $("#jq_ez_bg").children('img').css("height",Math.round($(window).width() * (1/fRatio)));

                var newIh = Math.round($(window).width() * (1/fRatio));
				
                if(newIh < alturaBanner) {
                    var fRatio = ih/iw;
                    $("#jq_ez_bg").children('img').css("height",alturaBanner);
                    $("#jq_ez_bg").children('img').css("width",Math.round(alturaBanner * (1/fRatio)));
                }
            } else {
                var fRatio = ih/iw;
                $("#jq_ez_bg").children('img').css("height",alturaBanner);
                $("#jq_ez_bg").children('img').css("width",Math.round(alturaBanner * (1/fRatio)));
            }
        } else {
            var fRatio = ih/iw;
            $("#jq_ez_bg").children('img').css("height",alturaBanner);
            $("#jq_ez_bg").children('img').css("width",Math.round(alturaBanner * (1/fRatio)));
        }
		
		// Center the image
		if (typeof(jqez.center) == 'undefined' || jqez.center) {
			if ($("#jq_ez_bg").children('img').width() > $(window).width()) {
				var this_left = ($("#jq_ez_bg").children('img').width() - $(window).width()) / 2;
				$("#jq_ez_bg").children('img').css({
					"top"  : 0,
					"left" : -this_left
				});
			}
			if ($("#jq_ez_bg").children('img').height() > alturaBanner) {
				var this_height = ($("#jq_ez_bg").children('img').height() - $(window).height()) / 2;
				$("#jq_ez_bg").children('img').css({
					"left" : 0,
					"top" : -this_height
				});
			}
		}

        $("#jq_ez_bg").css({
			"visibility" : "visible"
		});

		// Allow scrolling again
		$("body").css(
            "overflow-y","auto"
        );
		
        
    }
})(jQuery);