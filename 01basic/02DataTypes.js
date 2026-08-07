"use strict"; // treat all JS code as new version

// alert(3 + 3); // we are using node.js

console.log(3 
    + 
    3) // code is not readable or code is not understandable

console.log("Manjeet"); // code is readable and understandable

let name = "manjeet"; // a string data type
let age = 22; // a number data type
let isLoggedIn = false; // a boolean data type
let state; // undefined data type, variable is declared but not initialized

/*
these are premitive data types in javascript
// number => 2 to power 53
// bigint 
// String => " "  
// boolean => true/false
// null => standalone value its means variable is declared and initialized with null value 
// undefined => variable is declared but not initialized
// symbol => to find unique
*/

// object => key-value pair

console.log(typeof "manjeet"); // string
console.log(typeof age); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // undefined

// Used for very large integers.
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // bigint

/******************************non-primitive data types in javascript*****************/

// Array 
let myArray = [1, 2, 3, 4, 5];
console.log(typeof myArray); // object

// object
let myObject = {
    name: "manjeet",
    age: 22,
    isLoggedIn: false
}
console.log(typeof myObject); // object

// function
function myFunction() {
    console.log("Hello World");
}

// typeof Operator
console.log(typeof 100); // number
console.log(typeof "Hello"); // string
console.log(typeof true);   // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // function
