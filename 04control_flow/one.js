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
// console.log(`User power: ${power}`);


// Short hand notation and impecit scope
const balance = 1000
if (balance > 500) console.log("Success");
// for multiple output or multiple line we seprate with comma and last must added semicolama and this is not good pratice
const balance1 = 1000
if (balance1 > 500) console.log("Success"), console.log("test");


// Nested Condition

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

// hare we use && operator the condition of ampersent is both condition should be true
if (userLoggedIn && debitCard) {
    console.log("Allowed");

}

// in this condion we use || (or), at least one condition will satisfy.
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in")
}


// last time is 24 min