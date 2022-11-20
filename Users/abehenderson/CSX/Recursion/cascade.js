
// Attempt #1
  // CSX does not accept this answer because it returns a string of numbers, not actual numbers

function cascade(number, counter = 0) {
  const numStr = "" + number;
  let place = numStr.length - counter; // 0: 3, 1: 2, 2: 1, 3: 0, 4: -1, 5: -2
  if (counter < numStr.length) {
    console.log(numStr.slice(-numStr.length, place));
    return cascade(number, counter + 1);
  } else if (counter < numStr.length * 2 - 1) {
    console.log(numStr.slice(-numStr.length, -place + 2));
    return cascade(number, counter + 1);
  }
}


cascade(123)
// should print
/*
111
11
1
11
111
*/

// I could console.log a modified string or console.log elements of a string

// The two biggest challenges with this probles are:
  // What is the breaking condition?
    // I could create a counter stored as a parameter and set it equal to the length of the string * 2 -1
  // How to reverse the modification 
    // Using an if statement, when logged string length equals 1, reverse)
    // Or use the counter - if counter is equal to or greater than string.length, reverse

// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation.