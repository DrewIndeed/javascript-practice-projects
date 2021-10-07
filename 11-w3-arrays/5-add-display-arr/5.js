let displayBtn = document.getElementById("display");
let addBtn = document.getElementById("add");
let rsArea = document.getElementById("result-display");

let values = localStorage.getItem("values");
let result = values ? JSON.parse(values) : [];
let q = new URLSearchParams(window.location.search);
let target = q.get("item");
if (target) {
  result.push(
    typeof target === "string" && Number.isNaN(parseInt(target))
      ? target
      : parseInt(target)
  );
  localStorage.setItem("values", JSON.stringify(result));
  setTimeout(() => {
    window.location.replace(
      "file:///Users/anle/Documents/GitHub/javascript-practice-projects/11-w3-arrays/5-add-display-arr/5.html"
    );
  }, 1000);
}

let clickedDisplay = false;
displayBtn.addEventListener("click", () => {
  if (!clickedDisplay) {
    clickedDisplay = true;
    result.forEach(
      (item, index) =>
        (rsArea.innerHTML += `<li>Element ${index}: ${item}</li>`)
    );
  } else {
    clickedDisplay = false;
    rsArea.innerHTML = "";
  }
});
