// Euclid
function gcdIterate1(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a == b || b == 0) return a;
  if (a == 0) return b;
  while (a != b) {
    if (a > b) a = a - b;
    else b = b - a;
  }
  return a;
}

// Euclidean
function gcdIterate2(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

console.log("Using iterate 1:");
console.log(gcdIterate1(2154, 0));
console.log(gcdIterate1(0, 2154));
console.log(gcdIterate1(-2154, 428));
console.log(gcdIterate1(428, 2154));
console.log(gcdIterate1(0, 0));
console.log(gcdIterate1(22, 22));
console.log("Using iterate 2:");
console.log(gcdIterate2(2154, 0));
console.log(gcdIterate2(0, 2154));
console.log(gcdIterate2(-2154, 428));
console.log(gcdIterate2(428, 2154));
console.log(gcdIterate2(0, 0));
console.log(gcdIterate2(22, 22));

// Euclid
function gcdRecursive1(a, b) {
  if (a == b) return a;
  if (a == 0) return b;
  if (b == 0) return a;
  a = Math.abs(a);
  b = Math.abs(b);
  return a > b ? gcdRecursive1(a - b, b) : gcdRecursive1(a, b - a);
}

// Euclidean
function gcdRecursive2(a, b) {
  if (b == 0) return a;
  return gcdRecursive2(b, a % b);
}

console.log("Using recursive 1:");
console.log(gcdRecursive1(2154, 0));
console.log(gcdRecursive1(0, 2154));
console.log(gcdRecursive1(-2154, 428));
console.log(gcdRecursive1(428, 2154));
console.log(gcdRecursive1(0, 0));
console.log(gcdRecursive1(22, 22));
console.log("Using recursive 2:");
console.log(gcdRecursive2(2154, 0));
console.log(gcdRecursive2(0, 2154));
console.log(gcdRecursive2(-2154, 428));
console.log(gcdRecursive2(428, 2154));
console.log(gcdRecursive2(0, 0));
console.log(gcdRecursive2(22, 22));
