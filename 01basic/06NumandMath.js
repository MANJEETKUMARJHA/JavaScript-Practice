// number and math are the two built-in objects in javascript
// JavaScript uses a single data type for all numbers 
// NaN (Not a Number)
// Infinity / -Infinity : returns when you exceed max safe num limit
// safe integer : range between -(2^53 - 1) and 2^53 - 1
// parsing numbers : parseInt() and parseFloat()
// formatting numbers : toString(), toExponential(), toFixed(), toPrecision()


const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(typeof balance.toString()); // string
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2));