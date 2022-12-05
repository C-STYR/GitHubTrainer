import { readFileSync } from "fs";
//-------------------------------------------------------------------------------------
// Day Two: Challenge Two -- Can be optimized!

const data = readFileSync('input.txt', 'utf-8')
  .split('\n');

function scoreRPS(arr, cb) {
  let score = 0;
  arr.forEach(el => {
    score += cb(el);
  })
  return score;
}

const getScore = function(str) {
  let cache = 0;
  if (str[2] === 'Y') {
    cache = 3;
  } else if (str[2] === 'Z') {
    cache = 6;
  }
  if (str === 'A Y' || str === 'B X' || str === 'C Z') {
    cache += 1;
  } else if (str === 'A Z' || str === 'B Y' || str === 'C X') {
    cache += 2;
  } else {
    cache += 3;
  }
  return cache;
  /* It might be faster to check the 0th index first, then branch into if statements based on the three possible values for the 2nd index, returning 'cache' within the branched if statement block and exiting the callback function */
}

console.log(scoreRPS(data, getScore));

/*
A Y: X (+1) = 4
B X: X (+1) = 1
C Z: X (+1) = 7

Total: 12
*/

/*
X = Lose (+0) [A Z, B X, C Y]
Y = Draw (+3) [A X, B Y, C Z]
Z = Win (+6) [A Y, B Z, C X]
*/

// Callback function:
  // The left value of the string is the choice of my opponent
  // The right value of the string is the outcome; lose, draw, or win
    // I need to figure out what my choice would be based on my opponents choice and the outcome
      // I don't need to know the string, just the point value of my choice
      // I can manually build a key again, just to make it simple
      // KEY:
        // if (A Y || B X || C Z) = 1 (X)
        // if (A Z || B Y || C X) = 2 (Y)
        // if (A X || B Z || C Y) = 3 (Z)



//-------------------------------------------------------------------------------------
// Day Two: Challenge One


const data = readFileSync('input.txt', 'utf-8')
  .split('\n');
  //console.log(data);


function scoreRPS(arr, cb) {
  let score = 0;
  arr.forEach(el => {
    score += cb(el);
  })
  return score;
} // I could use 'reduce' for this and create it all within one function

const getScore = function(str){
  let cache = 0;
  if (str[2] === 'X') {
    cache = 1;
  } else if (str[2] === 'Y') {
    cache = 2;
  } else {
    cache = 3; // What would be a more efficient way of this?
  }
  //console.log(cache);
  if (str === 'A Y' || str === 'B Z' || str === 'C X') cache += 6;
  if (str === 'A X' || str === 'B Y' || str === 'C Z') cache += 3;
  return cache;
}

console.log(scoreRPS(data, getScore));


// Start with an array of strings:
  // Create a function that accepts an array and a callback function
    // initialize a cache called 'score' and set to 0
    // Iterate over the array using '.forEach'
      // use a callback function 'cb' that compares the string against a key and returns a number value... or can this func add the number value to 'score' without returning anything?
        // 'cb' will make two comparisons, resulting in two number values and add them both in order to return a final number value
          // One comparison will be giving a number value to the 2nd index position of the element (X = 1, Y = 2, Z = 3)
          // Two comparison will compare the string to a key and return a 'wLD' score: 
            // w = A Y, B Z, C X
            // L = A Z, B X, C Y
            // D = A X, B Y, C Z
          // 'cb' will return the result of summing the results of comparison One and comparison Two  
      // return 'score'

// I have a set of string pairs separated by a space
  // left string is the opponents choice
  // right string is my choice

// Each string-pair will result in a total score, or number value
  // each string 'rPS' (rockPaperScissors) of the string-pair represents a number value: 1, 2, or 3
  // the result of the comparison of the two strings 'wLD' (winLoseDraw) represents a number value: 0, 3, or 6
  // my score, or number value, is the result of adding the right hand 'rPS' plus the result 'wld'
  // I do not need to calculate the left hand 'rPS'
  // String Value Key for right-hand 'rPS':
    // X = 1, Y = 2, Z = 3
  // Value Key for 'wLD':
    // w = 6, L = 0, D = 3;
  // 'wLD' Key for string-pairs (based on right side perspective):
    // w = A Y, B Z, C X
    // L = A Z, B X, C Y
    // D = A X, B Y, C Z
  
    // How do I want the input data organized?  Array of strings [A Y, B X]?  Array of arrays [[A, Y], [B, X]]? And object {A: Y, B: X}?  Flat array [A, Y, B, X]?



