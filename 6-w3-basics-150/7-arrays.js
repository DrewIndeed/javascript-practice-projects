// swap 2 items using indexes
function swapItemsAt(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
    return array;
}

// console.log(swapItemsAt([1, 2, 3, 4, 5], 0, 2));


// kth greatest element in array
function kthGreatestOf(k, array) {
    array.sort((a, b) => b - a);
    return array[k - 1];
}

// console.log(kthGreatestOf(2, [8, 2, 3, 4, 9, 6, 7, 1]));


// get the greatest sum when sum a consecutive number of digit in the array
function maxSumEveryConsecutiveDigit(array, consecutiveNum) {
    if (consecutiveNum > array.length || consecutiveNum < 1) return "Nah ah!";

    let max = 0;
    let runTo = array.length - consecutiveNum + 1;
    for (let i = 0; i < runTo; i++) {
        let sum = 0;
        for (let j = i; j < (i + consecutiveNum); j++) {
            console.log(array[j])
            sum = sum + array[j];
        }
        console.log("sum:", sum);
        console.log("------")
        if (sum > max) max = sum;
    }
    return max;
}

console.log("Max is:", maxSumEveryConsecutiveDigit([8, 2, 3, 4, 9, 6, 7, 1], 4));