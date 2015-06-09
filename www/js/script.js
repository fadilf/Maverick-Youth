var menub = false, bwidthp;
$(window).ready(function(){
    var bwidth = $("body").width();
    bwidthp = (bwidth*30)/100;
    if(bwidthp < 120) {
        bwidthp = "120px";
    } else {
        bwidthp += "px";
    }
    $("#nav").css("width", bwidthp);
    $("#mb").click(function(){
        menub = !menub;
        menu();
    });
    $("#nav").css("transform","translateX(-"+bwidthp+")");
});
function menu() {
    if(menub) {
        $(".b1").css("transform","translate(0, 9px) rotate(40deg)");
        $(".b2").css("opacity","0");
        $(".b3").css("transform","translate(0, -9px) rotate(-40deg)");
        $("#page").css("left",bwidthp);
        $("#nav").css("left",bwidthp);
        $("#topbar").css("left",bwidthp);
    } else {
        $(".b1").css("transform","translate(0, 0) rotate(0deg)");
        $(".b2").css("opacity","1");
        $(".b3").css("transform","translate(0, 0) rotate(0deg)");
        $("#page").css("left","0");
        $("#nav").css("left","0");
        $("#topbar").css("left","0");
    }
}