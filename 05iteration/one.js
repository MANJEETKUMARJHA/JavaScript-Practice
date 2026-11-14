// For Loop
// Syntax: for (initialization; condition; update) { body }
// Execution Order:
//   Step 1: Initialization runs ONCE at the start (let i = 0)
//   Step 2: Condition is checked BEFORE each cycle (i < 10)
//   Step 3: Loop body executes if condition is true
//   Step 4: Update runs AFTER loop body (i++), then repeats Step 2


// i++ (Post-Increment): Increases value by 1 (equivalent to i = i + 1)

for (let i = 0; i < 10; i++) {
    const element = i;
    // Runs for 0–4 without entering if. Then they satify the if condition then go to nextt step
    if (element == 5) {
        console.log("5 is best number"); // 
    }
    console.log(element);
    
    
}

// nested loop
// Rule: Inner loop completes ALL iterations for EACH single outer loop iteration.
// Total executions = Outer count (11) * Inner count (11) = 121 times.

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop ${i}`);

    // inner loop 
    for (let j = 0; j <= 10; j++) {
        // console.log(`outer loop vlaue under inner loop ${i} and inner loop value ${j}`);
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

// Array in for loop (basic stacture)
// Arrays are 0-indexed: length is 3, valid indexes are 0, 1, 2.
// Always use '< myArray.length'. Using '<=' causes an off-by-one error (undefined).

let myArray = ["Batman", "Superman", "flash"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}


// important keyword
// break and continue

// 'break' -> Exits the entire loop immediately when condition matches (stops at 4)
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break  // using break keyword we can break the control flow 
    }
    console.log(`value of i is ${index}`);
    
}

// 'continue' -> Skips ONLY the rest of the current iteration and jumps to index++
// Result: "Value of index is 5" is skipped, and the loop continues from 6 to 20

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue //  they just stop the for one time 
    }
    console.log(`value of i is ${index}`);
    
}