var value = prompt("Enter a number between 1 and 10:"); //pass value to method
validateEntry();


while (value>10 || value <0) {
    var value=prompt("Error the number entered is not between 1 and 10!")
}
var getShape = function() {
    switch (value) //Switch case to assign the name variable to names
    {
        case 1:
        alert("Monogon");
        break;
        case 2:
        alert("Bigon")
        break;
        case 3:
        alert("Triangle");
        break;
        case 4:
        alert("Tetragon");
        break;
        case 5:
        alert("Pentagon");
        break;
        case 6:
        alert("Hexagon");
        break;
        case 7:
        alert("Heptagon");
        break;
        case 8:
        alert("Octagon");
        break;
        case 9:
        alert("Enneagon");
        break;
        case 10:
        alert("Decagon");
    }
}
function validateEntry() {
    value=Math.round(value);
    value=Math.round(value);
    return this;
}
    