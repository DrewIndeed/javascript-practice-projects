// swap 2 items using indexes
function swapItemsAt(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
    return array;
}

console.log(swapItemsAt([1, 2, 3, 4, 5], 0, 2));

function kthGreatestOf(k, array) {
    array.sort((a, b) => b - a);
    return array[k - 1];
}

console.log(kthGreatestOf(2, [8, 2, 3, 4, 9, 6, 7, 1]));