/***************************Operator****************************/

// An operator is a symbol that performs an operation on values.

let a = 10;
let b = 5;

console.log(a + b); // This will log 15 because + is used to add two numbers

/** Arithmetic Operators */
console.log(a - b); // This will log 5 because - is used to subtract two numbers
console.log(a * b); // This will log 50 because * is used to multiply two numbers
console.log(a / b); // This will log 2 because / is used to divide two numbers
console.log(a % b); // This will log 0 because % is used to find the remainder of a division
console.log(a ** b); // This will log 100000 because ** is used to find the power of a number
console.log(a++); // This will log 10 because ++ is used to increment a number by 1 but it will return the value before incrementing
console.log(++a); // This will log 12 because ++ is used to increment a number by 1 and it will return the value after incrementing
console.log(a--); // This will log 12 because -- is used to decrement a number by 1 but it will return the value before decrementing
console.log(--a); // This will log 10 because -- is used to decrement a number by 1 and it will return the value after decrementing

// Example

let a = 10;

console.log(a + 5); // This will log 15 because + is used to add two numbers
console.log(a - 3); // This will log 7 because - is used to subtract two numbers
console.log(a * 3); // This will log 30 because * is used to multiply two numbers
console.log(a / 3); // This will log 3.3333333333333335 because / is used to divide two numbers
console.log(a % 3); // This will log 1 because % is used to find the remainder of a division
console.log(a ** 3); // This will log 1000 because ** is used to find the power of a number

/*********************Important ***********************/

// The % operator gives the remainder, not the percentage.
console.log(10 % 3); // This will log 1 because 10 divided by 3 is 3 with a remainder of 1
console.log(20 % 4); // This will log 0 because 20 divided by 4 is 5 with a remainder of 0  

// It's very useful for checking even/odd numbers:

console.log(10 % 2); // This will log 0 because 10 is an even number
console.log(11 % 2); // This will log 1 because 11 is an odd number

let num = 10;

console.log(num % 2 === 0 ); // This will log true because 10 is an even number and the remainder when divided by 2 is 0