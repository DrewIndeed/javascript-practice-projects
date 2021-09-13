// swap 2 items using indexes
function swapItemsAt(array, firstIndex, secondIndex) {
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
  return array;
}

// console.log(swapItemsAt([1, 2, 3, 4, 5], 0, 2));

// kth greatest element in array
function kthGreatestOf(k, array) {
  array.sort((a, b) => b - a);
  return array[k - 1];
}

// console.log(kthGreatestOf(2, [8, 2, 3, 4, 9, 6, 7, 1]));

// get the greatest sum when sum a consecutive number of digit in the array
function maxSumEveryConsecutiveDigit(array, consecutiveNum) {
  if (consecutiveNum > array.length || consecutiveNum < 1) return "Nah ah!";

  let max = 0;
  let runTo = array.length - consecutiveNum + 1;
  for (let i = 0; i < runTo; i++) {
    let sum = 0;
    for (let j = i; j < i + consecutiveNum; j++) {
      console.log(array[j]);
      sum = sum + array[j];
    }
    console.log("sum:", sum);
    console.log("------");
    if (sum > max) max = sum;
  }
  return max;
}

// console.log("Max is:", maxSumEveryConsecutiveDigit([8, 2, 3, 4, 9, 6, 7, 1], 4));

// max sum of all possible pairs
function maxSumAllPossiblePair(array) {
  let max = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum > max) max = sum;
    }
  }
  return max;
}

// console.log(maxSumAllPossiblePair([8, 2, 3, 4, 9, 6, 7, 1, 99, 100]));


// print the element that appears the most with its frequency
function printAppearTheMost(array) {
    let keys = new Set([...array]);
    let maxfElement;
    let maxf = 0;
    for (const k of keys) {
        let f = 0;
        for (const item of array) {
            if (item == k) f = f + 1;
        }
        if (f > maxf) {
            maxf = f;
            maxfElement = k;
        }
    }
    console.log(`Element ${maxfElement} with max frequency of ${maxf}`);
}

// printAppearTheMost([
//   8, 8, 8, 8, 8, 8, 8, 2, 3, 4, 4, 4, 4, 9, 6, 7, 7, 7, 1, 1, 1, 1, 1, 99,
// ]);


// sort the strings of a given array of strings in order of increasing lengths
console.log(["anderson", "an", "andrew", "ashley"].sort((a, b) => { return a.length - b.length }));


// swap two halves of an array with equal lengths (array with even length)
function swapTwoHalves(array) {
  console.log(array);
  for (let i = 0; i < array.length / 2; i++) {
    let secondIndex = (array.length / 2) + i;
    swapItemsAt(array, i, secondIndex);
  }
  console.log(array);
}

swapTwoHalves([8, 2, 3, 4, 9, 6, 7, 1, 99, 100]);