$(document).ready(function(){
    var url= "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"
    
        $.getJSON(url,function(data){
    
            var html = ""
            $.each(data.items, function(i,item){
    
            html += "<a title=" + item.title + " rel=lightbox[] href=" + item.media.m+"</a>"+"<img src="+item.media.m+">"
            })
            $("#new_building").html(html)
        })
    });