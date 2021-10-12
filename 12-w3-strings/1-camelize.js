// Write a JavaScript function to convert a string into camel case
const camelize = (str) => {
  const words = str.split("/\W+/g");
  return words.map((item) => {
    let firstLetter = item.charAt(0).toUpperCase();
    return firstLetter + Array.from(item).slice(1).join("");
  }).join(" ");
};

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
