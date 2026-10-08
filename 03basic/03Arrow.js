// 'this' KEYWORD : it reffers current context

// Regular Functions: Create their own 'this' context based on HOW they are called.
const user = {
    username: "manjeet",
    price: 444,

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to website`); // we use this keyword for current context 
        // console.log(this); 
    }

}

user.welcomeMassage(); // manjeet, welcome to website
user.username = "sam" // we are updating the context now
user.welcomeMassage(); // sam, welcome to website, because now context about sam 

console.log(this); // Empty object {} because because we are in node enviroment  
// console.log(this); // when we run this in browser console it give you window



// function chai () {
//     // this will excute but it is  Object [global]
//     console.log(this);
// }

// chai() // output: undefined

function chai () {
    let username = "manjeet"
    // this will not excute but it is  Object [global]
    console.log(this.username);
}

chai() // output: undefined


// Arrow function :
// what is arrow function

// we can't use this keyword in arrow function because it return empty object {} or, 
// it will return undefined also when we add to some specific parementer with keyword
const one =  () => {
    let username = "manjeet"
    console.log(this); // empty object {}
    console.log(this.username); // undefined 
    
}

one()

// syntext of arrow function
const addTwo =  (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));


// implecet return
const add3 = (num1, num2) => num1 + num2
const add1 = (num1, num2) => ({username: "manjeet"}) // when we return object the syntex is 
const add2 = (num1, num2) => (num1 + num2) // we can use raping for parenthis or bracket not curly and square only small bracket
// or if we wrap under curly brackes then we use return key word like 
/*
const addTwo =  (num1, num2) => {
    return num1 + num2
}
*/

console.log(add3(3, 6));
console.log(add2(3,5));

// Explicit return when we use return 
const addTwo1 =  (num1, num2) => {
    return num1 + num2
}

console.log(addTwo1(8, 4));

