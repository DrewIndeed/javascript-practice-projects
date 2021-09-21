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

