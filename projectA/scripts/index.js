$('raptor').click(function(){
    window.location='https://raptor.martincarlisle.com' + this.id;
 })

 function ajax() {
     const doc=new XMLHttpRequest();
     doc.onload=function() {
            developers(this);
     }
     doc.open("GET","people.xml");
     doc.send();
 }

 function developers(xml) {
     const xmlDoc=xml.responseXML;
     const x=xmlDoc.getElementByTagName("table");
     let table="<tr><th>Name</th><th>Job</th></tr>";
     for (let i=0;i,x.length;i++) {
         table+="<tr><td>" +
         x[i].getElementByTagName("name")[0].childNodes[0].nodeValue +
         "</td><td>" +
         x[i].getElementByTagName("social")[0].childNodes[0].nodeValue +
         "</td><td>";
     }
     document.getElementById("people").innerHTML =table;
 }