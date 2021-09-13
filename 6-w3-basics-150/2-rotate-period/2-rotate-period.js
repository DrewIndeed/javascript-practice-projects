/*
     Write a JavaScript program to rotate the string 'w3resource' 
     in right direction by periodically removing one letter 
     from the end of the string and attaching it to the front. 
*/

/*
    Strategy:
    1/ Accces the last char: str[str.length - 1]
    2/ Get the rest before last char: str.slice(0, -1)
    3/ Set the target string to be: 1/ + 2/ -> print out
    4/ Keep looping until reach string length 
*/

function animateRotateRight(targetString) {
  setInterval(() => {
    const lastChar = targetString[targetString.length - 1];
    const beforeLastChar = targetString.slice(0, -1);
    targetString = lastChar + beforeLastChar;
    document.getElementById("target").innerHTML = targetString;
  }, 200);
}

animateRotateRight("Tran Ngoc Anh Thu - ");