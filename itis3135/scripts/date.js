var username = prompt("What is your name?");
var howareyou= prompt("How are you doing today");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log("Today is :" + today.toDateString() + "and the time is: " + time.toDateString());
console.log("The Joking Dancing Panther co. welcomes you, Jpaint15 here!" );
console.log("We're glad you are doing " + howareyou);
