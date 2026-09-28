const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros); // appends new elements to the end of an array, and returns the new length of the array
// .push() method is using in exesting values 
// .push() is (modifies) the existing array.

// console.log(marvel_heros); // its print array in array like this [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3][1]); 

const allHeros = marvel_heros.concat(dc_heros); //Additional arrays and/or items to add to the end of the array.
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// .concat is not work in exesiting value so, we need to declear new value
// .concat() merges arrays and returns a NEW array.

console.log(allHeros);

// spread operator(...)
// It "spreads" out the elements of an iterable (like an array) into individual elements.
// This is the modern, widely preferred way to merge arrays.
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
