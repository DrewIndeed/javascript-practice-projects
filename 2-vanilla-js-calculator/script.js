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


