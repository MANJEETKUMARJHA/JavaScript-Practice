// Switch Statement

// The switch statement evaluates an expression (the "key") and matches its value
// key :- The value or expression you are checking (e.g., `month`).
// case (value) :- match the key until match it will go to next 
// break :- if the case or key match it will break the flow for next step execpt deffult
// default: Runs if NO cases match (similar to the 'else' in an if-else statement).
// if the key is given in string like "january" so, we can pass in case exect same case : "january"


const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("feb");
        break;

    case 3:
        console.log("mar");
        break;

    case 4:
        console.log("apirl");
        break;

    default:
        console.log("match");
        
        break;
}

// 30 min 