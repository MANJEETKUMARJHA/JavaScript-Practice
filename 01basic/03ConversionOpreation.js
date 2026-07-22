let score = "33abc" // if we want to convert string to number then it will be NaN because "33abc" is not a valid number
// let score = null // if we want to convert null to number then it will be 0 because null is a falsy value and it will be converted to 0
// let score = undefined // if we want to convert undefined to number then it will be NaN because undefined is a falsy value and it will be converted to NaN
// let score = true // if we want to convert true to number then it will be 1 because true is a truthy value and it will be converted to 1
// let score = false // if we want to convert false to number then it will be 0 because false is a falsy value and it will be converted to 0
//let score = "Manjeet" // if we want to convert string to number then it will be NaN because "Manjeet" is not a valid number


//console.log(typeof score);  // typeof is used to check the data type of a variable
console.log(typeof (score)); // typeof is used to check the data type of a variable

let valueInNumber = Number(score); // Number() is used to convert a value to a number data type it is used anydata type to number data type
console.log(typeof valueInNumber); // typeof is used to check the data type of a variable
console.log(valueInNumber); // This will log NaN because "33abc" is not a valid number

// "33" => 33 because "33" is a valid number
// "33abc" => NaN because "33abc" is not a valid number
// true => 1 because true is a truthy value and it will be converted to 1
// false => 0 because false is a falsy value and it will be converted to 0
// null => 0 because null is a falsy value and it will be converted to 0
// undefined => NaN because undefined is a falsy value and it will be converted to NaN



                                                    /*--------*/
                    



//let isLoggedIn = 0; // if we want to convert number to boolean then it will be false because 0 is a falsy value and it will be converted to false
//let isLoggedIn = "" // if we want to convert empty string to boolean then it will be false because empty string is a falsy value and it will be converted to false
//let isLoggedIn = "manjeet" // if we want to convert string to boolean then it will be true because "manjeet" is a truthy value and it will be converted to 
let isLoggedIn = 1; // if we want to convert number to boolean then it will be true because 1 is a truthy value and it will be converted to 


let booleanIsLoggedIn = Boolean(isLoggedIn); // Boolean() is used to convert a value to a boolean data type it is used anydata type to boolean data type
console.log(booleanIsLoggedIn); // This will log true because 1 is a truthy value and it will be converted to true

// 1 => true because 1 is a truthy value and it will be converted to true
// 0 => false because 0 is a falsy value and it will be converted to false
// "" => false because empty string is a falsy value and it will be converted to false
// "manjeet" => true because "manjeet" is a truthy value and it will be converted to true



                                /*--------*/



let someNumber = 33; // if we want to convert number to string then it will be "33" because 33 is a valid number and it will be converted to "33"
//let someNumber = true; // if we want to convert boolean to string then it will be "true" because true is a valid boolean and it will be converted to "true"
//let someNumber = false; // if we want to convert boolean to string then it will be "false" because false is a valid boolean and it will be converted to "false"
//let someNumber = null; // if we want to convert null to string then it will be "null" because null is a valid value and it will be converted to "null"
//let someNumber = undefined; // if we want to convert undefined to string then it will be "undefined" because undefined is a valid value and it will be converted to "undefined"

let StringNumber = String(someNumber); // String() is used to convert a value to a string data type it is used anydata type to string data type
console.log(typeof StringNumber); // typeof is used to check the data type of a variable
console.log(StringNumber); // This will log "33" because 33 is a valid number and it will be converted to "33"

// 33 => "33" because 33 is a valid number and it will be converted to "33"
// true => "true" because true is a valid boolean and it will be converted to "true"
// false => "false" because false is a valid boolean and it will be converted to "false"
// null => "null" because null is a valid value and it will be converted to "null"
// undefined => "undefined" because undefined is a valid value and it will be converted to "undefined"

/********************************** Operation ************************************/

let value = 3
let negValue = -value // - is used to convert a positive number to negative number
console.log(negValue); // This will log -3 because - is used to convert a positive number to negative number

console.log(2 + 2); // This will log 4 because + is used to add two numbers
console.log(2 - 2); // This will log 0 because - is used to subtract two numbers
console.log(2 * 2); // This will log 4 because * is used to multiply two numbers
console.log(2 / 2); // This will log 1 because / is used to divide two numbers
console.log(2 % 2); // This will log 0 because % is used to get the remainder of two numbers
console.log(2 ** 2); // This will log 4 because ** is used to get the power of two numbers

let str1 = "Hello"
let str2 = "World"

let str3 = str1 + " " + str2 // + is used to concatenate two strings
console.log(str3); // This will log "Hello World" because + is used to concatenate two strings

console.log("2" + 2); // This will log "22" because + is used to concatenate two strings
console.log(2 + "2"); // This will log "22" because + is used to concatenate two strings
console.log("1" + 1 + 1); // This will log "111" because operation would be evaluated from left to right and first "1" + 1 will be evaluated first and then it will be concatenated with 1
console.log(1 + "1" + 1); // This will log "111" because operation would be evaluated from left to right and first 1 + "1" will be evaluated first and then it will be concatenated with 1
console.log(1 + 1 + "1"); // This will log "21" because first 1 + 1 will be evaluated first and then it will be concatenated with "1"
console.log(1 + 1 + "1"); // This will log "21" because first 1 + 1 will be evaluated first and then it will be concatenated with "1"
console.log("1" + 1 - 1); // This will log "10" because first "1" + 1 will be evaluated first and then it will be concatenated with - 1

console.log(true) // This will log true because true is a boolean value
console.log( + true) // this will log 1 because true is converted to 1 and + is used
console.log(+ " ") // This will log 0 because + is used to convert a string to a number and " " is converted to 0   

/******************************precedence operator ******************/
let gameCounter = 100
++gameCounter // prefix operator is used to increment a number by 1 but it will be incremented before the current operation is completed
gameCounter++ // postfix operator is used to increment a number by 1 but it will be incremented after the current operation is completed
console.log(gameCounter); // This will log 101 because ++ is used to increment a number by 1

/****************************** operator ******************/
let gameCounter2 = 100
--gameCounter2 // -- is used to decrement a number by 1 but it will be decremented before the current operation is completed
gameCounter2-- // -- is used to decrement a number by 1 but it will be decremented after the current operation is completed
console.log(gameCounter2); // This will log 99 because -- is used to decrement a number by 1    
