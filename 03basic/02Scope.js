// The scope will start from three keyword: let, const, and var
// Scope determines where in your code a variable is visible or accessible.
// A "Block" in JavaScript is anything inside curly braces { } (like if-statements or loops).


// 1. GLOBAL SCOPE
// Definition: Variables declared outside of any block {} or function.
// Visibility: Accessible from ANYWHERE in your entire JavaScript file (even inside blocks or functions).
// Variables declared outside of any block or function can be accessed anywhere.

let a = 10 // Scope Block, it Can be Reassigned, can't Redeclared
const b = 20 // Scope Block, it Cannot be Reassigned, can't Redeclared, it can reassinged but inside in object or function
            // (NOTE: If const holds an object or array, you CAN modify its contents, but you cannot reassign the variable to a totally new object).
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



// Nested Scope (Lexical scope)
// in nested function inner function acces outer variable
// in nested function child can access parent variable
// Lexical Scope means a child can access its parent's variables, but a parent CANNOT access its child's variables.

// nested function
function one () {
    const username = "manjeet";

    function two () {
        const website = "Youtube"
        console.log(username); // ✅ Works! Child accessing parent's variable.
        
    }
    // console.log(website); // ❌ ERROR: not execute because it access block scope but in outer of the function or parent cannot access child
    two()
}

one()

// nested if else
if (true) {
    const username = "jha"
    if (username === "jha") {
        const website = " youtube"
        console.log(username + website); // ✅ Works!
    }
    // console.log(website); // it will not execute because we can't acess outerside of block
}

// console.log(username); // we can't access the local variable from the global level



// +++++++ Some more Concept or Staring of Hoisting ++++++++
// =================================

// Standard function declaration
console.log(addone(3)); // hare we can access 'addowo' before initialization

function addone (num) {
    return num + 1;
}

// Function expression (Storing a function in a variable)
// console.log(addTwo(5)); // ❌ ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}

addTwo(5) 

// CONCEPT: "Temporal Dead Zone (TDZ)"
// Variables declared with 'let' and 'const' are hoisted, but they are placed in a "Temporal Dead Zone" 
// where they cannot be accessed until the code execution actually reaches their exact line.
