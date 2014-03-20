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


/*
 ** Funcionalidad para crear
 ** borrar y modificar canciones
 */

/* Borrar cancion */
function borrarCancion(counterSong){
    $("#subir-cancion-" + counterSong).remove();
    $("section.content").removeClass("off");
    $("#dimmer").remove();
}

/* Cerrar cancion */
function cerrarCancion(counterSong){
    $("#dimmer").remove();
    $("section.content").removeClass("off");
    $("#subir-cancion-" + counterSong).addClass('DN');
}

/* Crear el dimmer*/
function createDimmer(){
    $('<div id="dimmer"></div>').appendTo($("section.content"));
}

/* Agregar cancion a la lista de canciones */
function createSongList(name, referenceToSong){
    var html = '<li class="song-load" data-position="' + referenceToSong + '"><span>' +  name + '</span></li>';
    $(html).prependTo($('.cargar-cancion'));
}

/* Modifica el nombre de la cancion */
function modifySongList(name, referenceToSong){
    $('.cargar-cancion [data-position="' + referenceToSong + '"]').text(name);
}

/* muestra el div con el formulario */
function showSongForm(counterSong, modify){

    var songNode = $("#subir-cancion-" + counterSong),
        initialVal = songNode.find(".nombre-cancion input").val();

    $('input[placeholder],textarea[placeholder]').placeholder();

    $('.cargar-cancion .song-load[data-position="' + counterSong + '"]').hide();
    $("section.content").addClass("off");

    createDimmer();

    songNode.removeClass("DN");

    /* Bind Borrar cancion */
    songNode.find(".delete").one("click", function (event) {
        event.preventDefault();
        borrarCancion(counterSong);
    });

    /* Bind Cerrar formulario de la cancion */
    $("#dimmer").one("click", function () {

        var name = songNode.find(".nombre-cancion input").val();
        $('.cargar-cancion .song-load[data-position="' + counterSong + '"]').show();

        // Modificando uno existente

            if (name !== "" && name !== initialVal) {

            }

        } else {
        // Creando uno nuevo
            if (name === "" && name === initialVal && name === songNode.find(".nombre-cancion input").attr('placeholder')) {
                songNode.remove();
                alert("No guardamos la cancion porque no tiene nombre");
            }else{

                if (!modify) {
                    createSongList(name, counterSong);
                }else{
                    modifySongList(name, counterSong);
                }
            }

        }





        cerrarCancion(counterSong);


    });

}



/* Delegate events lista de canciones */
$(".cargar-cancion").on("click", "li", function(event){

    if ($(this).hasClass('song-load')) {

        var songToShow = $(this).attr('data-position');

        showSongForm(songToShow,true);
    }

});



/* Crear uno nuevo */
$(".cargar-cancion .add").on("click", function (event){

    event.preventDefault();

    var form = $(".template").clone().html();

    counterSong += 1;
    form = form.replace(/xx/g, counterSong);
    $(form).appendTo($("#subir-album"))

    showSongForm(counterSong);

});

