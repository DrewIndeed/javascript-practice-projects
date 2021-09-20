/**
 * Write a JavaScript program to split values of two given arrays into
 * two groups. If an element in filter is truthy, the corresponding element
 * in the collection belongs to the first group; otherwise,
 * it belongs to the second group
 */
const testArray = [2, 4, 6, 8, 22];
function splitOnFilterArray(array, filter) {
  return array.reduce(
    (groups, value, index) => (
      groups[filter[index] ? 0 : 1].push(value), groups // dont know why there is a ',group' here
    ),
    [[], []]
  );
}
console.log(splitOnFilterArray(testArray, [true, true, false, true, false]));
