/**
 * Remove + Add at an index of a string
*/

var target = "andrewlenguyen";

function removeAt(string, index) {
    return (
        string.slice(0, index) +
        string.slice(index + 1)
    )
}

console.log(removeAt(target, 2));

function insertAt(string, index, item) {
    return (
        string.slice(0, index) + item +
        string.slice(index + 1)
    )
}

console.log(insertAt(target, 2, 'SOWHAT'));

function reverse(target) {
    return target.split('').reverse().join('');
}

console.log(reverse(target));


function replaceCharWith(target, targetChar, item) {
    const targetNew = target.split('').map(char => {
        if (char == targetChar)
            return item;
        else return char;
    });
    return targetNew.join('');
}

console.log(replaceCharWith(target, 'e', '#'));