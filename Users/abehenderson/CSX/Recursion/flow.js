
// Attempt #3 (Cole's Solution)

function flow(input, funcArray) {
  if (funcArray.length) {
    return flow(funcArray.shift()(input), funcArray)
  }
  return input;
}


// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7


//------------------------------------------------------------------------------------------

// Attempt #2 (CSX Solution)

function flow(input, funcArray) {
  if (funcArray.length === 0) return input;

  const output = funcArray[0](input);

  flow(output, funcArray.slice(1))
  
}


// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7

//------------------------------------------------------------------------------------------
// Attempt #1

function flow(input, funcArray) {
  if (funcArray[0]) {
    let callback = funcArray.shift();
    return flow(callback(input), funcArray);
  }
    return input;
}


// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7


// Use an if statement as a breaking condition: 
  // if 'funcArray' at index zero isn't undefined:
    // return the result of invoking 'funcArray' at index zero (while slicing index zero from the array) on 'input'
  // if 'funcArray' at index zero is undefined:
    // return 'input'  

// Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.