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
console.log(firstUniqueChar("abacdffpffzzzzdbc"));
