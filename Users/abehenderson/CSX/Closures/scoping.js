
function outer() { // 'outer' is only run when 'willCounter' and 'jasCounter' are declared.  Because it returned the function 'incrementCounter' to global memory, 'outer' is obsolete any time 'willCounter' or 'jasCounter' are invoked.  See line 11.
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer(); // once 'outer' has been invoked and set to equal the definition of the function 'incrementCounter' in global memory, 'outer' is now dead.  When 'willCounter' is later invoked, the JS engine finds the label 'willCounter' stored in global memory and it is equal to the function definition of 'incrementCounter' -- that also includes within the backpack attached to it, the variable 'counter' and the value assigned to 'counter'.
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // counter 1
willCounter(); // counter 2
willCounter(); // counter 3

jasCounter(); // counter 1
willCounter(); // counter 4


// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing.