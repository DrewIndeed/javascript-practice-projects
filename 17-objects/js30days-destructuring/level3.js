// Write a function called convertArrayToObject which can
// convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const convertArrayToObject = (arr) => {
  return arr.reduce((finalObject, item, index) => {
    finalObject[index] = item.reduce((elementObject, subitem, subindex) => {
      elementObject[subindex] = subitem;
      return elementObject;
    }, {});
    return finalObject;
  }, {});
};
console.log(convertArrayToObject(students));
