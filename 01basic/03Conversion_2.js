/**************************** Type Coercion ***********************/
// Type Coercion is the automatic conversion of one data type into another by JavaScript while performing an operation.

/* There are two types:

Implicit Type Coercion (Automatic)
Explicit Type Conversion (Manual) 
*/

/*1. Implicit Type Coercion

JavaScript automatically converts one data type into another.*/

console.log("10" + 5); // This will log "105" because + is used to concatenate two strings and 5 is converted to "5" and then it will be concatenated with "10"

/*Explicit Type Conversion

This is done manually.*/

console.log(Number("100")); // This will log 100 because Number() is used to convert a string to a number and "100" is converted to 100
console.log(Number("abc")); // This will log NaN because Number() is used to convert a string to a number and "abc" is not a valid number so it will be converted to NaN

console.log(String(100)); // This will log "100" because String() is used to convert a number to a string and 100 is converted to "100"

// all done 