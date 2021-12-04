// list properties and methods
console.log(Object.getOwnPropertyNames(Math));
console.log(Object.getOwnPropertyNames(Array));

// list only methods
const listAllMethods = (obj) =>
  Object.getOwnPropertyNames(obj).filter(
    (property) => typeof obj[property] === "function"
  );
console.log(listAllMethods(Math));
console.log(listAllMethods(Array));
