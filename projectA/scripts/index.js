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

 