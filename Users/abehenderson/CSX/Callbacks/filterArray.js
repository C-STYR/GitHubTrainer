// Higher Order Function
function filterArray(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      if (callback(array[i])) newArray.push(array[i]);
    }
    return newArray;
  }
  const arrOfNums = [1, 2, 3, 4, 5];

  // Callback function 1
  function func1(num) {
    if (num % 2 === 0) {
      return num;
        // Returns num only if even, or evenly divisible by 2
    }
  }
  
  // Callback function 2
  function func2(num) {
      if (num % 2 !== 0) {
      return num;
        // Returns num only if odd, or not evenly divisible by 2
    }
  }
  
  console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
  console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]