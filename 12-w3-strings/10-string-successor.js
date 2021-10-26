/**
Note: 
	The successor is calculated by incrementing 
	characters starting from the rightmost alphanumeric 
	(or the rightmost character if there are no alphanumerics) 
	in the string. Incrementing a digit always results 
	in another digit, and incrementing a letter results 
	in another letter of the same case. 
	If the increment generates a carry, the character 
	to the left of it is incremented. 
	This process repeats until there is no carry, 
	adding an additional character if necessary.

Example :
	string.successor("abcd") == "abce"
	string.successor("THX1138") == "THX1139"
	string.successor("1999zzz") == "2000aaa"
	string.successor("ZZZ9999") == "AAAA0000"

Test Data :
	console.log(successor('abcd'));
	console.log(successor('3456'));
	"abce"
	"3457"
*/

const getSuccessor = (ancestor) => {
  const decideCharCode = (char) => {
    switch (char.charCodeAt()) {
      case 57:
        return 48;
      case 90:
        return 65;
      case 122:
        return 97;
      default:
        return char.charCodeAt() + 1;
    }
  };

  const toArray = Array.from(ancestor.replace(/[\W_]+/g, ""));
  let hasCarry = false;

  for (let i = toArray.length - 1; i >= 0; i--) {
    let oldCharCode = toArray[i].charCodeAt();
    let newCharCode = decideCharCode(toArray[i]);

    if (i === toArray.length - 1 || hasCarry) {
      toArray[i] = String.fromCharCode(newCharCode);
      hasCarry =
        oldCharCode === 57 || oldCharCode === 90 || oldCharCode === 122
          ? true
          : false;
    }
  }

  if (hasCarry) toArray.unshift(toArray[0]);

  return toArray.join("");
};

console.log(getSuccessor("1###88@@@@@8aaa<<>>")); // 1888aab
console.log(getSuccessor("1999zzz<<>>")); // 2000aaa
console.log(getSuccessor("THX1138")); // THX1139
console.log(getSuccessor("ZZZ9999")); // AAAA0000
console.log(getSuccessor("abcd")); // abce
