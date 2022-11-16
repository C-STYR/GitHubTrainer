
let counter = 0;

function repeater(char) {
  counter++;  
  if (counter >= 5) {
    counter = 0;
    return char;
  } else {
    return char + repeater(char);
  }
}

console.log(repeater('g'));
console.log(repeater('j'));

// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.