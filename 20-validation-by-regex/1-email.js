const validEmail = (str) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str) ? true : false;

console.log(validEmail("me-info@example.com"));
console.log(validEmail("223-info@@.com"));
