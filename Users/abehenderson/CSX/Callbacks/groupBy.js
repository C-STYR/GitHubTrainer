function groupBy(array, callback) {
  const obj = {};
  array.forEach(el => {
    let cache = [];
    if (!obj[callback(el)]) {
      obj[callback(el)] = [el];
    } else {
      cache = obj[callback(el)];
      cache.push(el);
      obj[callback(el)] = cache;
      cache = [];
    }
  });
  return obj;
}


const decimals = [1.3, 2.1, 2.4, 1.4, 3.7, 6.4, 3.9];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Create a function groupBy that accepts an array and a callback, and returns an object
// groupBy will iterate through the array and perform the callback on each element. 
// Each return value from the callback will be saved as a key on the object. 
// The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// Initialize an empty object
// Initialize an empty array
// Invoke the callback function on each element of the array
    // First element, array[0]:
      // If Obj does not include the result of callback on element:
        // Set a key to the evaluated result of invoking callback on element
        // Set the paired value to an array containing the element
      // If Obj includes the result of object on element:
        // push element to the array value that matches the key that is equal to the callback invoked on the element
  // Return Obj      
