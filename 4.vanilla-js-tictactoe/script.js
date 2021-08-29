var gridItems = document.getElementsByClassName("grid-item");
var currentMark = "X";
var won = false;

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", () => {
    if (!gridItems[i].innerHTML) {
      gridItems[i].innerHTML = currentMark;
      currentMark = currentMark == "X" ? "O" : "X";
    }

    // evaluate the rows
    for (let j = 1; j <= 3; j++) {
      var row = document.getElementsByClassName("row" + j);
      if (
        row[0].innerHTML == row[1].innerHTML &&
        row[1].innerHTML == row[2].innerHTML &&
        row[0].innerHTML != "" &&
        row[1].innerHTML != "" &&
        row[2].innerHTML != ""
      ) {
        row[0].classList.add("won");
        row[1].classList.add("won");
        row[2].classList.add("won");
        gridItems[i].style.pointerEvents = "none";
        won = true;
      }
    }

    // evaluate the columns
    for (let k = 1; k <= 3; k++) {
      var col = document.getElementsByClassName("col" + k);
      if (
        col[0].innerHTML == col[1].innerHTML &&
        col[1].innerHTML == col[2].innerHTML &&
        col[0].innerHTML != "" &&
        col[1].innerHTML != "" &&
        col[2].innerHTML != ""
      ) {
        col[0].classList.add("won");
        col[1].classList.add("won");
        col[2].classList.add("won");
        gridItems[i].style.pointerEvents = "none";
        won = true;
      }
    }

    // evaluate the diagonal lines
    if (
      gridItems[0].innerHTML == gridItems[4].innerHTML &&
      gridItems[4].innerHTML == gridItems[8].innerHTML &&
      gridItems[0].innerHTML != "" &&
      gridItems[4].innerHTML != "" &&
      gridItems[8].innerHTML != ""
    ) {
      gridItems[0].classList.add("won");
      gridItems[4].classList.add("won");
      gridItems[8].classList.add("won");
      gridItems[i].style.pointerEvents = "none";
      won = true;
    }
    if (
      gridItems[2].innerHTML == gridItems[4].innerHTML &&
      gridItems[4].innerHTML == gridItems[6].innerHTML &&
      gridItems[2].innerHTML != "" &&
      gridItems[4].innerHTML != "" &&
      gridItems[6].innerHTML != ""
    ) {
      gridItems[2].classList.add("won");
      gridItems[4].classList.add("won");
      gridItems[6].classList.add("won");
      gridItems[i].style.pointerEvents = "none";
      won = true;
    }

    if (won) {
      setTimeout(() => {
        alert(currentMark == "X" ? "O" + " won!" : "X" + " won!");
        window.location.reload();
      }, 550);
    }
  });
}
