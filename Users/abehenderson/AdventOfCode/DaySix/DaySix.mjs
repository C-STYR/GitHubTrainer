import { readFileSync } from "fs";

const data = readFileSync('testInput.txt', 'utf-8')
  .trim();


function findMarker(string, length, counter = 0, escape = false) {
  // slice out a segment to review for duplicates
  const segment = string.slice(counter, counter + length).split(''); 

  segment.forEach((el, i) => {
    // filter any occurances in the segment of the current element to check for duplicate
    const duplicates = segment.filter(char => char === el); 
    // if duplicate, change the value of 'escape' to 'true'
    if (duplicates.length > 1) {
      escape = true;
    }
  });    
  // if 'escape' is false a duplicate was not found: escape the recursive function and return the value of counter plus the input length 
  if (escape === false) {
    return counter + length;
  } else {
  // if 'escape' is true, recursively call 'findMarker' and increment 'counter'  
    return findMarker(string, length, counter + 1);
  }
}

console.log(findMarker(data, 14));

// const string = 'mjxm';
// const array = string.split('');
// console.log(array);
// const result = array.filter(char => char === 'm');
// console.log(result);

// Use reduce!
  // Initialize a counter, set to 0
  // Create a moveable, four character segment -- Try rest operator? Or slice with recursion?
    // iterate through the segment -- NEED A NEW WAY TO TEST -- .includes???
      // does 0 === 1 || 2 || 3 ?
      // does 1 === 0 || 2 || 3 ?
      // does 2 === 0 || 1 || 3 ?
      // does 3 === 0 || 1 || 2 ?
        // if no: 
          // iterate segment one character
          // increment counter
        // if yes:
          // return counter  


    // if (s[0] === s[1] || s[0] === s[2] || s[0] === s[3]) {
    //   return findMarker(string, markerFound, counter + 1);
    // } else if (s[1] === s[0] || s[1] === s[2] || s[1] === s[3]) {
    //   return findMarker(string, markerFound, counter + 1);
    // } else if (s[2] === s[0] || s[2] === s[1] || s[2] === s[3]) {
    //   return findMarker(string, markerFound, counter + 1);
    // } else if (s[3] === s[0] || s[3] === s[1] || s[3] === s[2]) {
    //   return findMarker(string, markerFound, counter + 1);
    // } else {
    //   markerFound = true;
    //   return counter + 4;
    // }          