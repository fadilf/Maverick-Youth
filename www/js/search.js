var query;
$( "#searchf" ).submit(function( event ) {
  event.preventDefault();
    search();
});
function search() {
    $("#display").html("");
    query = $("#searcht").val();
    var total, pages, count = 1;
    $.getJSON('http://www.maverickyouth.com/?json=get_search_results&search='+query+'&orderby=date&order=desc&count=1&page=1&exclude=content', function(ini) {
        total = ini.count_total;
        pages = Math.ceil(total/9);
        after();
    });


    function after() {
        if(total > 0){
            $.getJSON('http://www.maverickyouth.com/?json=get_search_results&search='+query+'&orderby=date&order=desc&count=9&page='+count+'&exclude=content,author', function(json) {
                for(var i=0;i<9;i++) {
                    $("#display").append("<article onclick='openp("+json.posts[i].id+")' class='item'><h3>"+json.posts[i].title+"</h3><img src='"+json.posts[i].attachments[0].images.medium.url+"' /><p>"+json.posts[i].excerpt+"</p></article>");
                }
                
                $("#display").append("<div class='more'><button onclick='more()'>Load More</button></div>");
            });
        } else {
            $("#display").append("<span id='mssg'>No results found.<br>:(</span>");
        }
    }

    function more() {
        if(count <= pages) {
            $(".more").remove();
            count++;
            $.getJSON('http://www.maverickyouth.com/?json=get_search_results&search='+query+'&orderby=date&order=desc&count=9&page='+count+'&exclude=content,author', function(json) {
                for(var i=0;i<9;i++) {
                    $("#display").append("<article onclick='openp("+json.posts[i].id+")' class='item'><h3>"+json.posts[i].title+"</h3><img src='"+json.posts[i].attachments[0].images.medium.url+"' /><p>"+json.posts[i].excerpt+"</p></article>");
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
}