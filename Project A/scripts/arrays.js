var person = [];
var salaries = [];
//Function to display results
function displayResults(){
    var average = 0;
    var highest = 0, 
    for (var j = 0; j < salaries.length; j++){
        average += salaries[j];
        if (salaries[j] > highest){
            highest = salaries[j];
        }
    }
    if (salaries.length != 0){
        average = average/salaries.length;
    }
    let result = document.getElementById("results");
    result.innerHTML = "<h2>Highest Salary</h2>";
    result.innerHTML += "<p>" + highest + "</p>";
    result.innerHTML += "<h2>Average Salary</h2>";
    result.innerHTML += "<p>" + average + "</p>"
}
//Function to display salary of employee
function displaySalary(){
    var table = document.getElementById("result_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
    for (var j = 0; j < person.length; j++){
        table.innerHTML += "<tr><td>" + person[j] + "</td><td>" + salaries[j] + "</td></tr>";
    }
}
//Function to addSlaray to employee
function addSalary(){
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    
    if (name == ""){
        document.getElementById("namenull").innerHTML = "Please Enter Name";
        alert("Please Enter Name");
    }
    if (salary == ""){
        document.getElementById("salarynull").innerHTML = "Please Enter Salary";
        alert("Please Enter Salary");
    }
    if (name != "" && salary!= ""){
        person.push(name);
        salaries.push(salary);
        alert("Added Successfully!");
    }     
}
//Made function for dropdown menu of employee's name's
function displayEmployees(){
    var employees = document.getElementById("employees");
    employees.innerHTML = "";
    for (var j = 0; j < person.length; j++){
        employees.innerHTML += "<option>" + person[j] + "</option>";
    }      
}