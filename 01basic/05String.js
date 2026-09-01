// String Methods in JavaScript

const name = "Manjeet"
const repoCount = 50

console.log(name + " " + repoCount) // This type of concatenation methods are not used in modern JavaScript: +
// console.log(name , repoCount) // concatenation methods are : , this is not a good way to concatenate strings and numbers

// Now day we use template literals to concatenate strings and numbers that mean ` ` whare we can use ${} to concatenate strings and numbers or crate a placeholder for variables in a string

console.log(`My name is ${name} and I have ${repoCount} repos`) // Template literals are the best way to concatenate strings and numbers
// hare ` ` is called backticks and it use for template literals and ${} is called placeholder for variables in a string

// String declaration
const gameName = new String("manjeet") // String object
console.log(gameName[0]); // m because string is an array of characters and we can access each character by its index
// console.log(typeof gameName) // String object
console.log(gameName.__proto__);

console.log(gameName.length); // 7 because manjeet has 7 characters
console.log(gameName.toUpperCase()); // MANJEET because toUpperCase() method converts all the characters of a string to uppercase

// String methods are used to manipulate and work with strings in JavaScript. Some common string methods include:
// example: toUpperCase(), toLowerCase(), charAt(), indexOf(), slice(), substring(), replace(), split(), trim(), includes(), startsWith(), endsWith() etc.
const myName = "Manjeet"
console.log(myName.charAt(1)); // a because charAt() method returns the character at the specified index
console.log(myName.charAt(0)); // M because charAt() method returns the character at the specified index
console.log(myName.indexOf("M")); // 0 because indexOf() method returns the index of the first occurrence of the specified value