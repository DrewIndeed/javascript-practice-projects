// Write a JavaScript function to print an integer with commas as thousands separators
const thousandsSeparator = (num) => {
  if (typeof num !== "number" || Number.isNaN(num)) return "NaN";
  let toStr = `${num}`;
  const integerSep = (numStr) =>
    numStr.substring(0, numStr.length - 3) +
    "," +
    numStr.substring(numStr.length - 3, numStr.length);
  if (toStr.includes(".")) {
    let toArr = toStr.split(".");
    return toArr[0].length < 4
      ? toArr[0] + "." + toArr[1]
      : integerSep(toArr[0]) + "." + toArr[1];
  }
  return integerSep(toStr);
};

console.log(thousandsSeparator(1000));
console.log(thousandsSeparator(10000.23));
console.log(thousandsSeparator(100000));
console.log(thousandsSeparator(0.123123));
console.log(thousandsSeparator(120.123123));
console.log(thousandsSeparator(1200.123123));
console.log(thousandsSeparator("100000"));
console.log(thousandsSeparator(NaN));
console.log(thousandsSeparator(null));
console.log(thousandsSeparator(undefined));
