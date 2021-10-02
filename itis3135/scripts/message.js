var value = prompt("Enter a number between 1 and 0:"); //pass value to method

function validateEntry() {
    value=Math.round(value);
    value=Math.round(value);
    return this;
}
while (value>10 || value <0) {
    var value=prompt("Error the number entered is not between 1 and 10!")
}
var getShape = function(value) {
    var name;
    switch (value) //Switch case to assign the name variable to names
    {
        case 1:
        name = "Monogon";
        break;
        case 2:
        name = "Bigon";
        break;
        case 3:
        name = "Triangle";
        break;
        case 4:
        name = "Tetragon";
        break;
        case 5:
        name = "Pentagon";
        break;
        case 6:
        name = "Hexagon";
        break;
        case 7:
        name = "Heptagon";
        break;
        case 8:
        name = "Octagon";
        break;
        case 9:
        name = "Enneagon";
        break;
        case 10:
        name = "Decagon";
    }
    var myString;
    myString = "A shape with a number of sides of " + value +  " has a name of " + name + ".";
    document.write(myString); //print statement
}
    