// Check is an interger is a power of another integer
const isPowerOf = (testNum, testPow) => {
  if (typeof testNum !== "number" || typeof testPow !== "number") return "NaN";
  if (!Number.isInteger(testNum) || !Number.isInteger(testPow))
    return "Not integer";
  let startPow = 1;
  let temp = Math.pow(testNum, 1 / startPow);
  while (temp > testPow) {
    startPow++;
    temp = Math.pow(testNum, 1 / startPow);
  }
  return Number.isInteger(temp);
};
console.log(isPowerOf(256.99, 2));
console.log(isPowerOf(81, 3));
console.log(isPowerOf("1099511627776", 4));
console.log(isPowerOf(200, 2));
