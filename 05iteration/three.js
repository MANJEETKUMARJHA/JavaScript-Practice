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


// ---- 4. Map ----
// Maps : it is object and hold key value pair 
// it also help in remamber the original insertiion order of the key value.
// no duplicate value and ervey is unique (duplicate keys overwrite old values, though values can repeat).

const map = new Map()
map.set('IN', "India")
map.set('US', "Uited state of America")
map.set('FR', "France")

console.log(map)

// Each iteration returns a [key, value] array pair
for (const entry of map) {
    console.log(entry); // e.g., [ 'IN', 'India' ]
}

for (const key of map) {
    console.log(key);
    
}

// destracturing of array using [key, value] unpacks each pair into separate variables
// throug using [] we can seprate the 
for (const [key, value] of map) {
    console.log(key,':-', value );
    
}


// this is not iterable or object is not iterable
// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':=', value);
    
// }