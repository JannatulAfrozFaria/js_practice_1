function myFunction() {
    document.getElementById("changePara3").innerHTML = "Demo Paragraph 3 changed."
}
//  OPERATORS--------
//  Arithmetic Operators
// + , - , * , / , %, ++, --

// logical operator 
// ||, &&, !, 

// Comparison Operators
// >, <, >=, <=, ?, ==, ===, !=, !==,

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=

// Arithmetic Operators
//  typeof
//  instanceof

// ADDING STRINGS AND NUMBERS------
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);
// TYPE OF------CHECKS THE TYPE OF A VARIABLE
console.log(typeof z);

//DATA-----TYPES
// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let t = 16 + 4 + "Volvo";
//output : 20Volvo
console.log(t);
let t1 = "Volvo" + 16 + 4;
//output : Volvo164
console.log(t1);

//adding numbers and strings
let age = "He is" + (2021 - 1990) + "years old";
console.log(age);

//CONVERT Fahrenheit TO CELSIUS
function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

let value = toCelsius(77);
document.getElementById("convert").innerHTML = value;
document.getElementById("resultant").innerHTML = "The converted temperature is" + toCelsius(77) + "Celsius";
