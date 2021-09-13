/**
 * Write a JavaScript program to compare two objects to determine
 * if the first one contains equivalent property values to the second one.
 */

// test use Object.keys()
const temp1 = { age: 25, hair: "long", beard: true };
const temp2 = { hair: "long", beard: true };
console.log("Temp1: ");
Object.keys(temp1).map(key => console.log(temp1[key]));
console.log("Temp2: ");
Object.keys(temp2).map(key => console.log(temp2[key]));

const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log("Result 1:", matches(temp1, temp2));
console.log("Result 2:", matches(temp2, temp1));