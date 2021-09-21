/**
 * Write a JavaScript program to get every nth element in a given array.
 */

// Andrew way
function printEveryNthElement(array, nth) {
  for (let i = nth - 1; i < array.length; i += nth) console.log(array[i]);
}
printEveryNthElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3);

// ES6
const everyNthElement = (array, nth) =>
  array.filter((element, index) => index % nth === nth - 1);
console.log(
  everyNthElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3)
);
