/**
 * Write a JavaScript program to converts a specified number to an array of digits.
*/

// test number
const testNum = 20102002;

// test printing
console.log([...`${testNum}`]);
console.log(...`${testNum}`);
const toArray = [...`${testNum}`];

// try to using map to act on each item
let toDigitArray = toArray.map(digit => parseInt(digit));
console.log(toDigitArray);

