/**
 * Write a JavaScript program to replace the
 * names of multiple object keys with the values provided.
 */

// not using reduce()
function renameKeys(keyObj, object) {
  let result = {};
  for (const key in object) result[keyObj[key] || key] = object[key];
  return result;
}

// using reduce()
const renameKeys2 = (keyObj, object) =>
  Object.keys(object).reduce(
    (acc, key) => ({ ...acc, ...{ [keyObj[key] || key]: object[key] } }),
    {}
  );

//testing function
const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
console.log("Original Object:");
console.log(obj);
console.log("-------------------------------------");
result = renameKeys({ name: "firstName", job: "Actor" }, obj);
console.log("New Object:");
console.log(result);
console.log("-------------------------------------");
result = renameKeys2({ name: "firstName", job: "Actor" }, obj);
console.log("New Object 2:");
console.log(result);
