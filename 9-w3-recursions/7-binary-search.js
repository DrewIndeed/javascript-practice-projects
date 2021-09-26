function binarySearch(arr, element) {
  try {
    if (arr[0] == element) return 0;
    let half = parseInt(arr.length / 2);
    if (arr[half] === element) return half;
    else if (arr[half] < element)
      return half + binarySearch(arr.slice(half, arr.length), element);
    else return binarySearch(arr.slice(0, half), element);
  } catch (e) {
    console.log("Element not found!");
  }
}
let test1 = binarySearch([1, 2, 3, 4, 5, 6], 10);
console.log(test1 >= 0 ? "Found at: " + test1 : "");

Array.prototype.br_search = function (target) {
  var half = parseInt(this.length / 2);
  if (target === this[half]) {
    return half;
  }
  if (target > this[half]) {
    return half + this.slice(half, this.length).br_search(target);
  } else {
    return this.slice(0, half).br_search(target);
  }
};

l = [0, 1, 2, 3, 4, 5, 6];
console.log(l.br_search(0));
