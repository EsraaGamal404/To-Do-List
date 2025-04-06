function addTask(): void {
  const taskInput = document.getElementById("task-input") as HTMLInputElement;
  const taskStatus = "In progress";
  const newTask = document.createElement("li");

  newTask.innerHTML = `
    ${taskInput.value}<br>
    ${new Date().toLocaleString()} | ${taskStatus}
  `;

  const taskList = document.getElementById("task-list");
  if (taskList) {
    taskList.appendChild(newTask);
  }

  let savedTasks = localStorage.getItem("tasks") || "";

  savedTasks += newTask.outerHTML;
  localStorage.setItem("tasks", savedTasks);
  taskInput.value = "";
}

document.getElementById("add-task-btn")?.addEventListener("click", addTask);

const switchButton = document.getElementById("switch");
if (switchButton) {
  switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}