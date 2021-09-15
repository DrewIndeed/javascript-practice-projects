/**
 * Write a JavaScript program to extract out
 * the values at the specified indexes from a specified array.
 */

const valuesFromIndexes = (array, ...indexes) => {
    return array.filter((value, index) => [...indexes].includes(index));
};

console.log(valuesFromIndexes([0, 11, 22, 33, 44, 55, 66, 77, 88], 0, 4));
