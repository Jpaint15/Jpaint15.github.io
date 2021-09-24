var username = prompt("What is your name?");
var howareyou= prompt("How are you doing today");
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var monthName;

var hours = currentDate.getHours(); 
var mins = currentDate.getMinutes(); 
var secs = currentDate.getSeconds(); 
var strToAppend;
if (hours >12 )
{
    hours1 = "0" + (hours - 12);
    strToAppend = "PM";
}
else if (hours <12)
{
    hours1 = "0" + hours;
    strToAppend = "AM";
}
else
{
    hours1 = hours;
    strToAppend = "PM";
}

if(mins<10)
mins = "0" + mins;
if (secs<10)
secs = "0" + secs;

switch (month)
{
    case 1:
    monthName = "January";
    break;
    case 2:
    monthName = "February";
    break;
    case 3:
    monthName = "March";
    break;
    case 4:
    monthName = "April";
    break;
    case 5:
    monthName = "May";
    break;
    case 6:
    monthName = "June";
    break;
    case 7:
    monthName = "July";
    break;
    case 8:
    monthName = "August";
    break;
    case 9:
    monthName = "September";
    break;
    case 10:
    monthName = "October";
    break;
    case 11:
    monthName = "November";
    break;
    case 12:
    monthName = "December";
    break;
}

var year = currentDate.getFullYear();
var myString;
myString = "Today is " + day +  " - " + monthName + " - " + year + "and  the time is: " + hours1 + ":" + mins + ":" + secs + " " + strToAppend + ".<br />The  Joking Dancing Panther co. welcomes you," + username + "<br/>We're glad you are doing " + howareyou;
document.write(myString);
var $ = function (id)
{
    return document.getElementById(id);
}
var calculateTax = function() {
    var total;
    var income = parseFloat( $("income").value );
    
    function calcTax(amount){
        var calculate = 0;
        if(amount > 85650){
            tax = (amount - 85650) * .28 + 870.0+(35350-8700)*.15+(89350-36900)*.25;
        }
        else if( amount > 35350){
            tax = (amount - 35350) * .25 + 870.0+(35350-8700)*.15;    
        }
        else if(amount > 8700){
            tax = (amount - 8700) * .15 + 870.0;
        }
        else{
            tax = amount * .10;
        }
        tax += amount * .153;
        return tax + amount;
        /*
        10% on taxable income from $0 to $8,700
        15% on taxable income over $8,700 to $35,350
        25% on taxable income over $35,350 to $85,650
        */
    }
}
var clear_click=function()
{
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("total").value = "";
    $("sales_tax").value = "";
}
function clearSubTotal()
{   
    $("subtotal").value = "";   
}
function clearTaxRate()
{
    $("tax_rate").value = "";   
}
window.onload = function ()
{
    $("btnCalculate").onclick=calculateTax();
}

