
import { readFileSync } from 'fs';

//------------------------------------------------------------------------------------
// Day One Problem Two

const calories = readFileSync('input.txt', 'utf-8')
  .trim() // removes any whitespace at the beginning and end of input data
  .split('\n\n'); // splits input data between spaces onto separate lines

  function findTopThreeElves() {
    const formatCalories = calories.map(el => { // returns a new array
      const elf = el.split('\n').map(Number); // separates elements, converts strings to numbers
      //console.log(elf);
      const elfTotals = elf.reduce((acc, cv) => acc + cv, 0); // reduces each array to its sum
      return elfTotals;
    });
    const sortedCalories = formatCalories.sort((a, b) => b - a); // sorts elements of the array 'sortedCalories' in order of largest to smallest number
    const topThreeElves = sortedCalories[0] + sortedCalories[1] + sortedCalories[2]; // adds the largest three elements together
    console.log(topThreeElves); // prints: 204837 (from 'input.txt')
  }

findTopThreeElves();

// This solution could definitely be optimized.


//-----------------------------------------------------------------------------------
// Solution from Youtube vid for problem 1


const calories = readFileSync('testInput.txt', 'utf-8')
  .trim()
  .split('\n\n')

  //console.log(calories);

 function divideCalories() {
    const eachElf = calories.map((elf) => {
      const elfCals = elf.split('\n').map(Number); // '.map(Number)' converts str to num
      return elfCals.reduce((acc, cv) => acc + cv, 0);
    })
    console.log(Math.max(...eachElf)); // good to learn about 'Math.max' and the use of the spread operator
  }
  
divideCalories()


//-----------------------------------------------------------------------------------
// Day One Problem One: My 1st Attempt


const arrayOfCals = data.map((str) => {
  const parsed = parseInt(str);
  if (isNaN(parsed)) {return 0;}
  return parsed;
});

function totalCalories(array) {
  let cache = 0;
  array.reduce((acc, cv) => {
    if (cv === 0 && acc > cache) {
      cache = acc;
      return cv;
    } else if (cv === 0) {
      return cv;
    } else {
      return acc + cv;
    }
  });
  return cache;
}

console.log(totalCalories(arrayOfCals));   
