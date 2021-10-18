
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "people.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("table");
  let table="<tr><th>Name</th><th>Social</th></tr>";
  for (let i = 0; i <x.length; i++) { 
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

 