// Write a JavaScript program to find a pair of elements (indices of the two numbers)
// from an given array whose sum equals a specific target number
const pairSumEqualTo = (arr, target) => {
  let rs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) rs.push([i, j]);
    }
  }
  return rs;
};

const pairSumEqualToBetter = (arr, target) => {
  let map = [];
  let indexnum = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      let index = map[arr[i]];
      indexnum[0] = index;
			indexnum[1] = i;
			break;
    } else {
      map[target - arr[i]] = i;
    }
  }
  return indexnum;
};

console.log(pairSumEqualTo([10, 20, 10, 40, 50, 60, 70], 50));
console.log(pairSumEqualToBetter([10, 20, 10, 40, 50, 60, 70], 50));
console.log(pairSumEqualTo([10, 20, 40, 50, 60, 70], 50));
console.log(pairSumEqualToBetter([10, 20, 40, 50, 60, 70], 50));
