var total, pages, count = 1;
$.getJSON('http://www.maverickyouth.com/?json=get_posts&orderby=date&order=desc&count=1&page=1&exclude=content', function(ini) {
    total = ini.count_total;
    pages = Math.ceil(total/9);
    after();
}).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    $("#display").html("There was an error.<br><button onclick='location.reload()'>Click to refresh</button>");
});


function after() {
    $.getJSON('http://www.maverickyouth.com/?json=get_posts&orderby=date&order=desc&count=9&page='+count+'&exclude=content,author', function(json) {
        for(var i=0;i<9;i++) {
            $("#display").append("<article onclick='openp("+json.posts[i].id+")' class='item'><h3 class='topic'>"+json.posts[i].title+"</h3><img src='"+json.posts[i].attachments[0].images.medium.url+"' /><p>"+json.posts[i].excerpt+"</p></article>");
        }
        $("#display").append("<div class='more'><button onclick='more()'>Load More</button></div>");
    });
}

function more() {
    if(count <= pages) {
        $(".more").remove();
        count++;
        $.getJSON('http://www.maverickyouth.com/?json=get_posts&orderby=date&order=desc&count=9&page='+count+'&exclude=content,author', function(json) {
            for(var i=0;i<9;i++) {
                $("#display").append("<article onclick='openp("+json.posts[i].id+")' class='item'><h3 class='topic'>"+json.posts[i].title+"</h3><img src='"+json.posts[i].attachments[0].images.medium.url+"' /><p>"+json.posts[i].excerpt+"</p></article>");
            }
            $("#display").append("<div class='more'><button onclick='more()'>Load More</button></div>");
        });
    } else {
        $(".more").remove();
        $("#display").append("<span id='mssg'>No more posts.</span>");
    }
}

function openp(id) {
    sessionStorage.setItem("id",id);
    window.location.href="post.html";
}