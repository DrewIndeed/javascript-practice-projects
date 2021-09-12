/**
 * Write a JavaScript program to find the number of 
 * trailing zeros in the decimal representation of the factorial of a given number.
*/

function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
}


function countTrailingZeros(num) {
    let rs = factorial(num);
    console.log("Target:", rs);
    let count = 0;
    while (rs > 1) {
        let lastDigit = Math.floor(rs % 10);
        if (lastDigit == 0) count++;
        else break;
        rs = rs / 10;
    }
    return count;
}

console.log("Number of trailing zeros:", countTrailingZeros(8));