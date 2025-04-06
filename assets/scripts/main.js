function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskStatus = "In progress";

  let newTask = document.createElement("li");
  newTask.innerHTML = `
    ${taskInput.value}<br>
    ${new Date().toLocaleString()} | ${taskStatus}
  `;
  document.getElementById("task-list").appendChild(newTask);

  let savedTasks = localStorage.getItem("tasks") || "";
  savedTasks += newTask.outerHTML;
  localStorage.setItem("tasks", savedTasks);

  taskInput.value = "";
}

document.getElementById("add-task-btn").onclick = () => addTask();

document.getElementById("switch").onclick = () => {
  document.body.classList.toggle("dark-theme");
};

