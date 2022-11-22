// Attempt #2 (CSX Solution)

function once(cb) {
  let hasBeenCalled = false;
  let result;
  
  function oncified(...args) { // Uses 'rest operator' to accept an array if needed
    if (!hasBeenCalled) {
      result = cb(...args); // Uses 'spread operator' to invoke 'cb' on all elements on an array, if an array is passed in (must be for an edge case, but it wasn't specified in instructions that we needed to account for an array)
      hasBeenCalled = true;
    }
    return result;
  }
  return oncified;
}

//----------------------------------------------------------------------------------------
// Attempt #1

function once(cb) {
  let result;
  return function(n) {
    if (result === undefined) { // Is there any case where using 'result' as defined or undefined may fail, vs using a boolean as in the CSX example above?
      return result = cb(n);
    }
      return result;
  }
}

/* OR */

function once(cb) {
  let result;
  return function(n) {
    return (!result) ? result = cb(n) : result; // Is there anything wrong with using ternary operators?  I think they are more clear to read.  I get less confused reading this than when reading dropdown style 'if...else' statements.
  }
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});


console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

// Write a function once that accepts a callback as input and returns a function. 

// When the returned function is called the first time, it should call the callback and return that output. 

// If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.