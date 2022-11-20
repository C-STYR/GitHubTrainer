// Attempt #3 (CSX Solution)
  // This solution is fine, but I like Attempt #2 the best of all of these options, unless there is an edge case where it will may fail.

function getLength(array, length = 0) {
  if (array[0] === undefined) {
    return length;
  } else {
  length++;
  return getLength(array.slice(1), length);
  }
}

// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0


// ----------------------------------------------------------------------------------------
// Attempt #2
  // This solution is a fail, because the function structure for `getLength` was provided in CSX and it only specified one parameter: `array`

function getLength(array, index = 0) {
  if (array[index]) {
    return getLength(array, index + 1);
  } else {
    return index;
  }
}

// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

// ----------------------------------------------------------------------------------------
// Attempt #1
  // I don't love this solution.  I don't like that I used a global variable.  My brain feels a little fuzzy and this is the first solution that came to mind.  I'm going to try again to create a function that is self-contained (ie. nothing stored in global memory except the final result.)

let index = 0;

function getLength(array) {
  let result = index;
  if (array[index]) {
    index++;
    return getLength(array);
  } else {
    index =0;
    return result;
  }
}

// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

// Look at the first index of an array
  // If there is an element:
    // repeat on the next element of the array (recursively call getLength)
  // If there is not an element:
    // return the index position

// Get the length of an array using recursion without accessing its length property.