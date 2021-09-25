const fibonacci = (nth) => {
  if (nth === 1) return 0;
  else if (nth === 2) return 1;
  return fibonacci(nth - 2) + fibonacci(nth - 1);
};
console.log(fibonacci(5));

/**
 * fibo(5) -> fibo(4) + fibo(3) -> 2 + 1 -> 3
 * fibo(4) -> fibo(3) + fibo(2) -> 1 + 1 -> 2
 * fibo(3) -> fibo(2) + fibo(1) -> 1 + 0 -> 1
*/