// Recursion Crash Course: Learn Recursion in 15 minutes with JavaScript
// with Leigh Halliday (https://youtu.be/sVJkE_Z_CDM)

// I'm starting the unit on Recursion today and this time, before jumping into the CSX challenges, I'm going to spend some time with my new buddy, Leigh.  He is going to personally walk me through six examples of using Recursion in JavaScript and I'm going to follow along here, coding right beside him as he goes.

// Let's go!

//-----------------------------------------------------------------------------------------
// Recursion Fundamentals: Counting Down

function countDown(num) {
  console.log(num);
  if (num > 1) {
    countDown(num - 1);
  }
}

//(countDown(5));

//-----------------------------------------------------------------------------------------
// Summing Array Elements

function sum(elements) {
 if (elements.length === 0) {
  return 0; // Why do we return 0 here?
 } else {
  console.log(elements); // This prints `elements` at every call of `sum`
  const [head, ...rest] = elements; // Is this the same as initializing a name to index[0] (head) and slicing the array at index[1] and giving it a name (rest) as well???
  return head + sum(rest); // This slices `elements` at index[1] at every call of `sum`
 }
}

//console.log(sum([1, 2, 3, 4, 5])); // logs: 

//-----------------------------------------------------------------------------------------
// (Me Trying to Understand `const [head, ...rest] = elements;` From The Example Above)

function whatIsThisMagic(array) {
 const [head, ...rest] = array;
 console.log(head); // logs: 5
 console.log(rest); // logs: [7, 3, 2, 9, 4, 1, 89]
 console.log(...rest); // logs: 7 3 2 9 4 1 89
}

const nums = [5, 7, 3, 2, 9, 4, 1, 89];
//console.log(whatIsThisMagic(nums))

//-----------------------------------------------------------------------------------------
// Calculating The Power: 4^4

function power(num, pow) {
  if (pow === 1) {
    return num;
  } else {
  return num *= power(num, pow - 1);  // What is happening to `num` here?  Where is it's value being stored?  Is it in the local memory of the first call to `power`???
  }
}

// console.log(power(4, 4)); // logs: 256

// power[0]: num = 4
// power[1]: num = 16
// power[3]: num = 64
// power[4]: num = 256

//-----------------------------------------------------------------------------------------
// Calculating Factorial: 5 (5*4*3*2*1) 

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num -1);
  }
}

// console.log(factorial(5)); // logs: 120

// Whiteboard this and Calculating The Power: 4^4.  I need to understand where and how `num` is being stored and modified.

//-----------------------------------------------------------------------------------------
// Fibonacci (kill me now :-) 

function fibonacci(remainder, accumulator = [0, 1]) {
  if (remainder <= 2) {
    return accumulator;
  } else {
    const [second, last] = accumulator.slice(-2);
    return fibonacci(remainder - 1, [...accumulator, second + last]);
  }
}

// console.log(fibonacci(5)); // logs: [ 0, 1, 1, 2, 3 ]

// Challenge: practice this without any hints or help

//-----------------------------------------------------------------------------------------
// Trees (of COFFEE!!!)

const root = {
  node: 'arabica',
  children: [
    { node: 'heirloom', children: [] },
    {
      node: 'bourbon',
      children: [
        { node: 'caturra', children: [] },
        { node: 'mokka', children: [] },
      ],
    },
    {
      node: 'typica',
      children: [
        { node: 'kona', children: [] },
        { node: 'java', children: [] },
      ],
    },
  ],
};

function print({ node, children }) {
  console.group(node);
  if (children.length > 0) {
    children.forEach(child => print(child)); // forEach is the breaking condition because when there is no array to iterate over, it will stop
    console.groupEnd(node); // I don't fully understand this magic 'console.groupEnd', although in the video, his output logged the nodes in a more organized format.
  } 
}

print(root); // logs:
/*
arabica
  heirloom
    bourbon
      caturra
        mokka
        typica
          kona
            java 
            */

            



//-----------------------------------------------------------------------------------------



