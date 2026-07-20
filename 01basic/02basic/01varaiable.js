// Declare a variable
const accountID = 12345; // const is used to declare a variable, const can't change
let accountEmail = "manjeet@gmail.com"; // let is used to declare a variable, let can change
var accountPassword = "12345"; // var is used to declare a variable, but it's not recommended
accountCity = "Kolkata";
let accountState; // declared but not initialized

// accountID = 2 // not allowed, will throw an error

accountEmail = "newemail@gmail.com"; // allowed, can change
accountPassword = "newpassword"; // allowed, can change
accountCity = "Jaipur"; // allowed, can change
accountState = "Rajasthan"; // allowed, can change

console.log(accountID); // This will log 12345

/*
prefer not to use var because of issue in block scope and functional scope
*/

// console.log(accountID); // This will throw an error because accountID is a const and cannot be reassigned
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);