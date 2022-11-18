// Attempt #2 (CSX Solution)

function repeater(char) {
  if (char.length === 5) return char;
    return repeater(char + char[0]);
}

console.log(repeater('g')); // logs: 'ggggg'
console.log(repeater('j')); // logs: 'jjjjj'

//-------------------------------------------------------------------------------------

// Attempt #1 (I used a counter in global memory because that's exactly how CSX taught it in the video called 'Recursion: Repeater')

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

// console.log(repeater('g'));
// console.log(repeater('j'));

// Write a function that takes an input character and returns that character repeated 5 times using recursion. 
// For example, if the input is 'g', then the output should be 'ggggg'.