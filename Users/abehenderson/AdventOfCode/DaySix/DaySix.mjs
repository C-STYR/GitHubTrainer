import { readFileSync } from "fs";

const data = readFileSync('testInput.txt', 'utf-8')
  .trim();



function findMarker(string, markerFound = false, counter = 0) {

  if (markerFound === false) {
    const s = string.slice(counter, counter + 4)

    if (s[0] === s[1] || s[0] === s[2] || s[0] === s[3]) {
      return findMarker(string, markerFound, counter + 1);
    } else if (s[1] === s[0] || s[1] === s[2] || s[1] === s[3]) {
      return findMarker(string, markerFound, counter + 1);
    } else if (s[2] === s[0] || s[2] === s[1] || s[2] === s[3]) {
      return findMarker(string, markerFound, counter + 1);
    } else if (s[3] === s[0] || s[3] === s[1] || s[3] === s[2]) {
      return findMarker(string, markerFound, counter + 1);
    } else {
      markerFound = true;
      return counter + 4;
    }
  }
}

console.log(findMarker(data));

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