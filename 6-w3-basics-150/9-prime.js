/**
 * Write a JavaScript program to sort an array of
 * all prime numbers between 1 and a given integer.
 */

// check prime by checking if numbers are in forms: 6k - 1, 6k +1
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


// print prime numbers in an interval
function printPrime(to, from = 1) {
  let rs = "";
  for (let i = from; i <= to; i++) if (optimizedPrimeCheck(i)) rs += i + " ";
  console.log(rs);
}

printPrime(50);


// print prime factors of an integer
function printPrimeFactors(n) {
  if (n < 0) console.log("Negative");
  else if (n < 2) console.log(n);
  else {
    let rs = "";
    for (let i = 2; i <= n; i++) {
      if (optimizedPrimeCheck(i)) {
        while (n % i == 0) {
          n = n / i;
          rs += i.toString() + " ";
        }
      }
    }
    console.log(rs);
  }
}

printPrimeFactors(120);
