// Attempt #1

// Create a function called `after` that accepts a number and a callback function
  // The number is the number of times the callback needs to be invoked before being executed 

  function after(num, callback) {
    let numOfCalls = 0;
    function threeCalls(string) {
      numOfCalls++;
      if (numOfCalls >= num) return callback(string);
    }
    return threeCalls;
  }  
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed
  
  //-----------------------------------------------------------------------------------------
  
  // Attempt #2 (CSX Solution)
  
  function after(num, callback) {
    let numOfCalls = 0;
    return function(...args) { // The only diff between #1 and #2 is using `...args` and the syntax of not creating the second function with a label.  This uses `return function(...args)` which I have never seen before that I can remember.  There is no need to for `return (function name) between lines 32 and 33.
      numOfCalls++;
      if (numOfCalls >= num) return callback(...args);
    }
  }  
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed
  
  // This is the second challenge that the CSX solution has used `...args` as its parameter to allow for multiple arguements being passed in.  I've been using a single parameter (like `string` in Attempt #1) that would not allow multiple arguments to be passed into the callback function.