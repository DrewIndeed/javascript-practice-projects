/**
 * Write a JavaScript program to sort an array of
 * all prime numbers between 1 and a given integer.
 */

function optimizedPrimeCheck(n) {
  if (n <= 3) return n > 1;
  if (n % 2 == 0 || n % 3 == 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
    i += 6;
  }
  return true;
}

function printPrime(to, from = 1) {
  for (let i = from; i <= to; i++) if (optimizedPrimeCheck(i)) console.log(i);
}

printPrime(50);
