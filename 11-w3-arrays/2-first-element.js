// Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.
const getFirstElement = (arr, index = 0) => {
  if (arr.length === 0 || index >= arr.length) return arr;
  if (index === 0) return arr[0];
  if (index < 0) return [];
  return arr.slice(0, index);
};
console.log(getFirstElement([], 3));
console.log(getFirstElement([]));
console.log(getFirstElement([99, 2, 3, 4, 5]));
console.log(getFirstElement([99, 2, 3, 4, 5], 6));
console.log(getFirstElement([99, 2, 3, 4, 5], 2));
