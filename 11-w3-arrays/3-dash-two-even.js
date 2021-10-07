// Write a JavaScript program which accept a number as input and insert dashes (-)
// between each two even numbers.
// For example if you accept 025468 the output should be 0 - 254 - 6 - 8.
const dashTwoEven = (numStr) => {
  const toArray = Array.from(numStr);
  let result = [toArray[0]];
  for (let i = 1; i < toArray.length; i++) {
    if (toArray[i - 1] % 2 == 0 && toArray[i] % 2 == 0)
      result.push("-", toArray[i]);
    else result.push(toArray[i]);
  }
  return result.join("");
};

console.log(dashTwoEven("025468"));
