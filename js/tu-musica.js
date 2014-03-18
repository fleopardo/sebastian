var counterSong = 0;

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            $('.cargar-imagen img').attr('src', e.target.result);

        }

        reader.readAsDataURL(input.files[0]);
    }
}



$('.cargar-imagen input[type="file"]').change(function(){
    readURL(this);
});



$(".album-list ul").sortable({
    update: function( event, ui ) {
        console.log("Cambió de posición");
    }
});



$(".cargar-cancion").on("click", function (event){

    counterSong += 1;

    var form = $(".template").clone().html();

    form = form.replace(/xx/g, counterSong);

    $(form).appendTo($("#subir-album")).removeClass("DN");

    /* Creo el dimmer */
    $('<div id="dimmer"></div>').appendTo($("section.content"));


    /* Borrar cancion */
    $("#subir-cancion-" + counterSong).find(".delete").one("click", function () {
        $("#subir-cancion-" + counterSong).remove();
        $("#dimmer").remove();
    })

    /* Cerrar formulario de la cancion */
    $("#dimmer").one("click", function () {
        $(this).remove();
        console.log($("#subir-cancion-" + counterSong))
        $("#subir-cancion-" + counterSong).hide();
    })

    $("section.content").addClass("off");

    event.preventDefault();
});




