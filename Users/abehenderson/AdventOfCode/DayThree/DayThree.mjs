import { readFileSync } from "fs";

//-------------------------------------------------------------------------------------
// Day Three: Part 2

// const testData = [
// 'vJrwpWtwJgWrhcsFMMfFFhFp',
// 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
// 'PmmdzqPrVvPwwTWBwg',
// 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
// 'ttgJtRGJQctTZtZT',
// 'CrZsJsPPZsGzwwsLwLmpwMDw'
// ];

const data = readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');

//console.log(data);

function groupBadges() { // creates a new nested array of elf rucksack groups
  const groupedBadges = []; // initializes a new parent array
  data.reduce((acc, cv) => { // iterates through the data and organizes into subarrays
    if (acc.length < 3) { // if subarray 'acc' is less that three elements
      acc.push(cv); // push current value into subarray 'acc'
      if (acc.length === 3) { // if 'acc' contains three elements
        groupedBadges.push(acc); // push 'acc' to 'groupBadges'
        return acc = []; // reset 'acc' to an empty array
      } else { // if 'acc' contains less than three elements
        return acc; // return subarray 'acc'
      }
    }  
  }, []);
  return groupedBadges; // return nested array
}

//console.log(groupBadges());


function findBadge(arr) {
  const badge = arr.map(subArr => {
    for (let letter of subArr[0]) {
      if (subArr[1].includes(letter) && subArr[2].includes(letter)) {
        return letter;
      }
    }  
  });
  return badge;
}

//console.log(getArrayOfBadges);

function convertBadgesToScore(arrayOfBadges) {
  let score = 0;
  arrayOfBadges.forEach(badge => {
    for (const key in scoreKey) {
      if (badge === key.toUpperCase()) {
        score += scoreKey[key] + 26;
      } else if (badge === key) {
        score += scoreKey[key];
      }
    }

  })
  return score;
}

const scoreKey = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};

const getArrayOfBadges = findBadge(groupBadges());
console.log(convertBadgesToScore(getArrayOfBadges));


// every three elements is a set of three elves' rucksacks of items - need to separate the array elements into groups of three somehow - 'groupBadges'
// find the common item in all three rucksacks and return in an array - 'findBadges'
// evaluate the item for its numeric value, as in part one - use 'scoreKey'
// return the sum of all values 
// My brain hurts!!!


//-------------------------------------------------------------------------------------
// Day Three: Part 1

/* 
const data = readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n');
  */
 
// vJrwpWtwJgWrhcsFMMfFFhFp

function findSumOfPriorities(arr, cb) {
  let score = 0; // initialize an accumulator
  arr.forEach(el => { // iterate through the input array
    const value = cb(el); // assign a name to the duplicate value returned from the cb func
    for (const key in scoreKey) { // iterate through the object 'scoreKey'
      if (key === value) score += scoreKey[key]; // if match, add value to accumulator
      if (value === key.toUpperCase()) score += scoreKey[key] + 26; // check for a capitalized letter, if match add value plus 26 to accumulator
    }
  })
  return score; // return accumulator
}

function findDuplicate(str) { // Callback function that returns the duplicate value
  for (let i = 0; i < str.length / 2; i++) { // iterates thu first half of string
    for (let j = str.length / 2; j < str.length; j++) { // iterates 2nd half
      if (str[i] === str[j]) return str[i]; // returns value found in both halves
    }
  }
}

// const scoreKey = {
//   'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
// }; // there is probably a much better way to do this!

//console.log(findSumOfPriorities(data, findDuplicate)); // prints: 8085

// iterate through the array (forEach or Map?)
  // initialize an accumulator
  // identify the numeric value of the duplicate element (google this) - lets just build an array
  // add the numeric value to an accumulator
  // return the accumulator after all elements have been iterated through

// Create a callback func:
  // Split the element in half (make a copy or use two for...in loops???)
  // compare each element in one half with each element in the second half (if copy - use '.includes', if for...in loops, for 0th index of the first half, iterate through the entire second half, return the duplicate element)
  // return the duplicate element  