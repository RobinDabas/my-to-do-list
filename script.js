function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if(taskInput !== '') {
    const li = document.createElement('li')
    li.textContent = taskText;
    document.getElementById('taskInput').appendChild(li)
    taskInput.value = '';
  }
} 

function deleteAllTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
}