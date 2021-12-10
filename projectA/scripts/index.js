function ajax() {
    const doc = new XMLHttpRequest();
    doc.onload = function() {
      developers(this);
    }
    doc.open("GET", "people.xml");
    doc.send();
  }
  function developers(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("table");
    var table="<tr><th>Name</th><th>Social</th></tr>";
    for (var i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("social")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("people").innerHTML = table;
  }
  

$('raptor').click(function(){
    window.location='https://raptor.martincarlisle.com' + this.id;
 })

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
 