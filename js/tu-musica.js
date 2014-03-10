function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            $('.cargar-imagen label').css({
                'background-image': 'url(' + e.target.result + ')',
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                '-o-background-size': 'cover',
                'background-size': 'cover'
            });

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