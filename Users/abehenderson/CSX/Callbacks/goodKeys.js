function goodKeys(obj, func) {
  const result = [];
  for (const key in obj) {
    if (func(obj[key]) === true) result.push(key);
  }
  return result;
}


const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



// Create a function goodKeys that accepts an object and a callback. 
  // The callback will return either true or false. 
// initialize empty array  
// iterate through the object and perform the callback on each value. 
  // if true, push key paired with the true value to array
// return array