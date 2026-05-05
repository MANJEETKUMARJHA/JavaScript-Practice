const accountID = 12345 //const is used to declear variable const can't change
let accountEmail = "manjeetjaha@gmail.com" //let is used to declear variable
var accountPassword = "12345" //we dont used to declear var
accountCity = "Kolkata" //wrong way to declear variable
let accountState;

// accountID = 2 not allowed
accountEmail = "hc@gmail.com"
accountPassword = " 12456"
accountCity = "jaipur"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])