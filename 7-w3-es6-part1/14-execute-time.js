/**
 * Write a JavaScript program to measure the time taken by a function to execute.
 */

const getExecuteTime = (callback) => callback();
console.log("Time taken: " + getExecuteTime(() => Math.pow(2, 10)).toFixed(2) + " ms");
console.log("Time taken: " + getExecuteTime(() => Math.sqrt(225)).toFixed(2) + " ms");
console.log(
  "Time taken: " + getExecuteTime(() => Math.sqrt(5 * 5 + 6 * 6)).toFixed(2) + " ms"
);
