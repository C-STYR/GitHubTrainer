// Attempt #1

// Create a function called `cycleIterator` that accepts an array and returns a function
  // The returned function will not accept any arguments
function cycleIterator(array) {
  // Initialize a variable `counter` and set equal to zero
  let counter = 0;
  // Create a function that returns an index of the array passed into `cycleIterator`
  return function() {
    if (counter >= array.length) counter = 0;
    // Using an if statement, set the counter to zero, if it is greater than or equal to the length of the array
    counter++;
    return array[counter - 1];
    // Return the array at the index position equal to the value of `counter`
    // Iterate `counter` plus one
  }
  // Return the function 
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
// When first invoked, the returned function will return the first element of the array. 
// When invoked a second time, the returned function will return the second element of the array, and so forth. 
// After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

//--------------------------------------------------------------------------------------

// Attempt #2 (CSX Solution)

function cycleIterator(array) {
  let index = 0;

  return function() {
    const result = array[index++];
    if (index >= array.length) index = 0;
    return result;
  }
}