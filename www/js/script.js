if(localStorage.getItem("txt-size") === null) {
    localStorage.setItem("txt-size","2");
}
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

var txtsize = localStorage.getItem("txt-size");
var styles = "<style>.topic{font-size:"+(0.6*txtsize)+"em;}.item p{font-size:"+(0.5*txtsize)+"em;}#heading{font-size:"+(1.1*txtsize)+"em}#post,#meta{font-size:"+(0.5*txtsize)+"em}</style>";
$("head").append(styles);

setInterval(function(){
    var bwidth = $("body").width();
    bwidthp = (bwidth*30)/100;
    if(bwidthp < 120) {
        bwidthp = "120px";
    } else {
        bwidthp += "px";
    }
    $("#nav").css("width", bwidthp);
    $("#nav").css("transform","translateX(-"+bwidthp+")");
    menu();
},100);