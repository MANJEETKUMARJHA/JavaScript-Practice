/*********** primitive data types ***********/
// primitive data types are immutable, means we cannot change the value of primitive data types
// primitive data types are passed by value, means when we assign a primitive data type to another variable, it creates a copy of the value and assigns it to the new variable. So, if we change the value of the new variable, it will not affect the original variable.
// primitive data types are stored in stack memory, means they are stored in a fixed size memory location and they are accessed directly by their value.
// primitive data types are compared by value, means when we compare two primitive data types, it compares their values and not their references.
// primitive data types are call by value, means when we pass a primitive data type to a function, it creates a copy of the value and passes it to the function. So, if we change the value of the parameter inside the function, it will not affect the original variable.

// types of primitive data types in javascript are:
// 1. number :- it is interger or decimal value, it can be positive or negative, it can be whole number or fraction, it can be in scientific notation, it can be in hexadecimal, it can be in octal, it can be in binary.
// 2. string  :- it is a sequence of characters, it can be enclosed in single quotes, double quotes or backticks, it can contain any character including special characters, it can be empty string, it can be multi-line string, it can be template literal.
// 3. boolean :- it is a logical data type that can have only two values: true or false.
// 4. null :- it represents the intentional absence of any object value.
// 5. undefined :- it represents a variable that has been declared but not assigned a value.
// 6. symbol :- it is a unique and immutable data type, often used as an identifier for object properties.
// 7. bigint :- it is a data type that can represent integers larger than the maximum safe integer value for the number data type.


const score = 100; // we don't have to specify the data type of score variable, javascript will automatically assign the data type based on the value assigned to it. In this case, score is a number data type.
const scoreValue = 100.3; // we don't have to specify the data type of scoreValue variable, javascript will automatically assign the data type based on the value assigned to it. In this case, scoreValue is a number data type.

const isLoggedIn = false; // we don't have to specify the data type of isLoggedIn variable, javascript will automatically assign the data type based on the value assigned to it. In this case, isLoggedIn is a boolean data type.
const outsideTemp = null; // we don't have to specify the data type of outsideTemp variable, javascript will automatically assign the data type based on the value assigned to it. In this case, outsideTemp is a null data type.
let userEmail; // we don't have to specify the data type of userEmail variable, javascript will automatically assign the data type based on the value assigned to it. In this case, userEmail is an undefined data type.

const id = Symbol("123"); // we don't have to specify the data type of id variable, javascript will automatically assign the data type based on the value assigned to it. In this case, id is a symbol data type.
const anotherId = Symbol("123"); // the value of anotherId is different from id because symbol is a unique and immutable data type, even if they have the same description.

console.log(id === anotherId); // This will log false because id and anotherId are two different symbols, even though they have the same description.

const bigNumber = 123456789012345678901234567890n; // we bigint use for very large integers. n 

/**** is javascript is dynamically typed language or statically typed language? ****/ 
// javascript is a dynamically typed language, means we don't have to specify the data type of a variable when we declare it. The data type of
// Example:
//const score = 100; // we don't have to specify the data type of score variable, javascript will automatically assign the data type based on the value assigned to it. In this case, score is a number data type.
//const name = "manjeet"; // we don't have to specify the data type of name variable, javascript will automatically assign the data type based on the value assigned to it. In this case, name is a string data type. 




/*********** non-primitive data types (also known as references) ***********/

// types of non-primitive data types in javascript are:

// 1. object :- it is a collection of key-value pairs, it can contain any data type including other objects, it can be created using object literal or constructor function or class, it can be accessed using dot notation or bracket notation.
// 2. array :- it is a special type of object that can hold multiple values in a single variable, it can contain any data type including other arrays, it can be created using array literal or constructor function, it can be accessed using index number starting from 0.
// 3. function :- it is a block of code that can be executed when called, it can take parameters and return a value, it can be created using function declaration or function expression or arrow function, it can be called using its name followed by parentheses.

// these three are the most commonly used non-primitive data types in javascript. There are more advanced non-primitive data types in javascript which we will discuss later in this course.

/***********************these are the more advanced non-primitive data types    ***********************/


// 4. date :- it is a built-in object that represents a single moment in time, it can be created using the Date constructor, it can be formatted and manipulated using various methods provided by the Date object.
// 5. REgular expression(Regexp) :- it is a pattern that can be used to match character combinations in strings, it can be created using regular expression literal or constructor function, it can be used with various string methods to search, replace and validate strings.
// 6. map :- it is a collection of key-value pairs where keys can be of any data type, it can be created using the Map constructor, it can be accessed and manipulated using various methods provided by the Map object.
// 7. set :- it is a collection of unique values of any data type, it can be created using the Set constructor, it can be accessed and manipulated using various methods provided by the Set object.
// 8. weakmap :- it is a collection of key-value pairs where keys are objects and values can be of any data type, it can be created using the WeakMap constructor, it can be accessed and manipulated using various methods provided by the WeakMap object.
// 9. weakset :- it is a collection of unique objects, it can be created using the WeakSet constructor, it can be accessed and manipulated using various methods provided by the WeakSet object.
// 10. promise :- it is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value, it can be created using the Promise constructor, it can be accessed and manipulated using various methods provided by the Promise object.
// 11. error :- it is an object that represents an error that occurs during the execution of a program, it can be created using the Error constructor, it can be accessed and manipulated using various methods provided by the Error object.
// 12. generator :- it is a special type of function that can be paused and resumed, it can be created using the function* syntax, it can be accessed and manipulated using various methods provided by the generator object.
// 13. TypedArray :- it is an array-like object that provides a mechanism for reading and writing raw binary data in memory buffers, it can be created using various typed array constructors like Int8Array, Uint8Array, Float32Array etc., it can be accessed and manipulated using various methods provided by the typed array object.


/*********** Array ***********/

// basic array operations in javascript are:

// 1. creating an array :- we can create an array using array literal or constructor function.

const fruits = ["apple", "banana", "orange"]; // array literal
const numbers = new Array(1, 2, 3, 4, 5); // constructor function

// 2. accessing array elements :- we can access array elements using index number starting from 0.

console.log(fruits[0]); // This will log "apple" because it is the first element of the fruits array.
console.log(numbers[2]); // This will log 3 because it is the third element of the numbers array.

// basic object operations in javascript are:

// 1. creating an object :- we can create an object using object literal or constructor function or class.

const myObj = {
    name: "manjeet",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
}; // object literal 

const anotherObj = new Object();
anotherObj.name = "john";
anotherObj.age = 30;
anotherObj.isStudent = false;
anotherObj.hobbies = ["traveling", "swimming", "cycling"]; // this is a constructor function 

// 2. accessing object properties :- we can access object properties using dot notation or bracket notation.

console.log(myObj.name); // This will log "manjeet" because it is the value of the name property of myObj object.
console.log(anotherObj["age"]); // This will log 30 because it is the value of the age property of anotherObj object.
console.log(myObj.hobbies[1]); // This will log "coding" because it is the second element of the hobbies array of myObj object. 
console.log(anotherObj.name); // This will log "john" because it is the value of the name property of anotherObj object.

// 3. Function :- we can create a function using function declaration or function expression or arrow function.

const myFunction = function() {
    console.log("Hello World!"); // This will log "Hello World!" when the function is called.
}

myFunction(); // This will call the myFunction and log "Hello World!" to the console.

// all non-primitive data types are the function type in javascript. So, we can say that all non-primitive data types are objects in javascript. But, not all objects are non-primitive data types. For example, a function is an object in javascript but it is not a non-primitive data type.
// the return of function is called object function or the datatype of function are object function.



/************************** Memory  ********************/
// Two types of memory in javascript are:
// 1. Stack memory :- it is a fixed size memory location where primitive data types are stored. It is faster than heap memory because it is accessed directly by their value. It is used for storing primitive data types and function calls.
// 2. Heap memory :- it is a dynamic size memory location where non-primitive data types are stored. It is slower than stack memory because it is accessed by reference. It is used for storing non-primitive data types like objects, arrays, functions etc.  

// stack memory used in primitive type 
// heap memory used in non-primitive type

//Example of stack memory
let myName = "Manjeet"

let anotherName = myName // This will create a new variable anotherName and assign it the value of myName variable.
anotherName = "Jha"

console.log(anotherName); // stack memory will store the value of anotherName variable as "Jha" because it is a primitive data type and it is passed by value. So, when we change the value of anotherName variable, it will not affect the value of myName variable.
console.log(myName); // stack memory will store the value of myName variable as "Manjeet" because it is a primitive data type and it is passed by value.

// Example of heap

    let userOne = {
        email : "user@gmail.com",
        upi : "user@ybl"
    };


    let userTwo = userOne // This will create a new variable userTwo and assign it the reference of userOne variable. So, both userOne and userTwo variables will point to the same object in heap memory.

    userTwo.email = "xyz@gmail.com"

    console.log(userOne, userOne.email); // the value of userOne.email will be repleaced with two because both userOne and userTwo variables are pointing to the same object in heap memory. So, when we change the value of userTwo.email property, it will also change the value of userOne.email property.
    console.log(userTwo, userTwo.email); // the value of userTwo.email will be "xyz@gmail.com"

    