// Write a JavaScript program to flatten a nested (any depth) array.
// If you pass shallow, the array will only be flattened a single level

const isArray = (arr) => {
  if (toString.call(arr) === "[object Array]") return true;
  return false;
};

const flattenShallow = (arr) => {
  let rs = [];
  arr.forEach((e) => {
    if (!isArray(e)) rs.push(e);
    else rs = rs.concat(e);
  });
  return rs;
};

const flatten = (arr, shallow = false) => {
  if (shallow) return flattenShallow(arr);
  while (arr.some((item) => isArray(item))) arr = flattenShallow(arr);
  return arr;
};

console.log(
  flatten([1, [2], [3, [[4]]], [5, 6, [7, 8, [10, 22, [1, [999]]]]]])
);
console.log(
  flatten([1, [2], [3, [[4]]], [5, 6, [7, 8, [10, 22, [1, [999]]]]]], true)
);
