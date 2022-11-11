// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 

function saveOutput(callback, input) {
  // Initialize an empty object `inputsMatchingOutputs` in the backpack
  const inputsMatchingOutputs = {};
  // Create a function that will be returned by `saveOutput` which will accept a value as input
  function result(num) {
    if (input === num) { 
      // Use an if statment to determine if the second input of `saveOutput` matches the input of the callback function
      return inputsMatchingOutputs;
      // return the object in the backpack
    } else {
      inputsMatchingOutputs[num] = callback(num);
      // save the passed in argument as a key and the output as a value in the initialized object `inputsMatchingOutputs` in the backpack
      // console.log(inputsMatchingOutputs);  
      return callback(num);
      // return the result of the callback function invoked on `num`
    }
  }
  return result;
  // return the function `result`
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

// saveOutput will then return a function that behaves exactly like the passed-in function, 
  // except for when the password string is passed in as an argument. 
  
// When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values