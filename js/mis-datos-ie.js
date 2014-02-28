function readURL(imgFile)
{    
    var newPreview = document.getElementById("preview_ie");
    newPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgFile.value;
    newPreview.style.width = "160px";
    newPreview.style.height = "120px";
}