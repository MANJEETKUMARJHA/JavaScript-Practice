// The scope will start from three keyword let, const, and var
// Scope determines where in your code a variable is visible or accessible.
// A "Block" in JavaScript is anything inside curly braces { } (like if-statements or loops).


// 1. GLOBAL SCOPE
// Variables declared outside of any block or function can be accessed anywhere.
let a = 10
const b = 20
var c = 30

console.log("Global Scope", a, b, c);

// Block scope 
// Scope start form means {} barackte
if (true) {
    let blockLet = 100;
    const blockConst = 200;
    var blockVar = 300;
}

// console.log("Inside Block:", blockLet);   // not defined
// console.log("Inside Block:", blockConst); // not defined
console.log("Inside Block:", blockVar);   // 300 Because var ignores block scope completely