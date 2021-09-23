/**
 * Write a JavaScript program to compare two objects to determine
 * if the first one contains equivalent property values to the second one.
 */

const object1 = { name: "Andrew", age: 20, school: "RMIT" };
const object2 = { age: 20, school: "RMIT" };
const objectsAreEqual = (obj1, obj2) =>
  Object.keys(obj2).every(
    (key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]
  );
console.log(
  "Object 1 contains object 2 is:",
  objectsAreEqual(object1, object2)
);
console.log("----- 1 -----\n");

/**
 * Write a JavaScript program to converts a specified number to an array of digits.
 */

const testNum1 = 2011199722022001; // 16 digits
const testNum2 = 124551435;
const toDigitsArray = (number) => [...`${number}`].map(Number);
console.log("Result 1:", toDigitsArray(testNum1));
console.log("Result 2:", toDigitsArray(testNum2));
console.log("----- 2 -----\n");

/**
 * Write a JavaScript program to filter out
 * the specified values from a specified array.
 * Return the original array without the filtered values.
 */

const testArray1 = toDigitsArray(1234155199345);
console.log("Test array 1:", testArray1);
const filterElements = (array, ...args) =>
  array.filter((item) => !args.includes(item));
console.log("Excluded params:", filterElements(testArray1, 1, 2, 3));
console.log("----- 3 -----\n");

/**
 * Write a JavaScript program to combine the numbers
 * of a given array into an array containing
 * all combinations.
 */

const testArray2 = [1, 2, 3, 4];
let resultArray1 = [[]];
for (const item of testArray2) {
  let temp = [];
  for (const finalItem of resultArray1) {
    temp.push(finalItem.concat([item]));
  }
  resultArray1 = [...resultArray1, ...temp];
}
console.log("Result:");
console.log(resultArray1);
console.log("----- 4 -----\n");

/**
 * Write a JavaScript program to extract out
 * the values at the specified indexes from a specified array.
 */

const getItemsFromIndexes = (array, ...indexes) =>
  array.filter((_, index) => indexes.includes(index));
console.log("Result:", getItemsFromIndexes([1, 2, 3, 4, 5, 6], 0, 2));
console.log("----- 5 -----\n");

/**
 * Write a JavaScript program to replace the
 * names of multiple object keys with the values provided.
 */

const object3 = { name: "Anderson", age: 28, school: "UCLA" };
const keysObject = { name: "shorten", age: "childrenNum" };
// raw
const changeKeysByObject1 = (originalObj, keysObj) => {
  let tempObject = {};
  for (const k in originalObj) {
    // '|| k to handle the ones which are not in keysObject'
    tempObject[keysObj[k] || k] = originalObj[k];
  }
  return tempObject;
};
// es6 version
const changeKeysByObject2 = (originalObj, keysObj) =>
  Object.keys(originalObj).reduce(
    (rs, k) => ({ ...rs, ...{ [keysObj[k] || k]: originalObj[k] } }),
    {}
  );

console.log("1st way:", changeKeysByObject1(object3, keysObject));
console.log("2nd way:", changeKeysByObject2(object3, keysObject));
console.log("----- 6 -----\n");

/**
 * Write a JavaScript program to return the minimum-maximum value of an array,
 * after applying the provided function to set comparing rule
 */

const comparator1 = (a, b) => a - b;
const comparator2 = (a, b) => b - a;
const comparator3 = (a, b) => a.age - b.age;
const comparator4 = (a, b) => b.age - a.age;
const consumerComparator = (target, comparator) =>
  target.reduce((previousValue, currentValue) =>
    comparator(previousValue, currentValue) < 0 ? currentValue : previousValue
  );
console.log(
  "Max is:",
  consumerComparator([9, 2, 5, 6, 1, 7, 3, 8, 4], comparator1)
);
console.log(
  "Min is:",
  consumerComparator([9, 2, 5, 6, 1, 7, 3, 8, 4], comparator2)
);
console.log(
  "Object with max age:",
  consumerComparator(
    [
      {
        name: "Kev",
        age: 20,
      },
      {
        name: "Dav",
        age: 16,
      },
      {
        name: "Skr",
        age: 29,
      },
    ],
    comparator3
  )
);
console.log(
  "Object with min age:",
  consumerComparator(
    [
      {
        name: "Kev",
        age: 20,
      },
      {
        name: "Dav",
        age: 16,
      },
      {
        name: "Skr",
        age: 29,
      },
    ],
    comparator4
  )
);
console.log("----- 7 -----\n");

/**
 * Write a JavaScript program to split values of two given arrays into
 * two groups. If an element in filter is truthy, the corresponding element
 * in the collection belongs to the first group; otherwise,
 * it belongs to the second group
 */

const bifurcate = (array, binaryArray) =>
  array.reduce(
    (container, value, index) => (
      container[binaryArray[index] ? 0 : 1].push(value), container
    ),
    [[], []]
  );
console.log("Bifurcated:", bifurcate([1, 2, 3, 4], [true, false, false, true]));
console.log("----- 8 -----\n");

/**
 * Write a JavaScript program to get every
 * nth element in a given array.
 */

const getEveryNth = (array, nth = 2) =>
  array.filter((_, index) => index % nth == nth - 1);
console.log(
  "Every 2nd element:",
  getEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
);
console.log(
  "Every 3rd element:",
  getEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)
);
console.log(
  "Every 4th element:",
  getEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4)
);
console.log("----- 9 -----\n");

/**
 * Write a JavaScript program to filter out the non-unique values in an array
 * (based on a provided comparator function).
 */

let duplicateArray = ["a", "b", "b", "c", "e", "e", "d", "f", "f", "f"];
const getNonUniqueValues = (array) =>
  Array.from(
    new Set(
      array.filter((value) => array.indexOf(value) !== array.lastIndexOf(value))
    )
  );
const getUniqueValues = (array) =>
  Array.from(
    new Set(
      array.filter((value) => array.indexOf(value) === array.lastIndexOf(value))
    )
  );
console.log("Non-unique:", getNonUniqueValues(duplicateArray));
console.log("Unique:", getUniqueValues(duplicateArray));
console.log("----- 10 -----\n");

/**
 * Write a JavaScript program to create a new array out of
 * the two supplied by creating each possible pair from the arrays
 */

const allCombiFromArrays1 = (arr1, arr2) =>
  arr1.map((value1) => arr2.map((value2) => [value1, value2])).flat();
const allCombiFromArrays2 = (arr1, arr2) =>
  arr1.reduce(
    (container, value1) =>
      container.concat(arr2.map((value2) => [value1, value2])),
    []
  );
console.log("1st way:", allCombiFromArrays1([1, 2], [3, 4]));
console.log("2nd way:", allCombiFromArrays2([1, 2], [3, 4]));
console.log("1st way:", allCombiFromArrays1([1, 2, 3], [4, 5, 6, 7]));
console.log("2nd way:", allCombiFromArrays2([1, 2, 3], [4, 5, 6, 7]));
console.log("----- 11 -----\n");

/**
 * Write a JavaScript program to measure the time taken by a function to execute.
 */

const getExecuteTime = (callback) => callback();
console.log("Time taken: " + getExecuteTime(() => Math.pow(2, 3)) + " ms");
console.log("----- 12 -----\n");

/**
 *  Write a JavaScript program to get a random number / integer in the specified range.
 */

const randomFromTo = (from, to) =>
  Math.floor(Math.random() * (to - from) + from);
console.log("Random from 10 to 20:", randomFromTo(10, 20));
console.log("Random from -10 to 20:", randomFromTo(-10, 20));
console.log("----- 13 -----\n");
