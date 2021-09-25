const pow = (base, expo) => {
  if (expo == 1) return base;
  else return pow(base, expo - 1) * base;
};
console.log(pow(2, 8));
