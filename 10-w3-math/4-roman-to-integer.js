// Write a JavaScript function that Convert Roman Numeral to Integer
const romanToInteger = (romanNum) => {
  const charArray = Array.from(`${romanNum}`);
  if (!charArray.every((char) => "IVXLCDM".includes(char.toUpperCase())))
    return "Not a Roman Numeral";
  const romanCharToNum = (char) => {
    switch (char.toUpperCase()) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return -1;
    }
  };
  return charArray.reduce((rs, char) => (rs += romanCharToNum(char)), 0);
};

console.log(romanToInteger("XXVI"));
console.log(romanToInteger("CI"));
console.log(romanToInteger("andre"));
