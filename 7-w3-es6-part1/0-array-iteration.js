/**
 * Examples for Array Iteration methods (from FCC there would be 8)
 # 01. forEach: perform a function on each element
 # 02. map: perform a function on each element + return new array
 # 03. filter: perform a function with A CONDITION on each element + return new array
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

// --------------------------------------------------------------------------
console.log("\n___________________ 3 ___________________");
/**
 * Expects a [synchronous function] -> does not wait for promises
 * Cannot terminate by any way but to throw an exception
 * Return: A new array with the elements that pass the condition. If no elements pass the test, an empty array will be returned.
 * Usage: get new array after applying a condition
 */
function optimizedPrimeCheck(n) {
  if (n <= 3) return n > 1;
  if (n % 2 == 0 || n % 3 == 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
    i += 6;
  }
  return true;
}
console.log("--- filter test 1: get strings with length of 6 ---");
const strLenOf6 = names.filter((name) => name.length == 6);
console.log("Names with length of 6:", strLenOf6);
console.log("\n--- filter test 2: get primes only from array ---");
const testPrimeArray = [
  -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
];
const onlyPrime = testPrimeArray.filter(optimizedPrimeCheck);
console.log("onlyPrime:", onlyPrime);

console.log("\n# Cool stuff from 3");
console.log("--- filter invalid entries from JSON ---");
let testObjectsArray = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];
let invalidCount = 0;
function getValidCountInvalid(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidCount++;
  return false;
}
let filteredObjectsArray = testObjectsArray.filter(getValidCountInvalid);
console.log("Original entries:", testObjectsArray);
console.log("Valid objects:", filteredObjectsArray);
console.log("Count invalid:", invalidCount);
console.log("\n--- search a string in a strings array from a query string ---");
let fruits = ["apple", "banana", "grapes", "mango", "orange"];
console.log("All fruits:", fruits);
function grabStringFromQuery(array, query) {
  return array.filter((str) => str.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}
console.log("Query for 'an':", grabStringFromQuery(fruits, "an"));
console.log("Query for 'ap':", grabStringFromQuery(fruits, "ap"));
console.log("Query for 'o':",grabStringFromQuery(fruits, "o"));

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n");
