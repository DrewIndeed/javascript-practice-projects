/**
 *  Write a JavaScript program to get a random number / integer in the specified range.
*/

const randomizeFromTo = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomizeFromTo(1, 5));
console.log(randomizeFromTo(-5, 5));