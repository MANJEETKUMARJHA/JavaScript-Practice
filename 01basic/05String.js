// String Methods in JavaScript

const name = "Manjeet"
const repoCount = 50

console.log(name + " " + repoCount) // This type of concatenation methods are not used in modern JavaScript: +
// console.log(name , repoCount) // concatenation methods are : , this is not a good way to concatenate strings and numbers

// Now day we use template literals to concatenate strings and numbers that mean ` ` whare we can use ${} to concatenate strings and numbers or crate a placeholder for variables in a string

console.log(`My name is ${name} and I have ${repoCount} repos`) // Template literals are the best way to concatenate strings and numbers
// hare ` ` is called backticks and it use for template literals and ${} is called placeholder for variables in a string

// String declaration
// There are two ways to declare a string in JavaScript: using string literals and using the String object.
const myName = "Manjeet" // String literal
console.log(myName[5]);

const gameName = new String("manjeet ") // String object
console.log(gameName[0]); // m because string is an array of characters and we can access each character by its index
console.log(typeof gameName) // String object
console.log(gameName.__proto__) // String object prototype
console.log(gameName.trim()); // manjeet because trim() method removes whitespace from both ends of a string

console.log(gameName.length); // 8 because length property returns the length of a string
console.log(gameName.toUpperCase()); // MANJEET because toUpperCase() method converts all the characters of a string to uppercase

// String methods are used to manipulate and work with strings in JavaScript. Some common string methods include:
// example: toUpperCase(), toLowerCase(), charAt(), indexOf(), slice(), substring(), replace(), split(), trim(), includes(), startsWith(), endsWith() etc.
console.log(gameName.charAt(8)); //   because charAt() method returns the character at the specified index
console.log(gameName.charAt('0')); // m because charAt() method returns the character at the specified index
console.log(gameName.indexOf("m")); // 0 because indexOf() method returns the index of the first occurrence of the specified value

//type of string methods
// 1. String methods that return a new string: toUpperCase(), toLowerCase(), trim(), slice(), substring(), replace(), split() etc.
// 2. String methods that return a number: length, indexOf(), charAt() etc.

// 3. String methods that return a boolean: includes(), startsWith(), endsWith() etc.
console.log(gameName.includes("manjeet")); // true because includes() method returns true if the specified value is found in the string
console.log(gameName.startsWith("man")); // true because startsWith() method returns true if the string starts with the specified value
console.log(gameName.endsWith("j")); // false because the it endwith "t" not "j" because endsWith() method returns true if the string ends with the specified value



// 4. String methods that return an array: split() etc.
console.log(gameName.split(" ")); // ['manjeet', ''] because split() method splits a string into an array of substrings
console.log(gameName.split("m")); // ['', 'anjeet', ''] because split() method splits a string into an array of substrings

// 5. String methods that return an object: match(), search() etc.
console.log(gameName.match(/manjeet/)); // ['manjeet', index: 0, input: 'manjeet ', groups: undefined] because match() method returns an array of matches for a specified regular expression
console.log(gameName.match(/man/)); // ['man', index: 0, input: 'manjeet'] because match() method returns an array of matches for a specified regular expression
console.log(gameName.search(/anj/)); // 1 because search() method returns the index of the first match for a specified regular expression
console.log(gameName.search(/manjeet/)); // 0 because search() method returns the index of the first match for a specified regular expression

const str = "Hello World"
console.log(str.search(/World/)); // 6 because search() method returns the index of the first match for a specified regular expression



// 6. String methods that return undefined: concat(), padStart(), padEnd() etc.

// concat() in JavaScript is a String method used to join two or more strings and return a new string.
const str1 = "Hello"
const str2 = "world"
console.log(str1.concat(" ", "How are you?")); // Hello world How are you? because concat() method concatenates two or more strings
const str3 = str1.concat(" ", str2); 
console.log(str3); // Hello world because concat() method concatenates two or more strings


// padStart() is a JavaScript String method used to add characters at the beginning of a string until the string reaches a specified length.
const str4 = "123"
console.log(str4.padStart(3, "0")); // 0123 because padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
// hare (x, "y") x is target length and y is padding character where y is added to the start of the string until the string reaches the target length

// padEnd() is a JavaScript String method used to add characters at the end of a string until the string reaches a specified length.
const str5 = "123"
console.log(str5.padEnd(5, "0")); // 12300 because padEnd() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
// hare (x, "y") x is target length and y is padding character where y is added to the end of the string until the string reaches the target length 