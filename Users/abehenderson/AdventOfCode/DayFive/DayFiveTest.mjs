
import { readFileSync } from 'fs';

const [top, bottom] = readFileSync('abbreviatedInput.txt', 'utf-8').split('\n\n'); // splits data into two elements in an array at a blank line.  Everything above the line is 'top', everything below the line is 'bottom'.  Each line becomes its own string that looks like it is concatenated with the other strings in its element
const state = top.split('\n').slice(0, -1); // slice removes the last element of the array
const instructions = bottom.split('\n'); // removes the concatenation from line 4 and splits strings into elements at '\n\
const length = top.split('\n').slice(-1)[0].split(' ').at(-1);

//console.log([top, bottom]);
//console.log(state);
//console.log(instructions);
console.log(length);