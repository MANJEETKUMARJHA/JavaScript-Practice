// // An array is a single variable used to store a collection of multiple items.
// // It comes with built-in methods (functions) to easily manage that data.

// // 1. JavaScript arrays are dynamic (they can grow or shrink in size).
// // 2. They can hold a mix of different data types (e.g., numbers, strings, objects all in one array).
// // 3. Array elements are accessed using numbered indexes starting at 0 (like myArr[0]), not by using words/strings.
// // 4. Standard copy operations in JS create "shallow copies" (both variables point to the same memory reference). "Deep copies" create fully independent duplicates.

// const myArr = [0, 5, 2, 3, 4];
// const myHeros = ["manjeet", "ironman", "batman"];

// // Another way to declare an array
// const myArr2 = new Array(1, 2, 3, 4); 
// console.log(myArr[1]);

// // --- BASIC ARRAY METHODS ---

// // .push(): Adds a new element to the END of the array. Returns the new length.
// myArr.push(14); 
// console.log(myArr);

// // .pop(): Removes the LAST element from the array. Returns the removed element.
// myArr.pop(); 
// console.log(myArr);

// // .unshift(): Adds a new element to the START of the array. Returns the new length. (Note: Shifts all other elements down).
// myArr.unshift(0); 
// console.log(myArr);

// // .shift(): Removes the FIRST element from the array. Returns the removed element.
// myArr.shift(); 
// console.log(myArr);

// // .includes(): Returns true if the element exists in the array, otherwise returns false.
// console.log(myArr.includes(7)); 

// // .indexOf(): Returns the position (index) of the element. Returns -1 if it doesn't exist.
// console.log(myArr.indexOf(4)); 

// // .join(): Converts all elements of the array into a single string, separated by commas.
// const newArr = myArr.join(); 
// console.log(newArr); 
// console.log(typeof newArr); // "string"


// // --- SLICE vs. SPLICE ---

// console.log("A (Original):", myArr);

// // .slice(startIndex, endIndex): 
// // Copies a portion of the array. 
// // It INCLUDES the startIndex, but EXCLUDES the endIndex.
// // Crucially: It DOES NOT change the original array.
// const myn1 = myArr.slice(0, 3);
// console.log(myn1);
// console.log("B (After slice):", myArr); // Array remains exactly the same

// // .splice(startIndex, deleteCount): 
// // Removes or replaces elements in the array.
// // The first number is where to start. The second number is HOW MANY items to delete.
// // Crucially: It MODIFIES the original array by ripping those items out.
// const myn2 = myArr.splice(0, 3); 
// console.log(myn2); // Prints the items that were cut out
// console.log("C (After splice):", myArr); // The original array is now missing those 3 items

// Array enable the storing a collection of mutiple items under a single variable name and has
// members for performing common array opperation

// javascript  arrays size is resizable and contain a mix of diffrent datatypes. 
// array elements cannot be accessed using arbitray string as index i.e, array can acces like [0]
// javascript array copy aperation craete shallow copies(share same refrence), deep copies(shere not same refrence)

const myArr = [0, 5, 2, 3, 4];
const myHeros = ["manjeet", "ironman", "batman"];

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


// array methods
myArr.push(14) // .push():- it add a new elements to the end of an array, and returns the new length of the array.
console.log(myArr);

myArr.pop(); //.pop():- it Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr);

myArr.unshift(0); //.unshift():- Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr);

myArr.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr);

console.log(myArr.includes(7)); // .include():- Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myArr.indexOf(4)); //.indexof():-  Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join(); //.join() Adds all the elements of an array into a string, separated by the specified separator string.
// it beasicly convert in to string 

console.log(newArr); 
console.log(typeof newArr)

// slice, and splice

console.log("A ", myArr);
// slice:- 
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
//For example, -2 refers to the second to last element of the array.

const myn1 = myArr.slice(0, 3);
// in slice method .slice(x, y) hare x is included but y is not included or excludded
console.log(myn1);
console.log("B ", myArr)

//splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// it manaplute the array
const myn2 = myArr.splice(0, 3) 
// in splice method .splice(x, y) hare x and y both are included
console.log(myn2);
console.log("C ", myArr);
