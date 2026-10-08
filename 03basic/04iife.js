// Immediately Invoked Function Expression (IIFE)
// iife : A function that is executed right after it is created.

// WE USE IT for avoiding polluting the global scope. it will creates a private scope. So,Global variables can cause bugs and naming are not conflicts
// or, To execute setup code or establish a database connection immediately without needing to call the function manually later.

// Syntax of (IIFE)
(function chai () {
    console.log(`DB CONNECTED`);
} )(); // This is named IIFE
// NOTE: If you write two IIFEs back-to-back, you MUST end the first one with a semicolon (;)

// using arrow function (Unnamed / Anonymous IIFE)
( (name) => {
    console.log(`DB CONNECTED to ${name}`);
}
) ("jha");


