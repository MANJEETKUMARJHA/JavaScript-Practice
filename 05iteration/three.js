// for of loop is array specific loop

// syntex
// ["", "", ""]
// [{}, {}, {}]
// for (const element of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]
// object means = where or on which i want to apply for eg. in this case arr 
// for of loop appply not only obj it will aplly also on string or many more 
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}


// this code for string 
// const greeting = "hello World!"

// for (const greet of greeting) {

//      this is remove the space between them
//     if (greet === " ") {
//          continue; // Skip the space
//     }
//     console.log(`Each Char is ${greet}`);
    
// }


const greeting = "hello World!";
let output = "";

for (const greet of greeting) {
    output += greet;
}

console.log(output); // Output: hello World!