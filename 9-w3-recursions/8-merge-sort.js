const testArray = [22, 13, 99, 1000, -88, -22];

function mergeSort(arr) {
  // if array has <= 1 item
  if (arr.length <= 1) return arr;

  // has more than 1 item
  let halfIndex = parseInt(arr.length / 2);
  let leftPart = mergeSort(arr.slice(0, halfIndex));
  let rightPart = mergeSort(arr.slice(halfIndex, arr.length));

  // write an inner function to merge to array parts
  const mergeParts = (arr1, arr2) => {
    let result = [];
    console.log("Arr1 before:", arr1);
    console.log("Arr2 before:", arr2);
    while (arr1.length > 0 && arr2.length > 0) {
      result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
    }
    console.log("Arr1 after:", arr1);
    console.log("Arr2 after:", arr2);
    console.log("Before concat:", result);
    console.log("After concat:", result.concat(arr1).concat(arr2));
    console.log();
    return result.concat(arr1).concat(arr2);
  };
  return mergeParts(leftPart, rightPart);
}

console.log("Result 1:", mergeSort(testArray));

Array.prototype.merge_sort = function () {
  if (this.length <= 1) return this;
  let halfIndex = parseInt(this.length / 2);
  let leftPart = this.slice(0, halfIndex).merge_sort();
  let rightPart = this.slice(halfIndex, this.length).merge_sort();
  const mergeParts = (arr1, arr2) => {
    let result = [];
    while (arr1.length > 0 && arr2.length > 0) {
      result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
    }
    return result.concat(arr1).concat(arr2);
  };
  return mergeParts(leftPart, rightPart);
};

console.log("Result 2:", testArray.merge_sort());
