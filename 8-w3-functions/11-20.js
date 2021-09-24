const getSecondMinMax = (arr) => {
  const filteredArray = Array.from(new Set(arr.sort((a, b) => a - b)));
  console.log("Target:", filteredArray);
  return [...filteredArray.slice(1, 2), ...filteredArray.slice(-2, -1)];
};
// const testArray1 = [9, 2, 6, 1, 8, 33, 25, 146, 5, 4, 1, 2, 1000, 8];
// console.log("Result:", getSecondMinMax(testArray1));

const getDivisors = (num) => {
  let resultArray = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) resultArray.push(i);
  }
  return resultArray;
};

const isPerfectNumber = (num) => {
  const divisors = getDivisors(num);
  const divisorsSumExclude = divisors
    .slice(0, -1)
    .reduce((prev, cur) => prev + cur);
  const divisorsSumIncluded = divisors.reduce((prev, cur) => prev + cur);
  return divisorsSumExclude == num && divisorsSumIncluded / 2 == num;
};
// console.log(isPerfectNumber(6)); // true
// console.log(isPerfectNumber(28)); // true
// console.log(isPerfectNumber(496)); // true
// console.log(isPerfectNumber(8128)); // true
// console.log(isPerfectNumber(99)); // false

// exercise 13 is within 12 so will be excluded
// exclude 14

const pow = (base, expo) => {
  let result = 1;
  for (let i = 0; i < expo; i++) result *= base;
  return result;
};
// console.log(pow(2, 3));

// exclude 16

const occurrenceEachChar = (str) => {
  let frequency = {};
  for (const char of Array.from(str)) {
    if (!frequency[char]) frequency[char] = 1;
    else frequency[char]++;
  }
  return frequency;
};
// console.log(occurrenceEachChar("asfhlkjjlerjlkzzzjldsj"));

const binarySearch = (arr, element) => {
  /**
  * Sort array
  * Create flag 1 starts from first index, flag 2 starts from last index
  * Keep looping until 2 flags meet
    Create flag 3 to represent middle point = (int) (start + end / 2)
    if array[flag 3] === element -> found -> return true
    else if array[flag 3] < element -> it is in the 2nd half -> start = mid + 1
    else if array[flag 3] > element -> it is in the 1st half -> end = mid - 1
  * If after check there is nothing, it is not in the array -> return false
  */
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) return mid;
    else if (arr[mid] < element) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

// console.log(
//   binarySearch([9, 2, 6, 1, 8, 33, 25, 146, 5, 4, 1, 2, 1000, 8], 1000)
// );

const createIdOfLength = (len) => {
  const sample =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(
      Array.from(sample)[Math.floor(Math.random() * (sample.length - 1))]
    );
  }
  return result.join("");
};

console.log(createIdOfLength(8));
