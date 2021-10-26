// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
const humanizeFormat = (number = 1) => {
    const lastDigit = number % 10;
    if (lastDigit === 1) return (number + "") + "st";
    if (lastDigit === 2) return (number + "") + "nd";
    if (lastDigit === 3) return (number + "") + "rd";
    if (lastDigit > 3 || lastDigit == 0) return (number + "") + "th";
}

console.log(humanizeFormat());
for (let i = 81; i < 91; i++) {
    console.log(humanizeFormat(i));
}