// Attempt #1

function censor() {
  let cache = {};
  return function(string1, string2) {
    if (string2 !== undefined) {
      cache[string1] = string2;
    } else {
      let newString = string1;
      let arrKeys = Object.keys(cache);
      let arrValues = Object.values(cache);
      for (let i = 0; i < arrKeys.length; i++) {
        newString = newString.replace(arrKeys[i], arrValues[i]);
      }
    return newString;
    }
  }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'


// Create a function `censor` that accepts no arguments

// `censor` will return a function reffered to as newFunc (but not named in the code)

// newFunc will accept two strings, `string1` and `string2`

  // If two strings are given, the arguments matched with `string1` and with `string2` are saved for future use (We need a backpack!  Use object)

  // If one string is passed into newFunc, newFunc will return the same string EXCEPT that all instances of `string1` will be replaced with `string2` of the same saved pair (lookup string.replace???)

// Create a function censor that accepts no arguments. 
// censor will return a function that will accept either two strings, or one string. 
  // When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
  // When one string is given, the returned function will return the same string...
    // except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair)

//--------------------------------------------------------------------------------------

// Attempt #2 (CSX Solution)

function censor() {
  let cache = {};
  return function(string1, string2) {
    if (string2) { // My use of `if (string2 !== undefined)` was ridiculously redundant.
      cache[string1] = string2;
      return; // This is a nice touch that I didn't use in Attempt #1
    } 
    Object.keys(cache).forEach(key => {
      string1 = string1.replace(key, cache[key]);
    }) // So this is obviously much cleaner than my Attempt #1, however I am proud that I solved it.  I didn't know that I combine `Object.keys` with `.forEach` on the same line like that.  Also, I didn't know that I could utilize `Object.keys` without having to use `Object.values` as well since I needed the key/value pair.  This is accomplished using `forEach`.  It was much clunkier to use a `for...in` loop like I did in Attempt #1.
    return string1; // Also, for some reason I didn't realize that I could just use `string1` to modify and return.  I created a new variable to store the modified string which was clearly redundant.
  }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

// Yeah, so overall, this solution was much cleaner and more succinct that my Attempt #1 (as is often the case), but I'm still happy with myself for solving this challenge in Attempt #1.  I'll get better over time if I don't give up and keep practicing!