const factorial = (n) => {
  // assume n >= 1
  if (n == 1) return n;
  return n * factorial(n - 1);
};

// console.log(factorial(5));
// console.log(factorial(10));

const gcdEuclidean = (a, b) => {
  if (b == 0) return a;
  return gcdEuclidean(b, a % b);
};

// console.log(gcdEuclidean(2154, 0));
// console.log(gcdEuclidean(0, 2154));
// console.log(gcdEuclidean(-2154, 428));
// console.log(gcdEuclidean(428, 2154));
// console.log(gcdEuclidean(0, 0));
// console.log(gcdEuclidean(22, 22));

const range = (from, to) => {
  // inclide from value in this function too
  if (to - from == 1) return [from];
  else {
    let list = range(from, to - 1);
    list.push(to - 1);
    return list;
  }
};
// console.log(range(1, 10));

const fibonacci = (n) => {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

// console.log(fibonacci(9));

const arraySum = (values) => {
  if (values.length == 1) return values[0];
  return values.pop() + arraySum(values);
};

// console.log(arraySum([1, 2, 3, 4, 5]));

Array.prototype.binarySearch = function (target) {
  let half = parseInt(this.length / 2);
  if (this[half] === target) return half;
  if (target > this[half])
    return half + this.slice(half, this.length).binarySearch(target);
  else return this.slice(0, half).binarySearch(target);
};

// let ts = [3, 5, 1, 6, 100, 99, 234, 511, 222, 33].sort((a, b) => a - b);
// console.log((ts).binarySearch(3));

Array.prototype.mergeSort = function () {
  if (this.length <= 1) return this;
  const mergeParts = (p1, p2) => {
    let result = [];
    while (p1.length > 0 && p2.length > 0) {
      result.push(p1[0] <= p2[0] ? p1.shift() : p2.shift());
    }
    return result.concat(p1).concat(p2);
  };
  let half = parseInt(this.length / 2);
  let leftPart = this.slice(0, half).mergeSort();
  let rightPart = this.slice(half, this.length).mergeSort();
  return mergeParts(leftPart, rightPart);
};

// console.log([3, 5, 1, 6, 100, 99, 234, 511, 222, 33].mergeSort());
