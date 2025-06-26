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

let contrarrestar = 3;
function ejemplo() {
  console.log(contrarrestar);
  contrarrestar = contrarrestar - 1;
  if(contrarrestar === 0) return;
  ejemplo();
}
ejemplo();
//console.log('linea uno');
//console.log('linea dos');
//console.log('linea tres');


let horario = 3;
function miDia() {
  console.log(horario);
  horario = horario - 1;
  if(horario === 0) return;
  miDia();
}
miDia();
//console.log('Manana');
//console.log('Tarde');
//console.log('Noche')


let salario = 5;
while (salario > 0) {
  console.log(salario);
  salario--;
}