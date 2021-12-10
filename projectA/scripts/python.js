$(document).ready(function() {
    $.ajax({
        url: 'programmers.json',
        data:'data',
        beforeSend: function() {
            $("#programmer").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#programmer").html("");
            
            $.getJSON("programmers.json", function(data){ 
                $.each(data, function() { 
                    $.each(this, function(key, value) { 
                        $("#programmer").append( 
                            "<h2>Name"+value.follow+"</h2>"+"<img src="+value.image+">"
                            
                            
                            
                            )
                        })
                    })
                })
            }
            
        })
    })