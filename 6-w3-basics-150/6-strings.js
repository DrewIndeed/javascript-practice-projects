/**
 * Working with string
*/

var target = "andrewlenguyen";

// remove at a certain index
function removeAt(string, index) {
    return (
        string.slice(0, index) +
        string.slice(index + 1)
    )
}

console.log(removeAt(target, 2));

// insert at a certain index
function insertAt(string, index, item) {
    return (
        string.slice(0, index) + item +
        string.slice(index + 1)
    )
}

console.log(insertAt(target, 2, 'SOWHAT'));


// reverse a string 
function reverse(target) {
    return target.split('').reverse().join('');
}

console.log(reverse(target));


// replace all characters with an char or a string
function replaceAllCharWith(target, targetChar, item) {
    const targetNew = target.split('').map(char => {
        if (char == targetChar)
            return item;
        else return char;
    });
    return targetNew.join('');
}

console.log(replaceAllCharWith(target, 'e', '#'));


// sort all existing letters in string in ascending order
function allLettersInOrder(target) {
    return target.split('').sort().join('');
}

console.log(allLettersInOrder(target));