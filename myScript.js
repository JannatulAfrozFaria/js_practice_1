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

//HTML --------------------------TEMPLATES
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
//NUMBER------CONVERSION-------
let myNumber = 32;
myNumber.toString(32);//returns 10
myNumber.toString(16);//returns 20
myNumber.toString(12);//returns 28
myNumber.toString(10);//returns 32
myNumber.toString(8); //returns 40
myNumber.toString(2); //returns 100000

// NUMBERS-------AS-----OBJECTS
let num = 123;
let obj = new Number(123);
console.log( typeof num);
console.log( typeof obj);

//CONVERT TO NUMBER--------------------
//The Number() Method
console.log(Number(true));
console.log(Number("10"));
console.log(Number(false));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));
//The parseInt() Method
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));
//How to Recognize an Array------
/*A common question is: How do I know if a variable is an array?
The problem is that the JavaScript operator typeof returns "object":*/
const fruits = ["Banana", "Orange", "Apple"];
const answer = Array.isArray(fruits);
console.log(answer);
/**The instanceof operator returns true if an object is created by a given constructor: */
const fruits2 = ["Banana", "Orange", "Apple"];
const answer2 = (fruits2 instanceof Array);
console.log(answer2);
// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 2, "Lemon", "Kiwi");
// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.splice(0, 1);
// (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

// SPLICE ------METHOD
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// SLICE ------METHOD
const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits7.slice(1);

//SORTIING------NUMBERS
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

//------FLATMAP()
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);
//output: 1,10,2,20,3,30,4,40,5,50,6,60

//JavaScript Math Object
console.log(Math.PI);

//Print Randomly (1 to 6) for LUDU
function getRandBetweenMinAndMax(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(getRandBetweenMinAndMax(1,6))