// Attempt #3
  // This should be a faster solution due to using the spread operator (or is it the rest operator?).  There is no CSX solution for this one, but I checked CSX Slack for ideas and found a solution similar to this:

function shuffleCards (topArr, botArr, deck = []) {
  if (!topArr[0]) {
    deck.push(...botArr);
    return deck;
  } else if (!botArr[0]) {
    deck.push(...topArr);
    return deck;
  } else {
    deck.push(topArr[0], botArr[0]);
    return shuffleCards(topArr.slice(1), botArr.slice(1), deck);
  }
}


const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));

//------------------------------------------------------------------------------------------
// Attempt #2
  // Ok so CSX accepted this solution.  Instead of using `.shift` which permanently alters the original array, `.slice` returns a shallow copy, so it does not actually alter the original array.

function shuffleCards(topArr, botArr, deck = []) {
  if (topArr[0] && botArr[0]) {
    deck.push(topArr[0], botArr[0]);
  return shuffleCards(topArr.slice(1), botArr.slice(1), deck);
  } else if (topArr[0]) {
    deck.push(topArr[0]);
    return shuffleCards(topArr.slice(1), botArr.slice(1), deck);
  } else if (botArr[0]) {
    deck.push(botArr[0]);
    return shuffleCards(topArr.slice(1), botArr.slice(1), deck);    
  } else {
    return deck;
  }
}

// const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
// const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
// console.log(shuffleCards(topHalf, bottomHalf));

//------------------------------------------------------------------------------------------
// Attempt #1
  // CSX does not like this solution :-/
  // From what I can tell, this shuffles the cards according to the instructions, prioritizing 'topHalf' cards first, then 'bottomHalf' cards.  It also takes into consideration any size of the half decks.
  // CSX says:
    // "shuffleCards should interleave elements in the correct order"
      // "expected [] to deeply equal [ Array(4) ]"
        // and
    // "shuffleCards should append remaining elements to end of the array"  
      // "expected [ Array(4) ] to deeply equal [ Array(6) ]"  

function shuffleCards(topHalf, bottomHalf, shuffled = []) {
  if (topHalf[0] !== undefined && bottomHalf[0] !== undefined) {
    shuffled.push(topHalf.shift(), bottomHalf.shift());
    return shuffleCards(topHalf, bottomHalf, shuffled);
  } else if (topHalf[0]) {
    shuffled.push(topHalf.shift());
    return shuffleCards(topHalf, bottomHalf, shuffled);
  } else if (bottomHalf[0]) {
    shuffled.push(bottomHalf.shift());
    return shuffleCards(topHalf, bottomHalf, shuffled);
  } else {
    return shuffled;
  }
}

// // UNCOMMENT TO TEST YOUR WORK
// const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
// const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
// console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */

// The first thing I need to figure out is how to alternate between 'topHalf' and 'bottomHalf'
      // or what if I don't have to alternate...what if each call of 'shuffleCards' pushes an element from each array.



// You are creating a card game application with your friend.

// She already wrote a function that divides the deck of cards into top and bottom halves, but needs help writing a function that shuffles the two halves together again.

// Challenge:
// Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, and shuffles them together. The function will return a single array containing the elements from both input arrays interleaved, like so:

  // the first element should be the first element of the first input array,

  // the second element should be the first element of the second input array,

  // the third element should be the second element of the first input array,

  // the fourth element should be the second element of the second array,

  // and so on.

// The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

// This problem can be solved in many ways, but try to solve it with recursion! 