/**
 * Write a JavaScript program to filter out the non-unique values in an array
 * (based on a provided comparator function).
 */

// Andrew way
let duplicateArray = ["a", "b", "b", "c", "e", "e", "d", "f", "f", "f"];
const valueAndFrequency = duplicateArray.reduce((prevState, curState) => {
  if (curState in prevState) prevState[curState]++;
  else prevState[curState] = 1;
  return prevState;
}, {});
console.log(
  Object.keys(valueAndFrequency).filter((key) => valueAndFrequency[key] > 1)
);

// ES6
