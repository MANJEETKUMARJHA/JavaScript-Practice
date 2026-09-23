// // JavaScript Time and Date basics

// // Current date and time
// const now = new Date();
//console.log('Current date and time:', now);

// // Date components
// // th
// console.log('Year:', now.getFullYear());
// console.log('Month (0-11):', now.getMonth());
// console.log('Day of month:', now.getDate());
// console.log('Day of week (0-6):', now.getDay());
// console.log('Hours:', now.getHours());
// console.log('Minutes:', now.getMinutes());
// console.log('Seconds:', now.getSeconds());

// // Create a specific date
// const birthday = new Date('1999-12-25T08:30:00');
// console.log('')
// console.log('Birthday:', birthday.toString());

// // Format date values
// console.log('ISO string:', now.toISOString());
// console.log('Locale string:', now.toLocaleString());

// // Time difference
// const start = new Date();
// for (let i = 0; i < 100000; i++) {
//   Math.sqrt(i);
// }
// const end = new Date();
// console.log('Elapsed milliseconds:', end - start);

// // Core concepts of Date and Time in JavaScript
// // 1. JavaScript stores date/time as milliseconds since January 1, 1970 (UNIX epoch).
// // 2. new Date() creates a date object for the current moment.
// // 3. getFullYear(), getMonth(), getDate(), getHours(), etc. read local time values.
// // 4. Date objects can also be formatted using toISOString(), toLocaleString(), and toUTCString().
// // 5. Date.parse() and Date.UTC() help convert strings and create UTC-based dates.

// const timestamp = Date.now();
// console.log('Timestamp in milliseconds:', timestamp);
// console.log('Date from timestamp:', new Date(timestamp).toString());
// console.log('UTC time:', new Date().toUTCString());
// console.log('Parsed date:', new Date(Date.parse('2025-01-15T12:00:00Z')).toISOString());
// console.log('UTC date created:', new Date(Date.UTC(2025, 0, 15, 12, 0, 0)).toISOString());

// // Set date parts
// const future = new Date();
// future.setFullYear(2030);
// future.setMonth(5); // June
// future.setDate(15);
// console.log('Modified date:', future.toLocaleDateString());

// In javascript date and time, date represent a single moment in time in a platform independent formate
// it begining of january 1, 1970, UTC
// nowdays we use temporal but it not fully function to some old browser so, we use older version

const now = new Date();
console.log('Current date and time:', now);

let myDate = new Date();
console.log(myDate.toString()); //toString() it converts a complex object into a plain text string that humans can easily read and systems can display.
console.log(myDate.toDateString()); //in .toDateString() it print only date and like Sat Sep 19 2026
console.log(myDate.toJSON()); //Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
// .toJSON(), it always returns a string in UTC format (Coordinated Universal Time) using the ISO 8601 standard (YYYY-MM-DDTHH:mm:ss.sssZ).
console.log(myDate.toLocaleString()); // Returns a value as a string value appropriate to the host environment's current locale.
console.log(myDate.toTimeString()) // Returns a time as a string value.
console.log(myDate.toLocaleTimeString('it-IT')); //Returns a time as a string value appropriate to the host environment's current locale.
// The parentheses () are needed because they act as the "go button" or the execution trigger for a function in JavaScript.
console.log(typeof myDate); // it is object 



// for specific date and time 
const birthday = new Date('1999-12-25T08:30:00');
//String format (ISO 8601): new Date('1999-12-25T08:30:00') 
// Parses as a calendar date. Months are 1-indexed (1 = Jan, 12 = Dec).
// The 'T' is the standard separator between date and time. 

console.log('') // This simply prints an empty line to the console. it create visual spacing terminal
console.log('Birthday:', birthday.toString());
console.log(birthday)

console.log("");

let myCreateDate = new Date(2023, 0, 22);
 //Number arguments: new Date(2023, 0, 22)  
//  Parses the month as an array index. Months are 0-indexed]
// (0 = Jan, 11 = Dec). This is a legacy feature inherited from Java.

console.log(myCreateDate.toDateString()); //// Prints just the date portion in a readable format

let myTimestamp = Date.now(); // Returns the current time in milliseconds since January 1, 1970 (Unix Epoch).
console.log(myTimestamp); //Prints the raw millisecond integer to the console (e.g., 1727104052300)
console.log(myCreateDate.getTime()); // Extracts the millisecond value of your specific 'myCreateDate' (Jan 22, 2023).
// we use .getTime() when you want to compare two dates using math.

console.log(Date.now() / 1000); //Converts current milliseconds into seconds by dividing by 1000.
console.log(Math.floor(Date.now()/1000)); // Math.floor() removes the decimals. This is widely used for database timestamps.


// Converts the raw millisecond number back into a Date object, then prints 
// it in a human-readable local date and time
console.log(new Date(myTimestamp).toLocaleString()); 