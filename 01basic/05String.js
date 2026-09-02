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


// 7. String methods that slice a string: slice(), substring(), substr() etc.
const str6 = "Hello Manjeet"
console.log(str6.slice(0, 5)); // hare .slice(x, y) x is start index and y is end index 
console.log(str6.slice(6)); // hare .slice(x) x is start index and it will slice the string from start index to the end of the string
console.log(str6.slice(-3)); // hare .slice(x) x is negative index and it will slice the string from the end
console.log(str6.slice(-3, -1));

// the main difference substring() does not work with negative indexes the same way slice() does.
console.log(str6.substring(0, 5)); // hare .substring(x, y) x is start index and y is end index
console.log(str6.substring(6)); // hare .substring(x) x is start index and it will slice the string from start index to the end of the string
console.log(str6.substring(-3)); // hare .substring(x) x is negative index and it not work it will return whole string because substring() does not work with negative indexes
// it treats negative values as 0 and returns the whole string


// substr() is similar to slice() and substring() but it takes the starting index and the length of the string to be extracted as parameters.
console.log(str6.substr(5, 4)); // hare .substr(x, y) x is start index and y is length of the string 
// in substr() y is the length of the string to be extracted, not the end index like in slice() and substring().
// y is printed till the length of the string to match the length of the string to be extracted.
// if the start index is greater than length of the string then it will start form the index and print the string till the end of the string. if the start index is negative then it will start from the end of the string and print the string till the end of the string.
console.log(str6.substr(-3)); // hare .substr(x) x is negative index and it will slice the string from the end and print the string till the end of the string
console.log(str6.substr(6)); // hare .substr(x) x is start index and it will slice the string from start index to the end of the string








// 8. String methods that return a string: replace(), replaceAll(), repeat(), valueOf() etc.
const str7 = "Hello World"


// replace() is used to replace a part of a string.
console.log(str7.replace("World", "Manjeet")); 

const url = "https://manjeet.com/manjeet20%jha"
console.log(url.replace("manjeet", "jha")); 
console.log(url.replaceAll("manjeet", "jha"));

const str8 = "apple apple apple"
console.log(str8.replace("apple", "banana")); 
// .replace(searchValue, newValue) hare first occurrence of searchValue is replaced with newValue


// allreplace() is used to replace all occurrences of a string.
console.log(str8.replaceAll("apple", "banana")); 
// .replaceAll(searchValue, newValue) hare all the searchValue is replaced with newValue 



// repeat() is used to repeat a string multiple times.
const str9 = "Hello "
console.log(str9.repeat(3)); 
// .repeat(x) hare x is the number of times the string is repeated



console.log("hii ".repeat(3)); 
// hare "hii " is repeated 3 times and it will print "hii hii hii "



// valueOf() is used to return the primitive value of a string.
const num1 = new Number(123);
console.log(num1);
console.log(typeof num1); // object because num1 is a Number object
console.log(num1.valueOf()); // 123 
console.log(typeof num1.valueOf()); // number because it converts the Number object to a primitive number value 


// eg 2 
let str10 = new String("manjeet");
console.log(typeof str10);
console.log(str10.valueOf()); // manjeet
console.log(typeof str10.valueOf()); // string because it converts the object to string





// 8. String methods that return a string: toString(), valueOf() etc.
 // toString() is a JavaScript String method used to convert a value to a string.
const num = 123
console.log(num.toString()); // "123" because toString() method converts a number to a string

// valueOf() is a JavaScript String method used to return the primitive value of a string.
const str11 = new String("Hello World")
console.log(str11.valueOf()); // "Hello World" because valueOf() method returns the primitive value of a string 



//trim() removes whitespace from both ends of a string.
const str12 = "   Hello World   "
console.log(str12); 
console.log(str12.trim()); // it remove whitespace from both ends of the string
console.log(str12.trimStart()); //it remove whitespace from start of the string only
console.log(str12.trimEnd()); // it remove whitespace from end of the string only

