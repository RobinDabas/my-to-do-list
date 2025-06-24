function addTask(){
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if(taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('taskList').appendChild(li);
    textInput.value = '';
  }
}

function deleteTask() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
}