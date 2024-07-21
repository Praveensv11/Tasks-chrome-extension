let task = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
let allLi;
function renderTasks() {
  ul.innerHTML = "";
  taskArr.forEach((task) => {
    let liElement = document.createElement("li");
    liElement.innerHTML = task;
    ul.appendChild(liElement);
  });
}

renderTasks();

button.addEventListener("click", function (e) {
  e.preventDefault();

  taskArr.push(task.value);
  localStorage.setItem("tasks", JSON.stringify(taskArr));
  task.value = "";

  renderTasks();
});

ul.addEventListener("dblclick", function (event) {
    if (event.target.tagName === 'LI') {
        const taskValue = event.target.textContent;

        event.target.remove();

        const taskIndex = taskArr.indexOf(taskValue);
        if (taskIndex > -1) {
            taskArr.splice(taskIndex, 1);
        }

        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
});
