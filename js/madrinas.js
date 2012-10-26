;(function(){

	$(function(){

		//GOOGLE MAPS
		if( typeof(google) != "undefined"){

			var options = {
				zoom: 15,
				center: new google.maps.LatLng(-34.660347,-58.426861),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				navigationControl: false,
				streetViewControl: false
			};
			var map = new google.maps.Map(document.getElementById('map'), options);

			new google.maps.Marker({
				position: map.getCenter()
				, map: map
				, title: 'Pulsa aquí'
				, cursor: 'default'
				, icon: './img/fd_map-flag.png'
				, draggable: true
			});

		}

		/* Inicializo modal GoogleMap */
		$("#openMap").click(function(){
			$(".contentMap").modal({

				onOpen: function (dialog) {
					$(".contentMap").css("visibility", "visible");
					dialog.overlay.fadeIn('fast', function () {
						dialog.container.slideDown('fast', function () {
							dialog.data.fadeIn('fast');
						});
					});
				},

				onClose: function (dialog) {
					$(".contentMap").css("visibility", "hidden");
					$.modal.close(); // must call this!
				}

			});
		});


	});

})();
