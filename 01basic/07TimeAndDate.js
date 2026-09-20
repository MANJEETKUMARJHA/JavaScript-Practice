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

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString()); //in .toDateString() it print only date and like Sat Sep 19 2026
console.log(myDate.toJSON()); //Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
// .toJSON(), it always returns a string in UTC format (Coordinated Universal Time) using the ISO 8601 standard (YYYY-MM-DDTHH:mm:ss.sssZ).
console.log(myDate.toLocaleTimeString('it-IT')); //Returns a time as a string value appropriate to the host environment's current locale.
// The parentheses () are needed because they act as the "go button" or the execution trigger for a function in JavaScript.

const now = new Date();
console.log('Current date and time:', now);


// for specific date and time 
const birthday = new Date('1999-12-25T08:30:00');
console.log('') // This simply prints an empty line to the console. it create visual spacing terminal
console.log('Birthday:', birthday.toString());

