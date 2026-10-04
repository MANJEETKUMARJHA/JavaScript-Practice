/* Function in JavaScript */
// Function is use for performing a specific task. It is a block of code that can be called and executed when needed. Functions can take parameters and return values.

// Function Declaration
function SaymyName(){
    console.log("M");
    console.log("N");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}

// Executing of function
SaymyName();

// Adding two number using function
function AddTwoNum (num1, num2){
    console.log(num1 + num2);
}
// CALLING THE FUNCTION: This is where we provide the actual data (arguments).
// If we declared the values inside the function first, it could only ever perform that one specific value that we declared.
AddTwoNum(2, 3); // we declared the values inside the function
AddTwoNum(2, "3"); // output: 23 because we adding number and string together.

// when we take any input inside a function, thats called parameter.
// And when we pass any value to the function, thats called argument.