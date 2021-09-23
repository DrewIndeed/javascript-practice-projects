const reverseString = (str) => Array.from(str).reverse().join("");
// console.log(reverseString("Andrew"));

const isPalindrome = (str) =>
  reverseString(str)
    .toLowerCase()
    .replace(/[^a-z]/gi, "") === str.toLowerCase().replace(/[^a-z]/gi, "");
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Andrew Le Nguyen"));
// console.log(isPalindrome("A dog! A panic in a pagoda."));
// console.log(isPalindrome("A new order began, a more Roman age bred Rowena."));

const combiStringChar = (str) => {
  let resultArray = [[]];
  for (const item1 of Array.from(str)) {
    let tempArray = [];
    for (const item2 of resultArray) tempArray.push(item2.concat([item1]));
    resultArray = [...resultArray, ...tempArray];
  }
  return resultArray.slice(1).map((e) => e.join(""));
};
// console.log(combiStringChar("dog"));

const charInOrder = (str) => Array.from(str).sort().join("");
// console.log(charInOrder('webmaster'));

const capitalized = (str) =>
  str
    .split(/\s+/gi)
    .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
    .join(" ");
// console.log(capitalized("andrew        le      nguyen"));

const findLongestWord = (str) =>
  str.split(/\s+/gi).sort((a, b) => b.length - a.length)[0];
// console.log(findLongestWord("Andrew Le Mollerstrom"));

const countVowels = (str) =>
  Array.from(str.replace(/\s+/gi, "")).filter((chr) =>
    ["u", "e", "o", "a", "i"].includes(chr.toLowerCase())
  ).length;
console.log(countVowels("The quick brown fox"));
