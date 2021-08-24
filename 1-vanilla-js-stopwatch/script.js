// time display area to manipulte
var timeDisplayArea = document.getElementsByClassName("watch__contents time-display");
var currentTime;

var hoursText = "00";
var minutesText = "00";
var secondsText = "00";

var hours = 0;
var minutes = 0;
var seconds = 0;

// HANDLE START BUTTON
var startButton = document.getElementById("start");
function start() {
    if (hours == 23 && minutes == 59 && seconds == 59) {
        clearInterval(startInterval);
        alert("Stop watch has reached 24 hours or 1 day!");
    }

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

    currentTime = hoursText + ":" + minutesText + ":" + secondsText;
    timeDisplayArea[0].innerHTML = currentTime;
}
var startInterval;
startButton.addEventListener("click", () => {
    startInterval = window.setInterval(start, 1000);
});

// HANDLE STOP BUTTON 
var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
    clearInterval(startInterval);
    timeDisplayArea[0].innerHTML = currentTime;
});

// HANDLE RESET BUTTON
var resetButton = document.getElementById("reset");
// set back to default
resetButton.addEventListener("click", () => {
    timeDisplayArea[0].innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(startInterval);
});