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

// Copy the student object to newStudent without mutating the original object.
// In the new object add the following:
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
let copiedStudent = { ...student };
copiedStudent.skills.frontEnd = [ ...copiedStudent.skills.frontEnd, {
  skill: "Bootstrap",
  level: 8
}];
copiedStudent.skills.backEnd = [ ...copiedStudent.skills.frontEnd, {
  skill: "Express",
  level: 9
}];
copiedStudent.skills.dataBase = [ ...copiedStudent.skills.frontEnd, {
  skill: "SQL",
  level: 8
}];
copiedStudent.skills.dataScience.push("SQL");
console.log(copiedStudent.skills.frontEnd);
console.log(copiedStudent.skills.backEnd);
console.log(copiedStudent.skills.dataBase);