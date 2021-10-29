var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];
var selected;
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};
function updateCalorie() {
    var update = document.getElementById("calorie").value;
    const rbs = document.querySelectorAll('input[name="day"]');
    var selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            var selectedValue = rb.value;
            break;
        }
    }
    if(selectedValue=="Monday"){
        calories.splice(calories.indexOf(3000),1,update)
        alert(JSON.stringify(calories));
     }
     if(selectedValue=="Tuesday"){
        calories.splice(calories.indexOf(2500),2,update)
        alert(JSON.stringify(calories));
     }
     if(selectedValue=="Wednesday"){
         calories.splice(calories.indexOf(1500),3,update)
        alert(JSON.stringify(calories));
     }
     if(selectedValue=="Thursday"){
         calories.splice(calories.indexOf(4000),4,update)
        alert(JSON.stringify(calories));
     }
     if(selectedValue=="Friday"){
         calories.splice(calories.indexOf(2200),5,update)
        alert(JSON.stringify(calories));
     }
     if(selectedValue=="Saturday"){
        calories.splice(calories.indexOf(1200),6,update)
        alert(JSON.stringify(calories));
     }
     if(selectedValue=="Sunday"){
        calories.splice(calories.indexOf(4400),7,update)
        alert(JSON.stringify(calories));
     }

}
function showAverageCalories() {
    Array.max=function(calories) {
            return Math.max.apply(Math,calories);
    }
}
function showMax() {
    
}