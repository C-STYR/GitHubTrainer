// Attempt #1

function dateStamp(callback) {

  function newFunc(...args) {
    let object = {};
    object['date'] = Date().slice(0, 15);
    object['output'] = callback(...args);
    return object;
  }
return newFunc;
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

// Create a function called `dateStamp` that accepts a function called `callback`
// `dateStamp` will return a function called `newFunc`
  // `newFunc` will accept whatever argument the callback function accepts (use `...args`)
  // `newFunc` will return an object called `object`
    // `object will return two key value pairs:
      // 1. key is 'date' : value is todays date in a string format
      // 2. key is 'output' : value is the evaluated result of invoking `callback` on `...args`


// Create a function dateStamp that accepts a function and returns a function. 

// The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

//-------------------------------------------------------------------------------------

// Attempt #2 (CSX Solution)

function dateStamp(callback) {

  return function(...args) {
    let object = {};
    object.date = new Date().toDateString(); // `object.date` is more efficient and cleaner than `object['date']`.  Also, using `.toDateString()` is much better than using `Date().slice()` like I did in the first attempt.
    object.output = callback(...args);
    return object;
  }
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }