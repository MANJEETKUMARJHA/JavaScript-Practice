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
