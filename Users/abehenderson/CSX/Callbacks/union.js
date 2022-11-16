function union(arrays, callback) {
  return arrays.reduce((acc, array) => {
    array.forEach(el => {
      if (!acc.includes(el)) acc.push(el);
    });
    return acc;
  });
}


const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements.  

// If there are duplicate elements, only add it once to the new array. 

// Preserve the order of the elements starting from the first element of the first input array. 

// BONUS - Use reduce!