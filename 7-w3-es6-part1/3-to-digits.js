/**
 * Write a JavaScript program to converts a specified number to an array of digits.
*/

const toDigitArray = (num) => [...`${num}`].map(strDigit => parseInt(strDigit));
console.log(toDigitArray(12345678));

