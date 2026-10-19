// Truthy and Falsey Value
// In JavaScript, you don't need a strict boolean (true/false) for an if-statement.
// The engine automatically converts the value to a boolean.

const userEmail= "h@gmial.com"

if (userEmail) {
    console.log("Got user Email");
    
} else {
    console.log("Dont't have email");
    
}


// === Falsey Value ====
// =====================
// flase, 0, -0, 0n(BigInt), ""(Empty value), null, undefined, NaN


// === Truthy Values ====
// ======================
// EVERYTHING ELSE IS TRUTHY! Surprising examples:
// "0" if zero under string its truthy value
// 'false' its truthy value
// " " its truthy value because under string we have space
// [], {}, function(){} its truthy value

// To check Array

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

// To check empty Object 
const emptyObj = {name: "Manjeet"}
// Object.keys(emptyObj) returns an array of the object's keys (e.g., ["name", "age"])
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
    
} else {
    console.log('Not empty');
    
}

// when we direct compare false == 0  it become true
// when we compare false == '' its become true also
// or 0 == '' its also become true
// BEST PRACTICE: Always use === (strict equality) to avoid this!

// ==== Logical Operator ===
// =========================

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && (AND) operator: BOTH conditions must be true to execute the block.
if (userLoggedIn && debitCard) {
    console.log("Allowed to purchase");
}

// || (OR) operator: At least ONE condition must satisfy (be true) to execute the block.
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}

// The ! (NOT) Operator
// The NOT operator reverses the boolean value. If a value is true, ! makes it false. If it is false, ! makes it true.
const isBanned = false;

// This reads as "If the user is NOT banned"
if (!isBanned) { 
    console.log("Welcome to the website!");
}



// Nullish Coalesing operator (??):- basicly it is safty check for null & undefined 
// it depend upon null and undefined 
// Basically it is a safety check specifically for `null` & `undefined`.
// It ignores other falsy values like 0 or "". It ONLY falls back if the first value is null/undefined.

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
// in actual we can val1 = null ?? cmplex function

// If there are multiple, it assigns the first value it finds that isn't null/undefined.
// in real-world code, the second value is often a complex function or database call.
val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 // output is 10 because when we got a value after null amd undefined it print 

console.log(val1);

// terniry operator 
// condition ? true : false

const tea = 100
tea <= 80 ? console.log("less than 80") : console.log("more than 80");



