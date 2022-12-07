import { readFileSync } from "fs";
//--------------------------------------------------------------------------------------
// Day Four: Part Two

const data = readFileSync('testInput.txt', 'utf-8')
  .trim()
  .split('\n')
  //console.log(data);

function formatData() {
  const newArr = data.map(el => {
    return el.split(/[,-]+/).map(Number); 
  }); // splits strings into array elements at ',' and '-' and converts from 
  // strings to numbers: ['2-4,6-8'] becomes [2, 4, 6, 8]
  return newArr;
} 

function checkForAnyOverlap(array) {
  let counter = 0;
  array.forEach(arr => {
    if ((arr[0] >= arr[2] && arr[1] <= arr[3]) || (arr[0] <= arr[2] && arr[1] >= arr[3])) { // if any elves overlap completely
      counter++; // increment counter plus one
    } else if ((arr[0] >= arr[2] && arr[0] <= arr[3]) || (arr[1] >= arr[2] && arr[1] <= arr[3])) { // if any elves overlap at all
      counter++; // increment counter plus one
    }
  });  
  return counter;
}

//console.log(newData());
console.log(checkForAnyOverlap(formatData()));

/*
94-97,31-95 - Some Overlap (0>=2 && 0<3)
7-8,11-95 - No
25-96,3-96 - Yes
6-17,5-16 - Yes
35-48,18-49 - Yes
5-6,5-98 - Yes
77-78,63-79 - Yes
56-56,28-56 - Yes
84-85,22-85 - Yes
35-62,34-74 - Some Overlap (0>=2 && 0<3)
9-89,88-88 - Yes
20-47,11-20 - Some Overlap (0>=2 && 0<=3)
3-50,1-4 - Some Overlap (0>=2 && 0<=3)
49-60,52-61 - Some Overlap (1>=2 && 1<=3)
7-55,54-54 - Yes
28-80,81-99 - No
8-55,35-55 - Yes
5-24,5-70 - Yes
58-81,59-98 - Some Overlap
3-3,4-4 - No
*/ // 9 of 10 overlap, 17 of 20 overlap

//--------------------------------------------------------------------------------------
// Day Four: Part One

const data = readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\n')
  //console.log(data);

//const data = ['2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8'];


function newData() {
  const newArr = data.map(el => {
    return el.split(/[,-]+/).map(Number);
  });
  return newArr;
} 

function checkForOverlap(array) {
  let counter = 0;
  array.forEach(arr => {
    if (arr[0] >= arr[2] && arr[1] <= arr[3]) {
      counter++;
    } else if (arr[0] <= arr[2] && arr[1] >= arr[3]) {
      counter++;
    }  
  });  
  return counter;
}

//console.log(newData());
//console.log(checkForOverlap(newData()));
