const testArray1 = [9, 2, 6, 1, 8, 33, 25, 146, 5, 4, 1, 2, 1000, 8];
const getSecondMinMax = (arr) => {
    const filteredArray = Array.from(new Set(arr.sort((a, b) => a - b)));
    console.log("Target:", filteredArray);
  return [...filteredArray.slice(1, 2), ...filteredArray.slice(-2, -1)];
};
console.log("Result:", getSecondMinMax(testArray1));