// swap 2 items using indexes
function swapItemsAt(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
    return array;
}

console.log(swapItemsAt([1, 2, 3, 4, 5], 0, 2));
