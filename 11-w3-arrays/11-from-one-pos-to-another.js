// Write a JavaScript function to move an array
// element from one position to another.
let index1 = -6;
let index2 = 5;
let arr = [1, 2, 3, 4, 5, 6];

// // get element at index1
// console.log(arr.slice(arr.length + index1, arr.length + (index1 + 1)));

// // get element at index2
// console.log(arr.slice(index2, index2 + 1));

const move = (arr, i1, i2) => {
  if (i1 === i2) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (i == i1) {
      while (i1 != i2) {
        [arr[i1], arr[i1 + 1]] = [arr[i1 + 1], arr[i1]];
        i1++;
      }
      break;
    }
  }
  return arr;
};

function move2(arr, old_index, new_index) {
  while (old_index < 0) {
      old_index += arr.length;
  }
  while (new_index < 0) {
      new_index += arr.length;
  }
  if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while ((k--) + 1) {
          arr.push(undefined);
      }
  }
   arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
 return arr;
}


const a = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(a);
console.log(move(a, 2, 4));
// console.log(move([10, 20, 30, 40, 50, 60, 70, 80], -99, -99));
// console.log(move([10, 20, 30, 40, 50, 60, 70, 80], 2, 2));
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// console.log([10, 20, 30, 40, 50].slice(0, -2));
