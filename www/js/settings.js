$(window).ready(function(){
    $("#txt-size").val(localStorage.getItem("txt-size"));
});
$( "#settingsf" ).submit(function( event ) {
    event.preventDefault();
    var txt = $("#txt-size").val()
    localStorage.setItem("txt-size",txt);
    window.location.href = "settings.html";
});