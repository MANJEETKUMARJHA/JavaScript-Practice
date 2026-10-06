/* Function in JavaScript */
// Function is use for performing a specific task. It is a block of code that can be called and executed when needed. Functions can take parameters and return values.

// when we take any input inside a function, thats called parameter.
// And when we pass any value to the function, thats called argument.

// Function Declaration
function SaymyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}

// Executing of function
SaymyName();



// -------- Adding two number using function    ----------
// ====================================================

function AddTwoNum (num1, num2){
    console.log(num1 + num2);
}
// CALLING THE FUNCTION: This is where we provide the actual data (arguments).
// If we declared the values inside the function first, it could only ever perform that one specific value that we declared.
AddTwoNum(2, 3); // we declared the values inside the function
AddTwoNum(2, "3"); // output: 23 because we adding number and string together.

// We can store function inside a variable.
const result = AddTwoNum(2, 3); 
console.log("Result: ",result); // undefined
// the reason of undefined is we are not returning any value from function. So, we need to return the value from function to get the result.


// -------- Function with return value ----------
// ==============================================

function AddTwoNumWithReturn (num1, num2){

    let result1 = num1 + num2;
    return result1; // return the value to the caller
    // if we write a return statement, the function will stop executing. No more code will be executed after the return. 
}

const result1 = AddTwoNumWithReturn(6, 5); 
console.log("Result: ",result1); // 11
// in this case, we are returning the value from the function, so we can get the result and store it in a variable.
// first result1 we declered inside the function and second result1 we declared outside the function. 
// so, we can use the same name for variable inside and outside the function. Because they are in different scope.
// or first one is local variable and second is global variable.

function AddTwoNumWithReturn1 (num1, num2){
    // we can also return the value directly without storing it in a variable.
    return num1 + num2;; // return the value to the caller
}

const result2 = AddTwoNumWithReturn1(4, 5); 
console.log("Result: ",result2); // 9   



// -------- Function with default parameter value ----------
// ========================================================

function loginUser (username) {
    if (username === undefined) {
        console.log("Please Enter a username");
        // sometime we use (!username) = (username === undefined)
        // if we pass the return then, if condition false then if will print undefined else the conditon is true then it will print value
        return
    }
    return `${username} just logged in`
}

// 
console.log(loginUser("Maneet")); // Maneet just logged in
console.log(loginUser()); 


// for avoiding undifined we can set some deffult value we can set some ualue in parameter
function loginUser1 (username = "abc") {
    // in this condition we don't need the if else condition
    if (username === undefined) {
        console.log("Please Enter a username");
        // sometime we use (!username) = (username === undefined)
        // if we pass the return then, if condition false then if will print undefined else the conditon is true then it will print value
        return
    }
    return `${username} just logged in`
}

// 
console.log(loginUser1("Maneet")); // Maneet just logged in
console.log(loginUser1()); 


// Function with infinite argument
// hare we can use rest operator (...) this is the rest opreator not spreed operator
// we use the rest operator for mutiple values and it print in array
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(20, 40, 50));

// Object in function
// hare we must check type of No Type Checking If we pass a string, null, or an empty object, the original function will either print "undefined" or throw a fatal error.
// Defining an object in a variable 
const user = {
    username: "manjeet",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);

// Method B: Passing an "inline" or "anonymous" object directly
// in this type of syntex we dont create any type of object we directly pass them 
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username: "jha",
    price: 166
})

// Array in function
// This function accepts an argument 'anyArray'. It assumes that whatever is passed will be a valid array and have at least two elements at index 0 and index 1.
const newArray = [20, 40, 10, 600]

function returnSecondValue(getArray) {
    return getArray [1]
}

//// Method A: Passing an array by variable reference
console.log(returnSecondValue(newArray));

// methord b Passing an "inline" or "anonymous" array directly
console.log(returnSecondValue([20, 10, 30, 60]));

