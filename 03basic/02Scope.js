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
// in nested function inner function acces outer variable
// in nested function child can access parent variable

// nested function
function one () {
    const username = "manjeet";

    function two () {
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website); // not execute because it access block scope but in outer of the function
    two()
}

one()

// nested if else
if (true) {
    const username = "jha"
    if (username === "jha") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // it will not execute because we can't acess outerside of block
}

// console.log(username); // we can't access the local variable from the global level


// +++++++ Some more Concept ++++++++
// =================================
// function
function addone (num) {
    return num + 1;
}

console.log(addone(3));

// this is the expression 
const addTwo = function(num) {
    return num + 2
}

addTwo(5)