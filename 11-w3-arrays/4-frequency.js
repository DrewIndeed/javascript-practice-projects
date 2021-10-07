//  Write a JavaScript program to find the most frequent item of an array
const countFrequency = (arr) => {
  let countObj = {};
  for (const item of arr) {
    if (!countObj[item]) countObj[item] = 1;
    else countObj[item]++;
  }
  const maxF = Math.max(...Object.values(countObj));
  return Object.keys(countObj).filter((key) => countObj[key] === maxF);
};
console.log(
  countFrequency([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 2, 2, 2, 4, 9, 3])
);
