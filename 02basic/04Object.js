// OBJECT CONSTRUCTOR (Blue print way)
// when we declare object using  constructor, it is create singleton 

// syntex diffrence btw singeton(constructor) and object literal
//const JsUser = {} // object literal syntex or none singleton
//const AppUser = new Object(); // object constructor syntex


const appUser = new Object();
appUser.id =  "123abc"
appUser.name = "Manjeet"
appUser.isLoggedIn = false


console.log(appUser);

// sub-object or nested object
const appUserTwo = {
    email: "Majeet@gmail.com",
    Fullname: {
        // sub-object or nested object
        userFullname: {
            // sub-object or nested object
            firstName: "Manjeet",
            lastName: "Jha"
        }
    }
}

console.log(appUserTwo.Fullname.userFullname.lastName); 

// merging two object using Object.assign() method
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

const obj3 =  Object.assign({}, obj1, obj2); // merging two object using Object.assign() method
const obj4 = Object.assign(obj1, obj2); // other sentex but not recommended
// const returnedTarget = Object.assign(target, source);

