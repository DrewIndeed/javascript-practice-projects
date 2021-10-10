// Write a JavaScript function to find the difference of two arrays
const difference = (a1, a2) => {
  if (a1.some((item) => Array.isArray(item))) a1 = a1.flat(Infinity);
  if (a2.some((item) => Array.isArray(item))) a2 = a2.flat(Infinity);
  return a2
    .filter((item) => !a1.includes(item))
    .concat(a1.filter((item) => !a2.includes(item)));
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
