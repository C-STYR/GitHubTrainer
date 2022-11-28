function addByX(num) {
  return function(x) {
    return num + x;
  }
}

const addByTwo = addByX(2);

console.log(addByTwo(1));
// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(2));
// Now call addByTwo with an input of 2 and log the output


// Now we are going to create a function addByX that returns a function that will add an input by x.