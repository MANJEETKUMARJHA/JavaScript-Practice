/* +++++++ OBJECT ++++++ */
// Object :- In basic terms, an object is a way to group related data and actions together
// Think of a real-life object, like a "Car".
// A car has characteristics (color: red, brand: Tata) and actions (startEngine, brake).
// Instead of making 10 separate variables, JavaScript lets us put them in one single container (the Object).

//  WHAT IS A SINGLETON?
// "Singleton" simply means there is ONLY ONE unique instance of this object in your entire application.
// It is a single source of truth. If any part of your code changes this object, it changes everywhere, because there is only one.


// 2. OBJECT LITERALS (The Everyday Way)
// "Literal" just means we literally write out the object right on the spot using curly braces {}.
// - It is the fastest, easiest, and cleanest way to create an object.
// - INTERVIEW NOTE: Creating an object this way DOES NOT create a Singleton. Multiple copies can exist.
// when we declear in literals they dont create singleton

// Object.create //this is constructor method
// in object we can declear both key and value 

const mySym = Symbol("key1")


const JsUser = {
    name: "Manjeet",
    "Full name": "Manjeet jha", // Keys with spaces MUST be wrapped in quotes
    [mySym]: "mykey1", // we must use square bracket because we refer to symbol key
    age: 22,
    location: "kolkata",
    email: "manjeet@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}
// every key must assinged a value

// --- Accesing value ---
console.log(JsUser.lastLoginDays); // this type of syntex is  called .dot notation
console.log(JsUser.location); // Dot notation: Most common, but doesn't work for keys with spaces.
console.log(JsUser.email); // this type of of syntex is not used in string key
console.log(JsUser["email"]); // this type of syntex is used boths case string key or normal key
console.log(JsUser["Full name"]); // this type of syntex is used in string data type and it called bracket notaion
console.log(JsUser[mySym]); // Bracket notation is strictly REQUIRED to access a Symbol.

// --- modifying values ---
// to change the value for changing the value we use assignment operator
JsUser.email = "manjeet45@gmail.com"

// --- freeze object ---
// Object.freeze() it Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
//INTERVIEW NOTE: freeze() is "shallow". If you have an object inside your object (a sub-object or array),
// but sub object still modification 
//Object.freeze(JsUser); 
JsUser.email = "manjeet45@gmail.com"
console.log(JsUser);

// --- Adding function (Methods) ---
//
JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    // We use 'this' to refer to the current object itself to access its internal properties.
    // we use backticks for sting interpolation
    console.log(`Hello JS user, ${this["Full name"]} `);
}

// --- Executing Functions ---
console.log(JsUser.greeting); // undefined

console.log(JsUser.greeting()); // Hello JS user
// (Because the function executes the inner console.log, but the function itself doesn't 'return' a value to the outer console.log).

console.log(JsUser.greetingTwo());
// Output: "Hello JS user, Manjeet Jha" (Calling it directly without console.log prevents the 'undefined' output).






// 3. OBJECT CONSTRUCTOR (Blue print way)
// "Constructor" means we are telling JavaScript to construct the object for us using the 'new' keyword.
// - We use them when we specifically want to create a "Singleton".
// - We also use constructors when we want to make a blueprint (a class/function) to build many similar objects dynamically.
