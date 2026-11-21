// for of loop is array specific loop
// for...of is a standard loop for "iterables", NOT a High-Order Array Method 
// (High-order methods are .forEach, .map, .filter, .reduce, etc.)


// ---- syntex ----
// ["", "", ""]
// [{}, {}, {}]
// for (const element of iterable) {
    // code to execute on each item 
// }

// ["", "", ""]
// [{}, {}, {}]
// iterable = any collection JavaScript knows how to step through 
// one-by-one (Arrays, Strings, Maps, Sets, NodeLists).

// --- 1. Looping over an Array --- 
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}


// --- 2. Looping over a String (with continue) ---
const greeting = "hello World!"

for (const greet of greeting) {

//      this is remove the space between them
   if (greet === " ") {
        continue; // Skip the space
   }
   console.log(`Each Char is ${greet}`);
    
}

// --- 3. Building a new String --- (or this is help to print hello World! in a single line not each char take each line )
let output = "";

for (const greet of greeting) {
    output += greet;
}

console.log(output); // Output: hello World!