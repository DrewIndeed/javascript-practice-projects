// Convert binary numbers to decimal
const binToDec = (binaryNum) => {
  if (!Array.from(`${binaryNum}`).every((char) => char === "1" || char === "0"))
      return `'${binaryNum}' is not a binary number`;
    return `'${binaryNum}' in decimal is ${parseInt(`${binaryNum}`, 2)}`;
};

console.log(binToDec(1010101019));
console.log(binToDec(1010101110));
