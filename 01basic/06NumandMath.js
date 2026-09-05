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
// .toFixed(x) method is used for formatting no. for specific decimal places. and x have some value between 0 to 20.

const otherNumber = 23.456789;

console.log(otherNumber.toPrecision(4)) 
// .toPrecision(x) method is used for formatting no. for specific length. and x have some value between 1 to 21. 
// It is a Number method used to format a number to a specified number of significant digits.

const number1 = 1233.8966;
console.log(number1.toPrecision(3)); // hare the result will be 124. because it will round the number to 3 significant digits.
// precision is also round up the number 


const hundred = 1000000;
console.log(hundred.toLocaleString()); // 1,000,000 this is the default formatting for en-US locale
console.log(hundred.toLocaleString('en-IN')); // 10,00,000 for Indian locale formatting we use en-IN locale.

// MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, POSITIVE_INFINITY, NEGATIVE_INFINITY, NaN are the static properties of Number object.
/*****          2.Number.MAX_VALUE          *****/ 
// Number.MAX_VALUE And largest finite Number That JavaScript can represent using number type .
// MAX_VALUE is not largest safe integer

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 2); //Infinity 

/**********         3.Number.MIN_VALUE       *********/
// Number.MIN_VALUE is NOT the most negative number.
// Number.MIN_VALUE > 0
console.log(Number.MIN_VALUE);


/**********         4.Number.MAX_SAFE_INTEGER       **********/
//It is the largest integer that JavaScript can represent exactly and safely with Number


/**********         5.Number.MIN_SAFE_INTEGER       **********/
/**********         6.Number.POSITIVE_INFINITY      **********/
/**********         7.Number.NEGATIVE_INFINITY      **********/
/**********         8.Number.NaN            **********/

// +++++++++++++++++  Math ++++++++++++++++++

// in javascript maths 
