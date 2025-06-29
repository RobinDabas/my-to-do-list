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

function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(6))



function spanishSpeakingCaribbeanNations(esp) {
  console.log('The Spanish-speaking Caribbean nations with the highest amount of European ancestry are ' + esp);
}
spanishSpeakingCaribbeanNations('Cuba and Puerto Rico.')



function monthlyEarnings(eBooks, dropshipping) {
  return eBooks + dropshipping;
}

var eBooks = 2000;
var dropshipping = 5000;

var yearlyIncome = monthlyEarnings(eBooks, dropshipping) * 12;

console.log();
yearlyIncome


/*OOP:Create an object (e.g., car) with properties (speed) and methods (accelerate).
Use this to update properties.
Example: car.accelerate() increases speed.

/*
function car() {
  this.speed = 0;
  this.accelerate = function() {
    this.speed += 10;
  };
}

let myCar = new car()
console.log(myCar.speed);
myCar.accelerate();
console.log(myCar.speed); 
*/

var farmer = {
  horse: 10,
  feed: function() {
    this.horse -= 2;
  }
} 

console.log(farmer.horse);
farmer.feed();
console.log(farmer.horse);


//FP

function calculateTotal(income, expenses) {
  return income - expenses
}
var income = 8500;
var expenses = 2000;

var monthlyNetEarnings = calculateTotal(income, expenses);
console.log(monthlyNetEarnings);