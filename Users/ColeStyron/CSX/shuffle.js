/*
Note: this version works fine (it passes all my own tests), but isn't passing some edge case
on CSX. Feel free to analyze, I'm not going to bother...

Another, easier way to do this using only two params is to leverage an inner recursive func like this: 

function shuffleCards(tH, bH) {
    output = []
    
    innerFunc(top, bottom) {
        // recursive logic here
    }

    return innerFunc(tH, bH)
}
*/

function shuffleCards(topHalf, bottomHalf) {
    // first recursive case: if topHalf array is empty on initial call
    if (!topHalf.length) return bottomHalf
  
    // second recursive case: if bottomHalf array is empty 
    if (!bottomHalf.length) {
      // if initial call had an empty bottomHalf array
      if (topHalf.indexOf("xxx") === -1) return topHalf
  
      // else, at end of recursion, remove pointer and return output array
      else {
        topHalf.splice(topHalf.indexOf("xxx"), 1)
        return topHalf
      }
    }
  
    // check if this is first call
    if (topHalf.indexOf("xxx") === -1) {
      topHalf.splice(1, 0, bottomHalf.shift(), "xxx")
      return shuffleCards(topHalf, bottomHalf)
    }
  
    // else, splice in first element of bottomHalf and recurse
    const i = topHalf.indexOf("xxx")
    topHalf.splice(i, 1)
    topHalf.splice(i + 1, 0, bottomHalf.shift(), "xxx")
    return shuffleCards(topHalf, bottomHalf)
  }
  
  
  
  // UNCOMMENT TO TEST YOUR WORK
  // const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
  // const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
  
  const topHalf = [1, 3, 5]
  const bottomHalf = [2, 4, 6, 8, 10]
  // Prints [1, 2, 3, 4, 5, 6, 8, 10]
  
  console.log(shuffleCards(topHalf, bottomHalf));
  //   /*-> ['Queen of Diamonds',
  //         'Jack of Hearts',
  //         'Five of Hearts',
  //         'Ten of Spades',
  //         'Ace of Spades',
  //         'Eight of Clubs',
  //       ]
  //   */