var total, pages, count = 1;
$.getJSON('http://www.maverickyouth.com/?json=get_posts&orderby=date&order=desc&count=1&page=1&exclude=content', function(ini) {
    total = ini.count_total;
    pages = Math.ceil(total/9);
    after();
});


function after() {
    $.getJSON('http://www.maverickyouth.com/?json=get_posts&orderby=date&order=desc&count=9&page='+count+'&exclude=content,author', function(json) {
        for(var i=0;i<9;i++) {
            $("#display").append("<article onclick='openp("+json.posts[i].id+")' class='item'><h3>"+json.posts[i].title+"</h3><img src='"+json.posts[i].attachments[0].images.medium.url+"' /><p>"+json.posts[i].excerpt+"</p></article>");
        }
        $("#display").append("<button class='more' onclick='more()'>Load More</button>");
    });
}

function more() {
    if(count <= pages) {
        $(".more").remove();
        count++;
        $.getJSON('http://www.maverickyouth.com/?json=get_posts&orderby=date&order=desc&count=9&page='+count+'&exclude=content,author', function(json) {
            for(var i=0;i<9;i++) {
                $("#display").append("<article onclick='openp("+json.posts[i].id+")' class='item'><h3>"+json.posts[i].title+"</h3><img src='"+json.posts[i].attachments[0].images.medium.url+"' /><p>"+json.posts[i].excerpt+"</p></article>");
            }
            $("#display").append("<button class='more' onclick='more()'>Load More</button>");
        });
    } else {
        $(".more").remove();
        $("#display").append("No more posts.");
    }
}

function openp(id) {
    sessionStorage.setItem("id",id);
    window.location.href="post.html";
}