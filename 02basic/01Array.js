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