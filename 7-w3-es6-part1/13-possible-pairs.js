/**
 * Write a JavaScript program to create a new array out of
 * the two supplied by creating each possible pair from the arrays
 */

// Andrew way
function allPossiblePairs(array1, array2) {
  const rs = [];
  array1.map((item) => {
    array2.map((e) => rs.push([item, e]));
  });
  return rs;
}
console.log(allPossiblePairs([1, 2], [3, 4]));
console.log(allPossiblePairs([1, 2, 3], [4, 5, 6, 7]));

// ES6
const allPossiblePairs2 = (array1, array2) =>
  array1.reduce(
    (container, array1Item) =>
      container.concat(array2.map((array2Item) => [array1Item, array2Item])),
    []
  );
console.log(allPossiblePairs2([1, 2], [3, 4]));
console.log(allPossiblePairs2([1, 2, 3], [4, 5, 6, 7]));
