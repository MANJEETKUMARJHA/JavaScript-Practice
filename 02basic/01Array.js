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
myArr.push(14) // .push() it add a new elements to the end of an array, and returns the new length of the array.
console.log(myArr)
myArr.pop(); //.pop() Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr)