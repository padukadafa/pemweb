document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = { text: taskText, completed: false };
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      addTaskToDOM(task);
      taskInput.value = "";
    }
  });

  function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center p-2 border-b border-gray-300";
    if (task.completed) {
      li.classList.add("line-through", "text-gray-400");
    }

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    li.appendChild(taskText);

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Belum Selesai" : "Selesai";
    completeButton.className =
      "bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600";
    completeButton.addEventListener("click", () => {
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      li.classList.toggle("line-through", task.completed);
      li.classList.toggle("text-gray-400", task.completed);
      completeButton.textContent = task.completed ? "Belum Selesai" : "Selesai";
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className =
      "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600";
    deleteButton.addEventListener("click", () => {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
});
