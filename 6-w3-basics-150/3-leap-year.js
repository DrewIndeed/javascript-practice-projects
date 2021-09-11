/*
    Write a JavaScript program to determine
    whether a given year is a leap year in the Gregorian calendar. 
*/

// Rule: (4 and not 100) Or (400)
function isLeapYear(targetYear) {
    return (
        (targetYear % 4 == 0 && targetYear % 100 != 0)
        || (targetYear % 400 == 0)
    )
}

console.log(isLeapYear(2020));