// Write a JavaScript function to remove HTML/XML tags from string
const htmlGetText = (htmlText) => {
  return htmlText.replace(/<(.*?)>/g, "");
};

console.log(htmlGetText("<p><strong><em>PHP Exercises</em></strong></p>"));
