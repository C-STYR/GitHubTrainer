// Create a function called `createFuntionWithInput` that accepts one input and returns a function
function createFunctionWithInput(input) {
  function returnInput() {
    return input;
  }
  return returnInput;
}

// When the created function is called, it will return the input that was passed into `createFunctionWithInput`

const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'