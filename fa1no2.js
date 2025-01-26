var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");
var byear = prompt("Enter birth year: ");

var age = 2025 - byear;

document.getElementById("greeting").innerHTML = "Hello " + fname + " " + lname + "! How does it feel to be " + age +" years old?";
