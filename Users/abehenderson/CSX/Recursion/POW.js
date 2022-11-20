// Attempt #2
  // Could it be this easy???

function pow(base, exp) {
  if (exp > 1) {
    return base * pow(base, exp - 1);
  }
    return base;
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

//-----------------------------------------------------------------------------------------
// Attempt #1
  // Ok, I hate this solution, because I'm storing a value in global memory again.  I can't figure out how to keep 'base' the same, while storing a 'result' value.  I could do it by creating a third input, but the directions specify only two inputs.

let counter = 0;

function pow(base, exponent) {
  if (counter === 0) {
    result = base; // how do I get away with not initializing 'result'???
    counter++;
    return pow(base, exponent -1);
  } else if (exponent >= 1) {
    result *= base;
    return pow(base, exponent - 1);
  } else {
    counter = 0;
    return result;
  }
}

// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

// Use an if condition to invoke 'pow()'
  // Breaking condition: If 'exponent' is greater than 1, invoke 'pow()'
    // 'base' equals 'base' times 'base'
  // Once exponent is greater than or equal to 1, return the value of 'base'


// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.