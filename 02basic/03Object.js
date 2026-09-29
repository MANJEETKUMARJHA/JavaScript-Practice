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

const JsUser = {
    name: "Manjeet",
    age: 22,
    location: "manjeet@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.lastLoginDays);






// 3. OBJECT CONSTRUCTOR (Blue print way)
// "Constructor" means we are telling JavaScript to construct the object for us using the 'new' keyword.
// - We use them when we specifically want to create a "Singleton".
// - We also use constructors when we want to make a blueprint (a class/function) to build many similar objects dynamically.
