var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	
	
	

	
	var total = 0;
	

		//onclick handler for item1
	document.getElementById("espresso").onclick=function(){ //add onclick event handler for each image
		
		document.getElementById("order").append('$1.95 - Espresso - Delicious espresso. Wanna try it?'); 	// for click event add item to order and update total
		
		total = (parseFloat(total) + parseFloat(1.95)).toFixed(2);
		
		document.getElementById("total").innerHTML="<em>Total:"+total+" </em>";
		
	};
	

		//onclick handler for item2
	document.getElementById("cappuccino").onclick=function(){
		
		document.getElementById("order").append('$3.45 - Cappuccino - Delicious Cappuccino.');
		
		total = (parseFloat(total) + parseFloat(3.45)).toFixed(2);
		
		document.getElementById("total").innerHTML="<em>Total:"+total+" </em>"; // display order and total
		
	};
	
	
	
};