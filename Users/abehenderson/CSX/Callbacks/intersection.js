function intersection(arrays) {
  
  let result = arrays.reduce((acc, array) => {

    const cache = [];

    for (let i = 0; i < acc.length; i++) {
      if (array.includes(acc[i])) cache.push(acc[i]);
    }
    return cache;
  });
  return result;
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// *** Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce! ***

// Create a function `intersection` that accepts an array of arrays
// Each element of the input array is an array (nested arrays)
  // Look at the 0th element of array1
    // Does array2 include it? YES -> Does array2 inlude it? YES -> push to an empty array cache
      // If NO -> Look at the next element of array1 and repeat the above step for all elements in array1
    // Return array cache.

// For figuring this out, fuck the CSX structure and just write the function however makes sense to me.  Once I get it working, restructure to fit what CSX wants.

const arrays = [
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20]
];


let result = arrays.reduce((acc, array) => {
  let cache = [];

  for (let i = 0; i < acc.length; i++) {
    if (array.includes(acc[i])) cache.push(acc[i]);
  }
  return cache;
});

console.log(result);

// Use a boolean expression.  Maybe `acc` is true or false?  It starts true, as long as it stays true, that element will be pushed to a cache.  Anytime it changes to false, nothing happens.

