// While loop :- 
// syntex of while loop

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ['Flash', 'batman', 'Superman']

let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = ++arr // arr + 1
}

// Do whle loop
// first work then condition check

let score = 1

do {
    console.log(`score is ${score}`);
    score++
    
} while (score <= 10);

// draw back of do whlie loop is they complete the wrok fist then check the condtion.