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

//OBJECT--------------
const car = {
    type: "Fiat",
    model: "500",
    weight: "850kg",
    color: "white",
    start: function () {
        this.drive(); //this refers to the owner of the function
        console.log("car is starting");
    },
    drive: function () {
        console.log("car is driving");
    }
};
console.log(car.type);
console.log(car["model"]);
car.start();
//use------of----this----in----object
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

let r = "Rahim"; //literal syntax
console.log(r);
console.log(typeof r);
let k = new String("Karim"); //it becomes an object
console.log(k);
console.log(typeof k);

//SREING----LENGTH
let text = "A B C";
let length = text.length;
console.log(length);

//JS ESCAPE-----CHARACTER
// let text = "We are the so-called "Vikings" from the north.";
// The string will be chopped to "We are the so-called ".
// To solve this problem, you can use an backslash escape character.
// The backslash escape character (\) turns special characters into string characters
let text1 = "We are the so-called \"Vikings\" from the north.";
let text2 = "We are the so-called \\Vikings\\ from the north."; //to show the oblique sign in console.