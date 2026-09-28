const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros); // Appends new elements to the end of an array, and returns the new length of the array.
// .push() method is used on existing arrays.
// .push() mutates (modifies) the existing array.

// console.log(marvel_heros); // It prints an array within an array like this: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3][1]); 

const allHeros = marvel_heros.concat(dc_heros); // Additional arrays and/or items to add to the end of the array.
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// .concat() does not modify the existing array, so we need to declare and assign it to a new variable.
// .concat() merges arrays and returns a NEW array.

console.log(allHeros);

// Spread operator (...)
// It "spreads" out the elements of an iterable (like an array) into individual elements.
// This is the modern, widely preferred way to merge arrays.
const all_new_heros = [...marvel_heros, ...dc_heros]; // spread operator
console.log(all_new_heros);


const anotherArr = [1, 2, 3, 4, [4, 5, 6], 7, [6, 7,[4, 5]]];

const usable_another_arr = anotherArr.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// .flat(x) - here 'x' refers to the maximum recursion depth. 
// .flat(depth) returns a new array with all sub-array elements flattened into it.
console.log(usable_another_arr);


console.log(Array.isArray("Manjeet")); // Array.isArray("Manjeet"): we can check if it is an array or not. 

console.log(Array.from("manjeet")); // Creates an array from an iterable or array-like object.

console.log(Array.from({name: "manjeet"})); 
// It gives an empty output [] because plain objects are not iterable and lack a 'length' property.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // .of() works very similarly to .from(), but with a key difference.

// The main difference between .of() and .from() is:
// .from(): takes a single iterable or array-like entity (like a string, a NodeList, or a Set) and splits it into an array.
// .of(): takes a list of individual, comma-separated arguments and groups them together into a new array, regardless of their type.