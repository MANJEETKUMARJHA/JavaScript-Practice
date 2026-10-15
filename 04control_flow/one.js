// ==========================
// Control flow or logic Flow
// ==========================

// --- CONTROL FLOW: Altering execution based on the logic ---
// Control flow is the order in which the computer executes code.
// By default, code runs top-to-bottom. We use control flow to make decisions (skip code, repeat code, or branch off).

// 1.if statement 
// condition must be true to execute the scope if condition will flase then scope will not execute

const isUserLoggedIn = true
const Temp = 41

if (Temp < 50) {
    console.log("temp less then 50");
}
console.log("Temp greater then 50"); // this will execute because it out of local scope

// Basic operator revision: <, >, =>, =<, ==, != not equal, === stricked equal typeChecked, !== Strict inequality: different value or type
// originally wrote `=>` and `=<`. In JavaScript, `>=` (greater than or equal) and `<=` (less than or equal) are the correct operators. The `=>` symbol is reserved for arrow functions!

// If.. else Statement
const Temp1 = 41

if (Temp1 === 40) {
    console.log("temp less then 50"); 
} else {
    console.log("Temp greater then 50"); // this will execute when the if condition not sectify.
}

const score = 200
if (score > 100) {
    const power = "Fly"
    console.log(`User power: ${power}`);
} else {
    
}
// If you uncomment the line below, you will get a ReferenceError. 
// Why? Because variables declared with `let` and `const` are "block-scoped". 
// They only exist inside the curly braces {} where they were created. They cannot be accessed outside.
// console.log(`User power: ${power}`);


// Short hand notation and Implicit scope
const balance = 1000
// Good for single line execution
if (balance > 500) console.log("Success");

// For multiple outputs on one line, you can separate with commas, BUT as you correctly noted, this is bad practice!
const balance1 = 1000
if (balance1 > 500) console.log("Success"), console.log("test");


// Nested Condition (if...else if...else)

if (balance < 500) {
    console.log("less then");

} else if (balance < 750) {
    console.log("less then 750");

} else if( balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
}

// real world example

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// &&(And) operator the condition of ampersent is both condition should be true
if (userLoggedIn && debitCard) {
    console.log("Allowed");

}

// || (or), at least one condition will satisfy. At least ONE condition must satisfy (be true) to execute the block.
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in")
}

// The ! (NOT) Operator
// The NOT operator reverses the boolean value. If a value is true, ! makes it false. If it is false, ! makes it true.
const isBanned = false;

// This reads as "If the user is NOT banned"
if (!isBanned) { 
    console.log("Welcome to the website!");
}