/**
 * Remove + Add at an index of a string
*/

var target = "andrewlenguyen";

function removeAt(string, index) {
    return (
        string.substring(0, index) +
        string.substring(index + 1, string.length)
    )
}

console.log(removeAt(target, 2));

function insertAt(string, index, item) {
    return (
        string.substring(0, index) + item +
        string.substring(index + 1, string.length)
    )
}

console.log(insertAt(target, 2, 'SOWHAT'));