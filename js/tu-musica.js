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
        console.log("Cambió de posición")
    }
});