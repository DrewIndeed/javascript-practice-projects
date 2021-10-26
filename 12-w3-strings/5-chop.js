// Write a JavaScript function to chop a string into chunks of a given length.
const chop = (org, len = 0) => {
  if (len === 0 || org === "") return [org];
  let breakCount = 0;
  let temp = "";
  let rs = [];
  for (let i = 0; i < org.length; i++) {
    temp += org[i];
    breakCount++;
    if (breakCount === len) {
      rs.push(temp);
      temp = "";
      breakCount = 0;
    }
    if (breakCount < len && i === org.length - 1 && temp !== "") rs.push(temp);
  }
  return rs;
};

console.log(chop("w3resource"));
console.log(chop("w3resource", 2));
console.log(chop("w3resource", 3));
console.log(chop("AndrewLeNguyen"));
console.log(chop("AndrewLeNguyen", 4));
console.log(chop("AndrewLeNguyen", 3));

