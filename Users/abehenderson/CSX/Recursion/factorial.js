// Attempt #2 (CSX Solution)

function factorial(num, product = 1) {
  if (num === 1) return product;
  return factorial(num - 1, product * num);
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720

// I don't understand this solution very well.  It seems unneccesarily complicated.  Is there something I don't know?

//--------------------------------------------------------------------
// Attempt #1

function factorial(num) {
  return (num <= 1) ? num : num * factorial(num - 1);
}

// or..

const factorial = (num => (num <= 1) ? num : num * factorial(num - 1));


console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720

// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

// Create a function `factorial` that accepts a value
// call `factorial` and modify the accepted value to be value - 1
// once value equals 1, return value