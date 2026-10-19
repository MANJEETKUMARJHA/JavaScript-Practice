// Truthy and Falsey Value

const userEmail= "h@gmial.com"

if (userEmail) {
    console.log("Got user Email");
    
} else {
    console.log("Dont't have email");
    
}


// === Falsey Value ====
// =====================
// flase, 0, -0, 0n(BigInt), ""(Empty value), null, undefined, NaN


// === Truthy Values ====
// ======================
// "0" if zero under string its truthy value
// 'false' its truthy value
// " " its truthy value because under string we have space
// [], {}, function(){} its truthy value

// To check Array

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

// To check empty Object 
const emptyObj = {name: "Manjeet"}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
    
} else {
    console.log('Not empty');
    
}

// when we direct compare false == 0  it become true