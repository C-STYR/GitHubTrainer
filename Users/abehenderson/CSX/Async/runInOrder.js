/*
CHALLENGE: runInOrder

Write a function called runInOrder that accepts as arguments in this order -

an array of functions
an array of numbers representing times in milliseconds

runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation.
*/

function runInOrder(arrFuncs, arrNums, counter = 0) {

  if (counter === arrFuncs.length - 1) return setTimeout(arrFuncs[counter], arrNums[counter]);

  setTimeout(() => {
    arrFuncs[counter]();
    runInOrder(arrFuncs, arrNums, counter + 1);
  }, arrNums[counter]);
}

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
/* logs: 
'hi' (after 300 ms) 
'bye' (600 ms after 'hi') 
'howdy' (200 ms after 'bye')
*/

/****************************************************************************************/


/* Codesmith Solution */

function runInOrder(arrFuncs, arrNums) {
  let time = 0;
  for (let i = 0; i < arrFuncs.length; i++) {
    time += arrNums[i];
    setTimeout(arrFuncs[i], time);
  }
}

// Codesmith solution is definitely simpler in its syntax.  Both solutions declare one variable. 