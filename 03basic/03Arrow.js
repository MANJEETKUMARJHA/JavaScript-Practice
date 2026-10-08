// 'this' KEYWORD : it reffers current context

// Regular Functions: Create their own 'this' context based on HOW they are called.
const user = {
    username: "manjeet",
    price: 444,

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to website`); // we use this keyword for current context 
        // console.log(this); 
    }

}

user.welcomeMassage(); // manjeet, welcome to website
user.username = "sam" // we are updating the context now
user.welcomeMassage(); // sam, welcome to website, because now context about sam 

// ++++++++ Global Context +++++++
// ===============================

console.log(this); // Empty object {} because because we are in node enviroment  
// console.log(this); // when we run this in browser console it give you window


// +++++ Functions in Global Scope ++++++
// =====================================

// function chai () {
//     console.log(this);
// }
// chai() 
// CORRECTED: The output here is NOT undefined (unless you use "use strict"). 
// In normal Node.js mode, this outputs the huge global `Object [global]`. 
// In the browser, it would output the `window` object.


function chai () {
    let username = "manjeet"
    // this will not excute buecause it is Object [global]
    // `this` refers to the global object here. `username` is just a local variable,
    console.log(this.username);
}

chai() // output: undefined


// ++++++++ Arrow function & 'this' ++++++++
// =========================================

// Arrow functions DO NOT create their own `this` binding. Instead, they "inherit"
// we can't use this keyword in arrow function because it return empty object {} or, 
// it will return undefined also when we add to some specific parementer with keyword
// the `this` from their parent scope (the scope where the function was defined).
const one =  () => {
    let username = "manjeet"
    console.log(this); // empty object {}
    console.log(this.username); // undefined 
    
    // Because 'one' is defined in the global Node environment, its parent 'this' is {}.
    // It inherits that {}.
}

one()

// syntext of arrow function
const addTwo =  (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));


// Implicit Return (Returning without writing the 'return' keyword)
const add3 = (num1, num2) => num1 + num2

// When returning an object implicitly, you MUST wrap it in parentheses ()
// // Otherwise, the engine thinks the curly braces {} are the function's code block, not an object.
const add1 = (num1, num2) => ({username: "manjeet"}) 

// We can wrap implicit returns in parentheses () for readability.
// This is heavily used in React.js.
const add2 = (num1, num2) => (num1 + num2) // we can use raping for parenthis or bracket not curly and square only small bracket


console.log(add3(3, 6));
console.log(add2(3,5));



// Explicit Return (When we use curly braces {}, we MUST use the 'return' keyword)
const addTwo1 =  (num1, num2) => {
    return num1 + num2
}

console.log(addTwo1(8, 4));

/* 
 * BONUS CONCEPT: Arrow functions inside objects
 * Because arrow functions inherit 'this' from the outer scope, you should 
 * NOT use them as object methods if you need to access object properties.
 * 
 * const badUser = {
 *     username: "manjeet",
 *     greet: () => { console.log(this.username) } // `this` will be {} here, not badUser!
 * }
 * badUser.greet() // undefined
 */