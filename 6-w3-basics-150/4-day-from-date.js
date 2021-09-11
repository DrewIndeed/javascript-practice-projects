/**
 * Write a JavaScript program to find 1st January 
 * is being a Sunday between 2014 and 2050. 
 */

/** 
 * Strategy:
 * 1/ new Date(year, month) -> the first date in that month of that year
 * 2/ Loop through all the year and getDay()
 *  If it is 0, print out those years
*/

function isSundayBetween(firstYear, secondYear, ofMonth, ofDate) {
    for (let i = firstYear; i <= secondYear; i++) {
        const date = new Date(i, ofMonth, ofDate);
        if (date.getDay() == 0) console.log(i);
    }
}

isSundayBetween(2014, 2050, 0, 1);