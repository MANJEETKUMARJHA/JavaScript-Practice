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

// spread operator (...) is used to merge two object
// spread operator (...) is most recommended way to merge two object because it is more readable and easier to understand 
const obj5 = {...obj1, ...obj2};

console.log(obj3);

// eg. when the value come from the database and we want to merge it with the existing object
// it is come array of object

const user = [
    {
        id: "1",
        email: "user1@example.com"
    },
    {
        id: "2",
        email: "user2@example.com"
    },
    {
        id: "3",
        email: "user3@example.com"
    },
]
// accessing the value of the object in the array
console.log(user[1].email);


console.log(appUser);

// Returns the names of the enumerable string properties and methods of an object.
// Object.keys() method is used to get the keys of the object in an array
console.log(Object.keys(appUser));

// Object.values() method is used to get the values of the object in an array
console.log(Object.values(appUser));

// Object.entries() method is used to get the key-value pairs of the object in an array
console.log(Object.entries(appUser));

// Object.length() get the length of the object
console.log(Object.keys(appUser).length);

// Object.hasOwnProperty() method is used to check if the object has the specific value or not
console.log(appUser.hasOwnProperty("name"));

// Object.getOwnPropertyNames() method is used to get the names of the properties of the object in an array
console.log(Object.getOwnPropertyNames(appUser));
