// get data list from local storage
var currentlyOnStorage = JSON.parse(localStorage.getItem("contentList"));
var contentList = currentlyOnStorage === null ? [] : currentlyOnStorage;

function save_data() {
  // add new data to local storage
  contentList.push(document.getElementById("content").value);
  localStorage.setItem("contentList", JSON.stringify(contentList));
}

function getDataAndRender() {
  // add new task slot
  var todoSlot = document.getElementById("current-tasks");
  if (contentList.length > 0) {
    todoSlot.innerHTML = "";
    for (const task of contentList) {
      todoSlot.innerHTML += '<div class="task">' + task + "</div>";
    }
  } else if (contentList.length == 0) {
    todoSlot.innerHTML = `<p id="empty-placeholder">Let's add some tasks and be productive 🍀</p>`;
  }
}

function deleteOnClick() {
  var allTasks = document.getElementsByClassName("task");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", () => {
      allTasks[i].classList.add("disappearing");
      setTimeout(() => {
        contentList.splice(i, 1);
        localStorage.setItem("contentList", JSON.stringify(contentList));
        getDataAndRender();
        deleteOnClick();
      }, 1000);
    });
  }
}

getDataAndRender();
deleteOnClick();
