/**
 * Examples for Array Iteration methods (from FCC there would be 8)
 # 01. forEach: perform a function on each element
 # 02. map: perform a function on each element + return new array
 # 03. filter: perform a function with A CONDITION on each element + return new array
 # 04. reduce: perform a function with A STATE AND ACTION on each element + return new STATE (a value, an array, an object, ...)
 # 05. every: test if all elements passed a certain condition 
 # 06. some: test if at least one element passed a certain condition
 # 07. find: return the first value passed a certain condition
 # 08. findIndex: return the index of the first value passed certain condition
 * 09. reduceRight: like reduce, but in the opposite direction
 * 10. indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 11. lastIndexOf: returns the last index at which a given element can be found in the array, or -1 if it is not present.
 * 12. includes:  determines whether an array includes a certain value among its entries; (value, fromIndex); fromIndex: -1, -100
 # 13. from: creates a new, shallow-copied Array instance from an array-like or iterable object.
 # 14. keys:
*/

// test samples
const numbers = [45, 1002, 9, 16, 25, 5, 123, 68, 20]; // sum = 1313
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
// --------------------------------------------------------------------------
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
// --------------------------------------------------------------------------
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
  return array.filter(
    (str) => str.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}
console.log("Query for 'an':", grabStringFromQuery(fruits, "an"));
console.log("Query for 'ap':", grabStringFromQuery(fruits, "ap"));
console.log("Query for 'o':", grabStringFromQuery(fruits, "o"));

// --------------------------------------------------------------------------
console.log("\n___________________ 4 ___________________");
/**
 * Callback params: reducer((previousValue, currentValue, index, array), initialValue);
 * First call: 
    + Starting index: 1
    + previousValue: the first value of the array if initialValue is no set
 * Second call: initialValue will become the previous value of the array
 * Another cool stuff: running promises in sequence 
  -> Visit this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#running_promises_in_sequence
 * Return: A new array after done action/change state
 */
console.log("--- reduce test 1: sum all numbers in an array ---");
const sumOfArray = numbers.reduce(
  (previousValue, currentValue, index, array) => {
    console.log(
      `${previousValue}\t+ ${currentValue}\t= ${previousValue + currentValue}`
    );
    return previousValue + currentValue;
  }
);
console.log("Sum of numbers array:", sumOfArray);
console.log("\n--- reduce test 2: remove duplicates from array ---");
let duplicateArray = [
  "a",
  "b",
  "a",
  "b",
  "c",
  "e",
  "e",
  "c",
  "d",
  "d",
  "d",
  "d",
];
let removeDuplicateArray = duplicateArray.reduce(
  (previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1)
      previousValue.push(currentValue);
    return previousValue;
  },
  []
);
console.log("duplicateArray:", duplicateArray);
console.log("removeDuplicate:", removeDuplicateArray);
// --------------------------------------------------------------------------
console.log("\n# Cool stuff from 4");
console.log("--- flatten an array of arrays ---");
const arrayOfArrays = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const flattenArray = arrayOfArrays.reduce((prevState, curState) =>
  prevState.concat(curState)
);
console.log("arrayOfArrays:", arrayOfArrays);
console.log("flattenArray:", flattenArray);

console.log("\n--- count frequency ---");
const valueAndFrequency = duplicateArray.reduce((prevState, curState) => {
  if (curState in prevState) prevState[curState]++;
  else prevState[curState] = 1;
  return prevState;
}, {});
console.log("Duplicate array:", duplicateArray);
console.log("Count frequency", valueAndFrequency);

console.log("\n--- group objects by key ---");
let people = [
  { name: "Jane", age: 21 },
  { name: "Andrew", age: 21 },
  { name: "Natalia", age: 23 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Andrew", age: 23 },
  { name: "Huge", age: 50 },
];
function groupBy(targetGroup, property) {
  return targetGroup.reduce((prevState, curValue) => {
    let groupKey = curValue[property];
    if (!prevState[groupKey]) {
      prevState[groupKey] = [];
    }
    prevState[groupKey].push(curValue);
    return prevState;
  }, {});
}
console.log("People:", people);
console.log("Grouped by age", groupBy(people, "age"));
console.log("Grouped by name", groupBy(people, "name"));

console.log("\n--- can replace the combination of filter() and map() ---");
console.log(
  `
  For example, you want to double only the positive integers in an array of integers.
  You might think of getting the positives using filter()and then double
  them using map() right?Reduce() can do that in one run.`
);

// --------------------------------------------------------------------------
console.log("\n___________________ 5 ___________________");
/**
 * Calling this method on an empty array will return true for any condition
 * Does not mutate the array on which it is called
 */
console.log("--- every test 1: check if all values are even ---");
console.log("Array 1:", [12, 5, 8, 130, 44]);
console.log(
  "Only even test result:",
  [12, 5, 8, 130, 44].every((x) => x % 2 == 0)
);
console.log("Array 2:", [12, 54, 18, 130, 44]);
console.log(
  "Only even test result:",
  [12, 54, 18, 130, 44].every((x) => x % 2 == 0)
);
// --------------------------------------------------------------------------
console.log("\n# Cool stuff from 5");
console.log("--- check if an array is a subset of another array ---");
function isSubset(array1, array2) {
  return array2.every((element) => array1.includes(element));
}
const containerArr = [1, 2, 3, 4, 5, 6, 7];
const subArray1 = [5, 6, 7];
const subArray2 = [50, 6, 7];
console.log("Container array:", containerArr);
console.log("subArray1:", subArray1);
console.log("Contain result 1:", isSubset(containerArr, subArray1));
console.log("subArray2:", subArray2);
console.log("Contain result 2:", isSubset(containerArr, subArray2));

// --------------------------------------------------------------------------
console.log("\n___________________ 6 ___________________");
console.log(
  "--- some test 1: check if at least 1 number is odd in an array ---"
);
const testSomeArray1 = [2, 4, 6, 8, 22, 44, 66, 1];
console.log("testSomeArray1:", testSomeArray1);
console.log(
  "There is at least 1 odd number:",
  testSomeArray1.some((num) => num % 2 != 0)
);

// --------------------------------------------------------------------------
console.log("\n___________________ 7 ___________________");
console.log("--- find test 1: get the first odd number ---");
console.log("testSomeArray1:", testSomeArray1);
console.log(
  "First odd number:",
  testSomeArray1.find((num) => num % 2 != 0)
);

console.log(
  "--- find test 2: find object by property using arrow func and destructuring ---"
);
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
console.log("Inventory:", inventory);
const objResult = inventory.find(({ name }) => name === "cherries");
console.log("Cherries:", objResult);

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n");
