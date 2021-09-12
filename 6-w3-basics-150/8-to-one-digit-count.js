/**
 * Write a JavaScript program to find the number of
 * times to replace a given number with the sum of its digits
 * until it convert to a single digit number.
 */


function countUntilOneDigit(number) {
  // sum digit as a separated function
  function sumDigits(number) {
    let sum = 0;
    while (number > 1) {
      let digit = Math.floor(number % 10);
      number = number / 10;
      sum = sum + digit;
    }
    return sum;
  }

  if (number < 0) number = -number;
  if (number <= 9) return 1;
  else {
    let sumDigit = sumDigits(number);
    while (sumDigit > 9) {
      sumDigit = sumDigits(sumDigit);
    }
    return sumDigit;
  }
}

console.log(countUntilOneDigit(111111111));
