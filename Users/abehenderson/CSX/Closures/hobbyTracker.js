
function hobbyTracker(hobbies) {
  let cache = {};
  for (let i = 0; i < hobbies.length; i++) {
    cache[hobbies[i]] = 0;
  }
  
  return function newFunc(hobby, hours) {
    if (hobby === undefined && hours === undefined) {
      for (const keys in cache) {
        cache[keys] = 0;
      }
      return 'tracker has been reset!'
    } else {
      for (const property in cache) {
         if (hobby === property) cache[property] += hours;
      }
    }
    return cache;
  }
}


const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

//-------------------------------------------------------------------------------

// This is the first attempt and includes pseudocode:


// Create a function called `hobbyTracker` that accepts an array called `hobbies`
function hobbyTracker(hobbies) {
  // Initialize an empty object called `cache` with each key being an index from `hobbies` and the value being starting as zero
  let cache = {};
  for (let i = 0; i < hobbies.length; i++) {
    cache[hobbies[i]] = 0;
  }
  // Create a function that accepts two arguments, a string (label parameter `string`) and a value (label parameter `num`)
  function result(string, num) {
    // When invoked, this function will: 
    if (string === undefined && num === undefined) {
     for (const property in cache) {
       cache[property] = 0;
     }
      return 'tracker has been reset!'
      // If the function is invoked with no arguments:
        // reset `cache` to an empty object
        // return the string 'tracker has been reset!' 
    } else {
      for (const property in cache) {
        if (string === property) cache[property] += num;
      }
        // if `string` matches a current key in `cache`, add `num` to the current value of that key    
    }
    return cache;
    // return `cache`
  }
  return result;
}



const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

// Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. 

// hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

// When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. 

// If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

//---------------------------------------------------------------------------------------

