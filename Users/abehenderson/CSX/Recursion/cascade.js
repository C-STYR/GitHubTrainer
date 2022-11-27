// Attempt #2 (without string manipulation...using math!)
  // Ok, this one is bending my brain. Its so simple.  Apparently it logs the number as it pushes call frames to the call stack and it logs the number as it pops the frames from the call stack.

function cascade(num) {
  console.log(num);
  if (num >= 10) {
    cascade(Math.floor(num / 10));
    console.log(num);
  } 
}

cascade(12345) 

// Ideas:
  // Convert each digit into an element of an array
  // Destructure the array
  // How do I convert elements of an array back to a number?
    // Every example that I can find online involves converting the number to a string first, then converting it into an array
    // Is this considered string manipulation?
  // Try using 'math.floor' and dividing each number by 10

//-----------------------------------------------------------------------------------------
// Attempt #1 (with string manipulation)
  // CSX does not accept this answer because it returns a string of numbers, not actual numbers.
  // UPDATE: Adding '+' in front of the string to be logged, converts the string into a number.
  // This is obviously pretty clunky, but it was a first effort and I got it to work

function cascade(number, counter = 0) {
  const numStr = "" + number;
  let place = numStr.length - counter; // 0: 3, 1: 2, 2: 1, 3: 0, 4: -1, 5: -2
  if (counter < numStr.length) {
    console.log(+numStr.slice(-numStr.length, place)); // Using '+' in front of 'numStr.slice' converts the string back into a number
    return cascade(number, counter + 1);
  } else if (counter < numStr.length * 2 - 1) {
    console.log(+numStr.slice(-numStr.length, -place + 2));
    return cascade(number, counter + 1);
  }
}

// cascade(12345) // prints:
  /*
  12345
  1234
  123
  12
  1
  12
  123
  1234
  12345
  */

// I could console.log a modified string or console.log elements of a string

// The two biggest challenges with this probles are:
  // What is the breaking condition?
    // I could create a counter stored as a parameter and set it equal to the length of the string * 2 -1
  // How to reverse the modification 
    // Using an if statement, when logged string length equals 1, reverse)
    // Or use the counter - if counter is equal to or greater than string.length, reverse

// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation.