/*
    1. Write a JavaScript program to display the current day and time in the following format.

    Sample Output : 
    Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/

function printCurrentDatetime() {
  // an array to represent the days of the week
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // get current date
  const currentDate = new Date();
  // print out today's day of the week
  console.log(`Today is ${weekdays[currentDate.getDay()]}.`);

  // print out current time in given format HH PM : MM : SS
  const ampm = currentDate.getHours() > 12 ? "PM" : "AM";
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  // handle time digits
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  console.log(`Current time is: ${hour} ${ampm} : ${minute} : ${second}.`);
}

printCurrentDatetime();