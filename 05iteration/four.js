// for in loop 
// or...in is used to loop over the enumerable properties (keys) of an Object.
// Key difference from for...of:
// - for...of gives you the VALUE directly.
// - for...in gives you the KEY (or index), and you use obj[key] to get the value.

// ---- Syntax ----
// for (const key in object) {
//     // code to execute using key and object[key]
// }


// // --- 1. Looping over a Plain Object ---
const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    java: 'java'
}

for (const key in myObj) {
    console.log(key);
    
    
}
// 