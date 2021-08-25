// HANDLE THE CLOCK
var hoursText = "00";
var minutesText = "00";
var secondsText = "00";
var clock = document.getElementsByClassName("time__display");
clock[0].innerHTML = format_time(new Date());

function format_time(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (seconds < 9) {
    seconds = seconds + 1;
    secondsText = "0" + seconds;
  } else if (seconds < 59) {
    seconds = seconds + 1;
    secondsText = seconds;
  } else {
    minutes = minutes + 1;
    seconds = 0;
    secondsText = "00";
  }

  if (minutes <= 9) {
    minutesText = "0" + minutes;
  } else if (minutes <= 59) {
    minutesText = minutes;
  } else {
    hours = hours + 1;
    minutes = 0;
    minutesText = "00";
  }

  if (hours <= 9) {
    hoursText = "0" + hours;
  } else if (hours <= 23) {
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

// HANDLE THE BUTTONS
var final_calculation = "";
var final_operator = "";
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

// handle C
document.getElementById("k12").addEventListener("click", () => {
  final_calculation = "";
  final_operator = "";
  showing_on_result = "";
  result_area[0].innerHTML = "0";

  // remove effect from all operators
  var operators = document.getElementsByClassName("operator");
  for (const o of operators) {
    if (o.classList.contains("chosen")) o.classList.remove("chosen");
  }
});

// handle operators
for (let i = 1; i <= 4; i++) {
  document.getElementById("o" + i).addEventListener("click", () => {
    // add effect to chosen button
    var chosen_operator = document.getElementById("o" + i);
    chosen_operator.classList.add("chosen");

    // update calculation
    // if there is no operator chosen yet
    if (!final_operator) {
      if (showing_on_result) final_calculation += showing_on_result;
      else final_calculation += "0";

      final_operator = chosen_operator.innerHTML;
      final_calculation += " " + final_operator + " ";
      showing_on_result = "";
      console.log(final_calculation);

      // change the operator only when users choose another sign
    } else {
      if (final_calculation.length > 0) {
        final_calculation = final_calculation.substring(
          0,
          final_calculation.length - 3
        );
        final_operator = chosen_operator.innerHTML;
        final_calculation += " " + final_operator + " ";
        showing_on_result = "";
        console.log(final_calculation);
      }
    }

    // remove effects from other buttons
    var chosen_index = i;
    for (let j = 1; j <= 4; j++) {
      if (j == chosen_index) continue;
      var other_operators = document.getElementById("o" + j);
      other_operators.classList.remove("chosen");
    }
  });
}

// handle "=" sign
var equal_key = document.getElementById("equal");
equal_key.addEventListener("click", () => {
  if (showing_on_result && final_operator) {
    var break_down = final_calculation.split(" ");
    if (!break_down[2] && showing_on_result)
      final_calculation += showing_on_result;

    console.log(final_calculation)
    break_down = final_calculation.split(" ");

    var rs = 0;
    if (break_down[1] == "+")
      rs = parseInt(break_down[0], 10) + parseInt(break_down[2], 10);
    else if (break_down[1] == "—")
      rs = parseInt(break_down[0], 10) - parseInt(break_down[2], 10);
    else if (break_down[1] == "×")
      rs = parseInt(break_down[0], 10) * parseInt(break_down[2], 10);
    else if (break_down[1] == "÷")
      rs = parseInt(break_down[0], 10) / parseInt(break_down[2], 10);

    console.log("= " + rs);
    showing_on_result = rs.toString();
    final_calculation = "";
    final_operator = "";
    // remove effect from all operators
    var operators = document.getElementsByClassName("operator");
    for (const o of operators) {
      if (o.classList.contains("chosen")) o.classList.remove("chosen");
    }
    result_area[0].innerHTML = rs;
  }
});


// handle 0
document.getElementById("k10").addEventListener("click", () => {
  if (!(result_area[0].innerHTML.startsWith("0") &&  result_area[0].innerHTML.length == 1))
  {
    if (showing_on_result.length <= 23)
      showing_on_result += document.getElementById("k10").innerHTML;
    result_area[0].innerHTML = showing_on_result;
  }
});

// // handle ".""
// document.getElementById("k11").addEventListener("click", () => {
//   if (!showing_on_result.includes(".")) {
//     if (result_area[0].innerHTML.length == 1) showing_on_result += "0";
//     showing_on_result += ".";
//     result_area[0].innerHTML = showing_on_result;
//   }
// });
