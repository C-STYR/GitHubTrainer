/*
CHALLENGE: limitedInterval

Write a function called limitedInterval that accepts as arguments in this order -

callback function
wait time in milliseconds
limit time in milliseconds.
limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.
*/

function limitedInterval(cb, waitTime, limitTime) {
  const setIntervalID = setInterval(cb, waitTime);
  setTimeout(() => {
    clearInterval(setIntervalID);
  }, limitTime);
}

limitedInterval(() => console.log('repeating'), 1000, 5500); 

/* prints (at waitTime interval):
repeating
repeating
repeating
repeating
repeating
*/