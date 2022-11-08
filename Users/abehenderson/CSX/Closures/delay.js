// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

function delay(callback, milliseconds) {
  return function() { setTimeout(callback, milliseconds) }
}


let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// It took me so long to figure this challenge out.  I think I'm barely grasping it right now.  Its way more simple than I thought it must be, but I was very confused by lines 11 and 12, since `delayedfunc` had already been called on line 10.  I couldn't quite figure out how it wasn't some kind of async, which of course, now I understand that `setTimeout` is inherintely async since its result is not output immediately.

// I didn't understand this solution at all until I looked it up on the CSX slack page.  I spent way too much time on it.  In the future I'm going to set a 60 minute timer when I start a new challenge and if I do not have a solution, or on the verge of solving the challenge after 60 minutes, I'm going to call a timeout and look up the solution.

// In my experience so far, most problems that I don't understand after 60 minutes, I don't understand at all and I need to find a solution and sometimes an explanation in order to understand the problem in the first place.  I think I've been wasting too much time on difficult problems without learning anything, except maybe when is the right time to look for help.