const isPalindrome = (str) => {
  let strarr = Array.from(str).map((ch) => ch.toLowerCase());
  let start = 0;
  let end = strarr.length - 1;
  for (let i = 0; i < Math.floor(strarr.length / 2); i++) {
    if (strarr[start] !== strarr[end]) return false;
    start++;
    end--;
  }
  return true;
};
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
// console.log(countVowels("The quick brown fox"));

const isPrime = (num) => {
  if (num < 5) return num == 2 || num == 3;
  if (num % 2 == 0 || num % 3 == 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
    i += 6;
  }
  return true;
};
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(13));
// console.log(isPrime(99));

// exclude exercise 9

const createIdentityMatrix = (num) => {
  let markIndex = 0;
  let resultArray = [];
  for (let i = 0; i < num; i++) {
    let temp = [];
    for (let j = 0; j < num; j++) {
      if (j == markIndex) temp.push(1);
      else temp.push(0);
    }
    resultArray.push(temp);
    markIndex++;
  }
  return resultArray;
};

for (const item of createIdentityMatrix(5)) console.log(item);
