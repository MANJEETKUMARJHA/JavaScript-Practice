// maths AND numbers
// if the file name contains & then we have to use quotes to run the file in node.js
// PowerShell sees & as a special operator, not as part of the filename.
// So PowerShell doesn't send the complete filename Num&Math.js to Node
// Treat everything inside these quotes as one literal argument
// use the following command to run the file in node.js                node "Num&Math.js"
const num1 = 10
const num2 = 20

console.log(num1 + num2) // 30 because + operator is used to add two numbers
console.log(num1 - num2) // -10 because - operator is used to subtract two numbers
console.log(num1 * num2) // 200 because * operator is used to multiply two numbers
console.log(num1 / num2) // 0.5 because / operator is used to divide two numbers
console.log(num1 % num2) // 10 because % operator is used to get the remainder of two numbers
console.log(num1 ** num2) // 10000000000000000000000000000000000000000000000000000000000000000000 because ** operator is used to get the power of a number