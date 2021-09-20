/**
 * Write a JavaScript program to return the minimum-maximum value of an array, 
 * after applying the provided function to set comparing rule
*/
const findMaxMin = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((prevValue, curValue) =>
    comparator(prevValue, curValue) >= 0 ? curValue : prevValue
  );
console.log("Find min:", findMaxMin([1, 3, 5, 1, 7, 999, 2]));
console.log(
  "Find max:",
  findMaxMin([1, 3, 5, 1, 7, 999, 2], (a, b) => b - a)
);
console.log(
  "Obj with max age:",
  findMaxMin(
    [
      { name: "Kevin", age: 16 },
      { name: "John", age: 20 },
      { name: "Ani", age: 19 },
    ],
    (a, b) => a.age - b.age
  )
);
