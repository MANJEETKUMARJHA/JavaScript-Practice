// 'this' KEYWORD : it reffers current context


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


// Arrow function 


// function chai () {
//     // this will excute but it is  Object [global]
//     console.log(this);
// }

// chai() // output: undefined

function chai () {
    // this will excute but it is  Object [global]
    console.log(this);
}

chai() // output: undefined