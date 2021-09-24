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