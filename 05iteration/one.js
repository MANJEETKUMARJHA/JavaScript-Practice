// For Loop

// index++ :- means 


for (let i = 0; i < 10; i++) {
    const element = i;
    // first execute 0 to 4 then they satify the if condition then go to nextt step
    if (element == 5) {
        console.log("5 is best number"); // 
    }
    console.log(element);
    
    
}

// nested loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop ${i}`);

    // inner loop 
    for (let j = 0; j <= 10; j++) {
        // console.log(`outer loop vlaue under inner loop ${i} and inner loop value ${j}`);
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

// Array in for loop (basic stacture)

let myArray = ["Batman", "Superman", "flash"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}


// 