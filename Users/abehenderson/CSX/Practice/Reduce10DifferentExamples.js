// Reduce: 10 Different Examples, JavaScript Fundaments.
  // By Leigh Halliday (https://youtu.be/NiLUGy1Mh4U)

    // I've been working on `CSX: Callbacks and Higher Order Functions: intersection` and I do not understand the reduce method.  Through the CSX Slack group, I found a link to this video and I really liked Leigh's approach to teaching the method reduce.

    // After watching Leigh's video, I had some improvement of my understanding of what reduce can do, but I still didn't grok it fully.  I knew I needed to play with his challenges and recreate them for myself so I could spend more time with the reduce method and get that experiential learning.

    // These challenges start very simple, but the last 3 - 4 were very hard for me to understand, so I'll just jump right in from the beginning and work up to those tougher challenges.

    // Here we go!

//-------------------------------------------------------------------------------------//
// Data

const people = [
  {id: '1', name: 'Abe Henderson', age: 41},
  {id: '2', name: 'Malachi Henderson', age: 19},
  {id: '3', name: 'Addi Henderson', age: 10},
  {id: '4', name: 'Kobe Bryant', age: 'deceased'},
];

let result;

//-------------------------------------------------------------------------------------//
// // Count

// result = people.reduce((acc, person) => acc + 1, 0);
// console.log(result); // logs: 4

//-------------------------------------------------------------------------------------//
// // Sum of Ages

// result = people.reduce((acc, person) => {
//   return (typeof person.age === 'number') ? acc + person.age : acc;
// }, 0);
// console.log(result); // logs: 70

//-------------------------------------------------------------------------------------//
// // Array Of Names (map method using reduce)

// result = people.reduce((acc, person) => [...acc, person.name], [])
// console.log(result);
// // logs: ['Abe Henderson', 'Malachi Henderson', 'Addi Henderson', 'Kobe Bryant']

//-------------------------------------------------------------------------------------//
// // Convert to ID => Person Lookup (dict)

// result = people.reduce((acc, person) => {
//   return {...acc, [person.id]: person};
// }, {});
// console.log(result); 
// // logs: {
//   // '1': { id: '1', name: 'Abe Henderson', age: 41 },
//   // '2': { id: '2', name: 'Malachi Henderson', age: 19 },
//   // '3': { id: '3', name: 'Addi Henderson', age: 10 },
//   // '4': { id: '4', name: 'Kobe Bryant', age: 'deceased' }
// //}
// console.log(result[3]); // logs: { id: '3', name: 'Addi Henderson', age: 10 }

//-------------------------------------------------------------------------------------//
// // Max Value (Age)

// result = people.reduce((acc, person) => {
//   if (typeof person.age === 'number') {
//     return (acc === null || person.age > acc) ? person.age : acc;
//   } return acc;
// }, null);

// console.log(result); // logs 41

//-------------------------------------------------------------------------------------//
// // Min Value (Age)

// result = people.reduce((acc, person) => {
//   return (typeof person.age === 'number') ?
//   (acc === null || person.age < acc) ? person.age : acc :
//   acc;
// }, null);

// console.log(result); // logs 10

//-------------------------------------------------------------------------------------//
// // Find By Name

// // My attempt to solve based on 'Convert To ID' (from above):
// result = people.reduce((acc, person) => {
//   return {...acc, [person.name] : person};
// }, {});

// console.log(result['Kobe Bryant']);

// // Leigh's solution from the youtube vid:
// result = people.reduce((acc, person) => {
//   if (acc !== null) return acc;
//   return (person.name === 'Addi Henderson') ? person : null;
// }, null);
// console.log(result); // logs { id: '3', name: 'Addi Henderson', age: 10 }

//-------------------------------------------------------------------------------------//
// // All Over 18

// For this solutions, I commented out 'Kobe Bryant' in the array `people`:

// // My Attempt:
// result = people.reduce((acc, person) => {
//   return (person.age > 18) ? acc : false; // Is the if statement needed???
// }, true);

// console.log(result); // logs: false

// // Leigh's Solution:
// result = people.reduce((acc, person) => {
//   if (!acc) return false; // What does this line do???
//   return person.age > 18; // No if statement...returns a truthy or falsey value?
// }, true);

// console.log(result); // logs: false

//-------------------------------------------------------------------------------------//
// // Any Over 18

// result = people.reduce((acc, person) => {
//   if (acc) return true; // If I comment this line out, this logs 'false'
//   return person.age > 18;
// }, false);

// console.log(result); // logs: true

// // How would you be able to declare the age (in this case 18) in the console.log instead of inside the function?

// // Simplified with ternary operator:
// result = people.reduce((acc, person) => (acc) ? true : person.age > 18, false);
// console.log(result); // logs true

// result = people.reduce((acc, person) => (acc) ? true : person.age > 45, false);
// console.log(result); // logs false

//-------------------------------------------------------------------------------------//
// Count Occurences

const orders = [
  {id: 1, status: 'pending'},
  {id: 2, status: 'pending'},
  {id: 3, status: 'cancelled'},
  {id: 4, status: 'pending'},
];

// result = orders.reduce((acc, order) => {
//   return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
// }, {});

// console.log(result); // logs: { pending: 3, cancelled: 1 }
// console.log(result['pending']); // logs: 3

// // This one is confusing.  Super cool and useful, but confusing.  I'm not that familiar with the rest/spread operator `...` and how does `(acc[order.status] || 0)` know which to choose?  Does it only choose zero if `acc[order.status]` is not truthy?  It does look like the conditional of an if statement.

//-------------------------------------------------------------------------------------//
// // Flatten (Recursive Function)

// const folders = [
//   'index.js',
//   ['flatten.js', 'map.js'],
//   ['any.js', ['all.js', 'count.js']],
// ];

// // Leigh's 1st Solution:
// function flatten(acc, item) {
//   if (Array.isArray(item)) {
//     return [...acc, ...item.reduce(flatten, [])];
//   }
//     return [...acc, item];
// }

// result = folders.reduce(flatten, []);

// console.log(result); // logs: [ 'index.js', 'flatten.js', 'map.js', 'any.js', 'all.js', 'count.js' ]

// // Leigh's 2nd Solution:
// function flatten(acc, item) {
//   if(Array.isArray(item)) {
//     return item.reduce(flatten, acc);
//   }
//     return [...acc, item];
// }

// result = folders.reduce(flatten, []);

// console.log(result); // logs: [ 'index.js', 'flatten.js', 'map.js', 'any.js', 'all.js', 'count.js' ]

// // This is magic.  I don't understand it but it seems like magic.

//-------------------------------------------------------------------------------------//
// Create Reduce Ourselves

function reduce(array, callback, initial) {
  let acc = initial;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

result = reduce([1, 2, 3], (acc, num) => acc + num, 0);

console.log(result); // logs: 6

// Review this to help solve CSX: Callbacks: intersection

//-------------------------------------------------------------------------------------//

