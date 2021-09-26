const arraysum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + arraysum(arr);
  }
};
console.log(arraysum([1, 2, 3, 4, 5]));
