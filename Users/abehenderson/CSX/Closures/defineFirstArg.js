// Attempt #1

// Create a function called `defineFirstArg` that accepts a function called `callback` and an argument
function defineFirstArg(callback, num) {
  // `defineFirstArg` will return a function called `newFunction`
  function newFunction(...args) {
    // `newFunction` will also accept an argument called `...args`
    return callback(num, ...args);
    // `newFunction` invokes the function `callback` on the value `num` and `...args` 
    // Additional arguments needed by `callback` will need to be passed into `newFunction` (not sure exactly what this statement means.  This is why I chose the spread syntax `...args`)
  }
  return newFunction; 
}

const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

// Create a function defineFirstArg that accepts a function and an argument. 
// Also, the function being passed in will accept at least one argument. 
// defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
// Additional arguments needed by the passed-in function will need to be passed into the returned function.

//-------------------------------------------------------------------------------------

// Attempt #2

function defineFirstArg(callback, num) {
  return function(...args) { return callback(num, ...args); }
}

// Is there any advantage to using `...args` (attepmt #1) vs a standar parameter name such as `input` (attempt #2) in this scenario?