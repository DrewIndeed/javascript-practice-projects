// HANDLE THE CLOCK
var hoursText = "00";
var minutesText = "00";
var secondsText = "00";
var clock = document.getElementsByClassName('time__display');
clock[0].innerHTML = format_time(new Date());

function format_time(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (seconds < 9) {
        seconds = seconds + 1;
        secondsText = "0" + seconds;
    } else if (seconds < 59){
        seconds = seconds + 1;
        secondsText = seconds;
    } else {
        minutes = minutes + 1;
        seconds = 0;
        secondsText = "00";
    }

    if (minutes <= 9) {
        minutesText = "0" + minutes;
    } else if (minutes <= 59){
        minutesText = minutes;
    } else {
        hours = hours + 1;
        minutes = 0;
        minutesText = "00";
    }

    if (hours <= 9) {
        hoursText = "0" + hours;
    } else if (hours <= 23){
        hoursText = hours;
    } else {
        hours = 0;
        hoursText = "00";
    }

    return hoursText + " : " + minutesText + " : " + secondsText;
}
setInterval(() => {
    clock[0].innerHTML = format_time(new Date());
}, 1000);


// HANDLE THE BUTTON
var showing_on_result = "";
// handle 1 - 9 
var result_area = document.getElementsByClassName("result__container");
for (let i = 1; i <= 9; i++) {
    document.getElementById("k" + i).addEventListener("click", () => {
        if (showing_on_result.length <= 23)
            showing_on_result += document.getElementById("k" + i).innerHTML;
        
        result_area[0].innerHTML = showing_on_result;
    });
}
// handle 0
document.getElementById("k10").addEventListener("click", () => {
    if (showing_on_result.length > 1) {
        showing_on_result += document.getElementById("k10").innerHTML;
        result_area[0].innerHTML = showing_on_result;
    }
});
// handle C
document.getElementById("k12").addEventListener("click", () => {
    showing_on_result = "";
    result_area[0].innerHTML = "0";
});
// handle .
document.getElementById("k11").addEventListener("click", () => {
    if (!showing_on_result.includes(".")) {
        if (result_area[0].innerHTML.length == 1)
            showing_on_result += "0";
        showing_on_result += ".";
        result_area[0].innerHTML = showing_on_result;
    } 
});
