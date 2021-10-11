// Check is an interger is a power of another integer
const isPowerOf = (testNum, testPow) => {
  if (typeof testNum !== "number" || typeof testPow !== "number") return "NaN";
  if (!Number.isInteger(testNum) || !Number.isInteger(testPow))
    return "Not integer";
  
  // test case: 1024 is power of 4 (target expo)?
  // Iter 1: can bac 2 (1024) -> a; a > target expo
  // Iter 2: can bac 3 (1024) -> a1; a1 > target expo
  // Iter 3: can bac 4 (1024) -> a2; a2 > target expo
  // Iter 4: can bac 5 (1024) -> a3 = 4; a3 > target expo
  // Iter 5: ... 6 (1024) -> a4 <= target expo <= 4
  // Khi dung lai roi: check a2    
  
  let startPow = 2;
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
