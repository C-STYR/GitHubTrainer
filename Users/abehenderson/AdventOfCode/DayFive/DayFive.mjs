import { readFileSync } from "fs";

const data = readFileSync('input.txt', 'utf-8')
  .split('\n');


function formatStackOfBoxes(indexOfStack) {
  let stacksOfBoxes = {};
  const arrOfStacksAndBoxes = [];

  for (let i = indexOfStack; i >= 0; i--) {
    arrOfStacksAndBoxes.push(data[i].replaceAll('    ', '$').split(/['$'\s]/)); // Creates separate arrays of each line of the input data, with strings split at blank spaces:
  }

  const keys = arrOfStacksAndBoxes.shift().filter(el => el);
  keys.forEach(key => {
    stacksOfBoxes[key] = [];
  }) // populates the object 'stacksOfBoxes' with the elements from 'keys' as its keys, set to an empty array

  arrOfStacksAndBoxes.forEach((subArr) => { // iterates through remaining subarrays and pushes elements to the key of the matching index position if the element is not an empty string
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i]) stacksOfBoxes[i + 1].push(subArr[i]);
    }
  });
  return stacksOfBoxes;    
}

function formatDirections(indexOfDirections) {
  const arrOfDirections = [];
  const directions = data.slice(indexOfDirections); // get the box move directions

  directions.forEach(el => {
    arrOfDirections.push(el.split(/[\s]+/)); // splits string into subarray made up of elements split by whitespaces
  })
  arrOfDirections.forEach(el => { // removes non-number strings
    for (let i = 0; i < el.length; i++) {
      if (!+el[i]) el.splice(i, 1);
    }
  }); 
  return arrOfDirections;
}

/*
function moveBoxesP1(object, array) {
  let newObj = object; // make a copy of the input object to modify and return
  array.forEach((el, i) => { // iterate through the array of directions
    const numOfBoxMoves = +el[0]; // 5th index = the number of boxes to move
    const fromKey = +el[1]; // 12th index = move box from this key
    const toKey = +el[2]; // 17th index = to this key

    let counter = numOfBoxMoves; // intialize a counter equal to number of box moves
    while (counter > 0) { // while the counter is above zero, excecute the following:
      newObj[toKey].push(newObj[fromKey].pop()); // move the top box from the 'fromKey' to the 'toKey'
      counter--; // decrease counter by one, to account for the box move just executed
    }
  });
  return newObj;
}
*/

function moveBoxesP2(object, array) {
  let newObj = object; // make a copy of the input object to modify and return
  array.forEach((el, i) => { // iterate through the array of directions
    const numOfBoxMoves = +el[0]; // 5th index = the number of boxes to move
    const fromKey = +el[1]; // 12th index = move box from this key
    const toKey = +el[2]; // 17th index = to this key

    const boxesToMove = newObj[fromKey].splice(0 - numOfBoxMoves, numOfBoxMoves); // removes boxes from the stack in the form of elements in an array
    const newStack = newObj[toKey].push(...boxesToMove); // pushes only the elements of the array to the top of the new stack
    return newStack;
  });
  return newObj;
}

function createMessage(obj) { // gets the letter of the top box from each stack
  let messageForTheElves = '';
  for (const property in obj) { // iterates through the input object
    if (obj[property].length > 0) {
      const box = obj[property].slice(-1); // assigns the last element of each object value to 'box'
      messageForTheElves += box[0].charAt(1); // concats the box's letter to a string
    }
  }
  return messageForTheElves; // returns the string
}


const stacksOfBoxes = formatStackOfBoxes(8);
const directions = formatDirections(10);
//const finalStackP1 = moveBoxesP1(stacksOfBoxes, directions);
const finalStackP2 = moveBoxesP2(stacksOfBoxes, directions);

console.log(createMessage(finalStackP2));



// Line 10:
  // [
  // [ '', '1', '2', '3', '' ]
  // [ '[Z]', '[M]', '[P]' ]
  // [ '[N]', '[C]', '']
  // [ '', '[D]', '' ] 
  // ]

// Line 12:
  // {
  //     1: [],
  //     2: [],
  //     3: []
  // }

// Line 24:
  // {
  // 1: [ '[Z]', '[N]' ],
  // 2: [ '[M]', '[C]', '[D]' ],
  // 3: [ '[P]' ]
  // }

// Line 33:
  // [
  //   'move 1 from 2 to 1',
  //   'move 3 from 1 to 3',
  //   'move 2 from 2 to 1',
  //   'move 1 from 1 to 2'
  // ]

// Line 42:
  // [
  //   [ '1', '2', '1' ],
  //   [ '3', '1', '3' ],
  //   [ '2', '2', '1' ],
  //   [ '1', '1', '2' ]
  // ]



// Original Object:
// 1: [ '[Z]', '[N]'],
// 2: [ '[M]', '[C]', '[D]' ],
// 3: [ '[P]' ]

// After 1st Direction - 'move 1 from 2 to 1',:
// 1: [ '[Z]', '[N]', '[D]'],
// 2: [ '[M]', '[C]' ],
// 3: [ '[P]' ]

// After 2nd Direction - 'move 3 from 1 to 3',:
// 1: [  ],
// 2: [ '[M]', '[C]' ],
// 3: [ '[P]', '[D]', '[N]', '[Z]' ]

// After 3rd Direction - 'move 2 from 2 to 1',:
// 1: [ '[C]', '[M]' ],
// 2: [  ], 
// 3: [ '[P]', '[D]', '[N]', '[Z]' ]

// After 4th Direction - 'move 1 from 1 to 2':
// 1: [ '[C]' ],
// 2: [ '[M]' ], 
// 3: [ '[P]', '[D]', '[N]', '[Z]' ]


  // Pertaining to data from 'testInput.txt':
    // Split strings at any blank space(s) and return an array of three values per line
    // Convert line 4 to numbers
    // Create keys out of the array of number strings on line 4
    // iterate through the arrays of boxes starting with line 3, then line 2, then line 1
      // create a value of each key of an array containing the box in the index position that the key was in.  Push each string into the array of 'stacksOfBoxes[key]'

// I could create an object of data, the keys are the stack numbers and the values are arrays of strings in order from bottom (index0) to top of the stacks of boxes represented as capital letters
  // Then based on the instructions I could pop and push the boxes from one stack to another using recursion with a counter that matches the number of boxes that need to be moved