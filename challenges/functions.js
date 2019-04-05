// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(a, b, callback) {
  console.log(callback(a,b));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b) {
  return a + b;
}

function multiply(a,b) {
  return a*b;
}

function greeting(a,b) {
  return "Hello " + a + " " + b + ", nice to meet you!";
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume( 2, 2, add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// nestedFunction() can acces the variable 'internal'because it is within its scope. When the compiler takes the first pass it sees the reference 'internal' and is able
// to cascade down to internal. It can acces out of scope chain, but not beyond its own scope. 

// Explanation: 


const external = "I'm outside the function";
//console.log(internal);//Doesnt work here!

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    console.log(external, `JK`);
  };
  nestedFunction();
}
myFunction();