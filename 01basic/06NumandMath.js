// number and math are the two built-in objects in javascript
// JavaScript uses a single data type for all numbers 
// NaN (Not a Number)
// Infinity / -Infinity : returns when you exceed max safe num limit
// safe integer : range between -(2^53 - 1) and 2^53 - 1
// parsing numbers : parseInt() and parseFloat()
// formatting numbers : toString(), toExponential(), toFixed(), toPrecision()
// in javascipt a (Number) is a primitive data type used to represent numeric values (both integers and decimals

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
console.log()


/**********         4.Number.MAX_SAFE_INTEGER       **********/
//It is the largest integer that JavaScript can represent exactly and safely with Number
console.log(Number.MAX_SAFE_INTEGER); //


/**********         5.Number.MIN_SAFE_INTEGER       **********/
// This is the opposite side of MAX_SAFE_INTEGER.
console.log(Number.MIN_SAFE_INTEGER);

/**********         6.Number.POSITIVE_INFINITY      **********/
// this represent the positive infinty
console.log(Number.POSITIVE_INFINITY); 
// 

/**********         7.Number.NEGATIVE_INFINITY      **********/
//this represent the negative infinity
console.log(Number.NEGATIVE_INFINITY); // 

/**********         8.Number.NaN            **********/
// the NaN is used for 
// Failed String Conversions: Trying to parse or convert a non-numeric string into a number.
parseInt("Apple");
console.log()
console.log(NaN);


// +++++++++++++++++  Math ++++++++++++++++++
// in javascript Math is a built-in object that provides mathematical constants and methods

console.log(Math)
console.log(Math.abs(-4)); //Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.round (4.6)); //Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.ceil(4.1)); //Returns the smallest integer greater than or equal to its numeric argument.
//Math.ceil eg. 4.2 or 4.1 in both case it return 5
console.log(Math.floor(4.9)) // Returns the greatest integer less than or equal to its numeric argument.
// Math.floor eg. 4.9 or 4.2 in both case it return 4
console.log(Math.sqrt(8)); //Returns the square root of a number. eg 9 is 3
console.log(Math.pow(2, 3)) // Returns the value of a base expression taken to a specified power
// hare Math.pow(x, y) x is base and y is power eg. x is 2 and y is 3. so, we can write (2^3 = 8):
console.log(Math.max(2,3,6,9,8)); //Returns the larger of a set of supplied numeric expressions.
console.log(Math.min(2, 4, 3 , 5, 7, 3, 9)); // Returns the smaller of a set of supplied numeric expressions.


console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.
// Math.random() returns a pseudo-random floating-point number 
// from 0 (inclusive) up to, but not including, 1 ([0, 1)).
//  It is essential for making dynamic, unpredictable web behavior.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
