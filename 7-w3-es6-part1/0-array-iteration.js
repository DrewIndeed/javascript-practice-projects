/**
 * Examples for Array Iteration methods (from FCC there would be 8)
 # 01. forEach: perform a function once for each element
 # 02. map: preform a function once for each element and return a new adjusted array
 # 03. filter 
 # 04. reduce
 # 05. every
 # 06. some
 # 07. find
 # 08. findIndex
 * 09. reduceRight
 * 10. indexOf
 * 11. lastIndexOf
 * 12. includes
 * 13. from
 * 14. keys
*/

// test samples
const numbers = [45, 1002, 9, 16, 25, 5, 123, 68, 20];
const names = ["Andrew", "John", "Phiphi", "Kevin", "Nathan", "Ericsson"];
const obj = {
  Andrew: 45,
  John: 1002,
  Phiphi: 123,
  Nathan: 68,
};

// --------------------------------------------------------------------------
console.log("___________________ 1 ___________________");
/**
 * Expects a [synchronous function] -> does not wait for promises
 * Cannot terminate by any way but to throw an exception
 * Return: undefined
 * Usage: to simplify a regular for loop (using iterator)
 */

console.log("--- forEach test 1: iterate through array ---");
numbers.forEach((value, index, array) =>
  console.log(`Index: ${index}\tValue: ${value}`)
);
console.log("\n--- forEach test 2: iterate through object ---");
Object.keys(obj).forEach((key, index) =>
  console.log(`Key: ${key}\tIndex: ${index}\tValue: ${obj[key]}`)
);

console.log("\n# Cool stuff from 1");
console.log("--- Flatten an array ---");
const nestedArray = [1, [2, 1002, 999], 3, [4, 5, [6, 7, [9, 8, 5]], 8, 9]];
console.log("nestedArray: ", nestedArray);
console.log(`flattenArray: [ ${nestedArray.flat(Infinity).toString()} ]`);

// --------------------------------------------------------------------------
console.log("\n___________________ 2 ___________________");
/**
 * [Creates a new array] by performing a function on each element
 * Does not work for array elements without values (undefined is a value too)
 * Does not change the original array
 * Return: A new array with each element being the result of the callback function
 * Not Usage: 
    + When you not using the return array
    + When you not returning a value from the callback
 */

console.log("--- map test 1: double each value in array ---");
console.log(`Numbers: [ ${numbers.toString()} ]`);
// a single-statement -> can omit the return keyword
const numbers2 = numbers.map((value, index, array) => value * 2);
console.log(`Numbers2: [ ${numbers2.toString()} ]`);

console.log("\n# Cool stuff from 2");
console.log(
  "--- an array of number strings into an array of number values ---"
);
const numStrArray = ["1", "2", "3", "1.1", "2.2e2", "3e300"];
console.log("numStrArray:", numStrArray);
console.log("numValueArray (original parseInt()):", numStrArray.map(parseInt));
/**
 * Explainations found at: 
    + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
*/
const parseIntCustom = (element) => parseInt(element, 10);
console.log(
  "numValueArray (custom parseInt()):",
  numStrArray.map(parseIntCustom)
);
console.log("numValueArray (original Number()):", numStrArray.map(Number));

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n");