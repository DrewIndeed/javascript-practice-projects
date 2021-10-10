// Write a JavaScript program to find the leap years in a given range of years.
const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
const range = (from, to) => {
  if (to - from === 1) return [from];
  else {
    let rs = range(from, to - 1);
    rs.push(to - 1);
    return rs;
  }
};
const leapYearFromTo = (y1, y2) =>
  range(y1, y2 + 1).filter((y) => isLeapYear(y));
console.log(leapYearFromTo(2000, 2012));
