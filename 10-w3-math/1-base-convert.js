// Write a JavaScript function to convert a number from one base to another.
const changeBaseTo = (num, fromBase, toBase) => {
  if ((fromBase && toBase) < 2 || (fromBase && toBase) > 36)
    return "Base from 2 to 36 only";
  return parseInt(num + "", fromBase).toString(toBase);
};

console.log(changeBaseTo(1000, 2, 37));
console.log(changeBaseTo(1000, 2, 8));
