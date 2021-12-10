$(document).ready(function(){
    $.getJSON("programmers.json", function(data) {
        $.each(data,function() {
            $.each(this, function(key, value) {
                $('#programmer').append(
                    "<h3>" + value.full_name + "</h3>" +
                    "<img src=" + " ' " + value.image + " '><br>" +
                    "<h3>" + value.description + "</h3>" +
                    "<p>" + value.follow + "</p><br>" 
                    );
                });
            });
        });
    });