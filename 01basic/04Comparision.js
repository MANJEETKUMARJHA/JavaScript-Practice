/******************************Basic Comparision operator ******************/
console.log(2 > 1); // This will log true because 2 is greater than 1
console.log(2 < 1); // This will log false because 2 is not less than 1
console.log(2 >= 1); // This will log true because 2 is greater than or equal to 1
console.log(2 <= 1); // This will log false because 2 is not less than or equal to 1
console.log(2 == 1); // This will log false because 2 is not equal to 1
console.log(2 == "2"); // this will true because Equal to, with type conversion when needed
// Equal to, with type conversion when needed

console.log(2 != 1); // This will log true because 2 is not equal to 1
// Not equal to, with type conversion when needed

console.log(2 === 1); // This will log false because 2 is not equal to 1
// Strict equality: same value and type


console.log(2 !== "2"); // This will log true because 2 is equal to 2
// Strict inequality: different value or type, Returns the opposite result of strict equality (===).

console.log("2" > 1); // This will log true because "2" is converted to 2 and 2 is greater than 1
console.log("02" > 1); // This will log true because "02" is converted to 2 and 2 is greater than 1
console.log("2" < 1); // This will log false because "2" is converted to 2 and 2 is not less than 1

console.log(null == 0); // This will log false because null is not equal to 0
console.log(null > 0); // This will log false because null is not greater than 0
console.log(null < 0); // This will log false because null is not less than 0
console.log(null >= 0); // This will log true because null is converted to 0 and 0 is equal to 0 and comprison convert null to a number, treating it as 0. that's why null >= 0 is true and null > 0 is false.

// `null == undefined`: true

// What is the output of `"12" > "3"`?
// true
// Both operands are strings, so JavaScript compares their characters lexicographically. The first character '1' comes before '3'.