//  interpreter vs compiler

function someCalulation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalulation(5, 4);
}

//  inline caching

function findUser() {
  return `Found ${user.firstName} ${UserActivation.lastName}`;
}

const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

//  what compier does inline caching instead of calling multiple times

//  just make like this Found Johnson Junior

// Hidden Classes

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

//  that code make the compier slow
obj1.a = 30;
// obj1.b = 100;

// obj2.a = 30;
// obj2.b = 100;

//  Delete keyword

// delete obj1.x = 40;

//  call stack + Memory Heap

const number = 610; // allocate memory for number;
const string = "some text"; // allocate memory for a string;

const human = {
  // allocate memory for an object.... and it's value
  first: "Raushan",
  last: "Kumar",
};

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate();

//   call stack

// memory leaks

let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}

//  1. global variable

var a = 1;
var b = 1;
var c = 1;

//  event listener

var element = document.getElementById("button");

element.addEventListener("click", onClick);
//  but never removed the event listener than happen memory leak because user goes back fourth and again and again

// setInterval

setInterval(() => {}, 0);

//  single thread  synchronous running javacripts

//  javascript runtime
//  Call stack  and Memory Heap
//  Web API ==> DOM , Fetch(), setTimeOut(),
// Event Loop
//  Callback queue

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
