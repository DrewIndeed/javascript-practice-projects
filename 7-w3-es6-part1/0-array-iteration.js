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
