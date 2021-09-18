/**
 * Write a JavaScript program to generate a random hexadecimal color code.
*/

// console.log(document.getElementsByTagName('body')[0].style);
// console.log(Math.floor(Math.random() * 10));

function createHex() {
    const hex = Math.floor(Math.random() * 255).toString(16);
    return (hex.length == 1) ? "0" + hex : hex;
}

setInterval(() => {
    let randomColor = "#" + createHex() + createHex() + createHex();
    console.log(randomColor);
    document.getElementsByTagName('body')[0].style.backgroundColor = randomColor;
}, 100);
