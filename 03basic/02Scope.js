// The scope will start from three keyword let, const, and var
// Scope determines where in your code a variable is visible or accessible.
// A "Block" in JavaScript is anything inside curly braces { } (like if-statements or loops).


// 1. GLOBAL SCOPE
// Definition: Variables declared outside of any block {} or function.
// Visibility: Accessible from ANYWHERE in your entire JavaScript file (even inside blocks or functions).
// Variables declared outside of any block or function can be accessed anywhere.

let a = 10 // Scope Block, it Can be Reassigned, can't Redeclared
const b = 20 // Scope Block, it Cannot be Reassigned, can't Redeclared, it can reassinged but inside in object or function
var c = 30 // Scope	Global or Function, it Can be Reassigned, it will redeclared

console.log("Global Scope", a, b, c);

// Block scope 
// Scope start form means {} barackte
// Definition: Variables declared inside curly braces {} using 'let' or 'const'.
// Visibility: Accessible ONLY inside those specific curly braces.
if (true) {
    let blockLet = 100;
    const blockConst = 200;
    var blockVar = 300;
}

// console.log("Inside Block:", blockLet);   // not defined
// console.log("Inside Block:", blockConst); // not defined
console.log("Inside Block:", blockVar);   // 300 Because var ignores block scope completely

// Scope level or nested Scope
//  
