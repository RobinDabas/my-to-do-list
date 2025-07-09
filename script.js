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
console.log(monthlyNetEarnings);0


function miCelebracion(razon) {
  let estilo = 'color: turquoise; font-size: 30px';
  if (razon === 'ganar') {
    console.log('%cMira vos, ganaste parcero. Sos lo maximo!', estilo);
  } else if (razon === 'fallar') {
    console.log('%cVos fallaste cabron!', estilo);
  } else {
    console.log('%cIntenta de nuevo parcero. Creo en vos. Vos podes hacerlo', estilo);
  }
}
miCelebracion('fallar');







var car1 = {
  car: 20000,
  salesTax: 1.2,
  totalPrice: function() {
    var calculate = car1.car * car1.salesTax;
    console.log('Total Price:', calculate);
  }
 }
 car1.totalPrice();





















/*
 var flight1 = {
  ticket: 1700,
  tax: 1.2,
  total: function() {
    var calculation = flight1.ticket * flight1.tax;
    console.log('Total with tax:', calculation)
  }
 }
flight1.total();
*/


var boleto = 1700
var impuesto = 1.2

function precioTotal(boleto, impuesto) {
  return boleto * impuesto;
}

var pagar = precioTotal(boleto, impuesto);
console.log(pagar);



class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return `${this.name} makes a sound.`;
  }
}

class Parrot extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  sound() {
    return `${this.name} sings.`
  }
}

const myParrot = new Parrot('Polly', 'Blue Macaw Parrot')
console.log(myParrot.sound());
console.log(myParrot.name);
console.log(myParrot.type);


class LuxuryCar {
  constructor(brand) {
    this.brand = brand
  }

  speed(){
    return `${this.brand} is very fast.`;
  }
}

class Lamborghini extends LuxuryCar {
  constructor(brand, type) {
    super(brand);
    this.type = type;
  }

  speed(){
    return `${this.brand} ${this.type} is one of the fastest cars in the world.`
  }
}

class GWagon extends Lamborghini {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  speed(){
    return `The brand ${this.brand} and the model ${this.model}, is one of the most luxurious cars in the world.`
  }
}

/*
const myLuxuryCar = new Lamborghini('Lamborghini', 'Aventador');
console.log(myLuxuryCar.speed());
console.log(myLuxuryCar.brand);
console.log(myLuxuryCar.type);
*/

const myLuxuryCar = new GWagon('Mercedez', 'G-wagon');
console.log(myLuxuryCar.speed());
console.log(myLuxuryCar.brand);
console.log(myLuxuryCar.model);


class Pajaro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hecho() {
    return `${this.nombre} puede imitar lo que vos decis.`
  }
} class Loro extends Pajaro {
  constructor(tipo, pais) {
    super(tipo);
    this.tipo = tipo;
    this.pais = pais;
  } 
  
  hecho() {
    return `${this.tipo} se encuentra en ${this.pais}.`
  }
}
const miPajaro = new Loro('El Loro Africano', 'el Congo')
console.log(miPajaro.hecho());
console.log(miPajaro.tipo);
console.log(miPajaro.pais)


let fecha = new Date();
console.log(fecha)

Math: Math.pow(2,5);
console.log(Math);


function Pupusa(queso) {
  this.queso = queso;
  this.derretir = function() {return `La ${this.queso} en la pupusa esta derretido. Listo pa comer ya.`; };
}

let pupusaMozzarella = new Pupusa('mozzarella');
console.log(pupusaMozzarella.derretir());