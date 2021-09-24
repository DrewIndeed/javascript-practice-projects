const allCombiFromArrays = (arr, len) => {
  if (len > arr.length || len < 0) return false;
  let result = [[]];
  for (const item1 of arr) {
    let temp = [];
    for (const item2 of result) {
      temp.push(item2.concat([item1]));
    }
    result = [...result, ...temp];
  }
  return result.filter((a) => a.length == len);
};
// console.log(allCombiFromArrays([1, 2, 3], 2));

// exclude 22

const firstUniqueChar = (str) =>
  Array.from(new Set(Array.from(str))).filter(
    (c) => Array.from(str).indexOf(c) === Array.from(str).lastIndexOf(c)
  )[0];
// console.log(firstUniqueChar("abacdffpffzzzzdbc"));

const bubbleSort = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
// console.log(bubbleSort([9, 2, 6, 1, 8, 33, 25, 146, 5, 4, 1, 2, 1000, 8]));

// exclude 25

const longest_substring_without_repeating_characters = (str) => {
  let toArray = Array.from(str);
  let rs = [];
  for (let i = 0; i < toArray.length; i++) {
    let temp = [];
    temp.push(toArray[i]);
    for (let j = i + 1; j < toArray.length; j++) {
      if (toArray[i] !== toArray[j]) temp.push(toArray[j]);
      else break;
    }
    rs.push(temp);
  }
  return rs.sort((a, b) => b.length - a.length)[0].join("");
};

// console.log(longest_substring_without_repeating_characters("google.com"));
// console.log(longest_substring_without_repeating_characters("example.com"));




// exclude 28

function printFunctionName() {
  console.log(arguments.callee.name + "()");
}
printFunctionName();
