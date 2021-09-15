/**
 * Write a JavaScript program to filter out
 * the specified values from a specified array.
 * Return the original array without the filtered values.
 */

const filterOutItems = (array, ...targets) => {
  targets.forEach((target) => {
    array = array.filter((item) => {
      return item != target;
    });
  });
    return array;
};

console.log(filterOutItem([1, 2, 2, 2, 3, 4, 8, 8, 8, 9, 102, 5, 5], 2, 8, 5));
