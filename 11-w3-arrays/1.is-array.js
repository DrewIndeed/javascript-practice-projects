// Write a JavaScript function to check whether an `input` is an array or not
const isArray = (arr) => {
  if (toString.call(arr) === "[object Array]") return true;
  return false;
};

console.log(isArray([1, 2, 3, 4, 5]));
console.log(Array.isArray([1, 2, 3, 4, 5]));
