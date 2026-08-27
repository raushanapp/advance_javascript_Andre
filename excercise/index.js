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

// let array = [];
// for (let i = 5; i > 1; i++) {
//   array.push(i - 1);
// }

//  1. global variable

var a = 1;
var b = 1;
var c = 1;

//  event listener

var element = document.getElementById("button");

// element.addEventListener("click", onClick);
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

// How to prevent stack overflow using recursion?
//fill array with 60000 elements

const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();
  if (item) {
    setTimeout(removeItemsFromList, 0);
  } else {
    console.log("END = " + list.length);
  }
}

removeItemsFromList();

console.log("END => " + list.length);

// Execution Context

function printName() {
  return "Deepak Kumar";
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

sayMyName();

//  printName
// findName()
//  sayMyName()
//  global() execution context

// Lexical Environment
//  where we write the code it's simply means
//  lexical means where the code rin and

//  execution context tell you which lexical environment we  are running
//  very first thing have lexical environment called global lexical environment

function test() {
  function a() {}
}

//  Hoisting
//  Hoisting is behaviour of moving variable and function declaration to the top of the respective environment during compilation phase.
//  variable are partially hoisted but functions are full hoisted

console.log("1----------");

// var teddy = undefined;
//  the function move uped
// function sing() { adding to the memory
//   console.log("ohhh la la la");
// }

console.log(teddy);
console.log(sing());
console.log(sing2()); // getting error
//  only console .log sing2 not execute then get undefined
console.log(sing2); // undefined

var teddy = "bear";
// function expression
var sing2 = function () {
  console.log("uhhhh la la la");
};

//  function declaration
function sing() {
  console.log("ohhh la la la");
}

//  const keyword and let keyword does not hoisted in javascript only var and function keyword hoisted

// Exercise
//  during hoisting time
one = undefined;
//  second one ignore

var one = 1;
var one = 2;

console.log(one); // 2

a();

function a() {
  console.log("hi");
}

function a() {
  // re-write in the memory
  console.log("Bye");
}

var favouritedFood = undefined; // this hoisted
var foodThoughts = undefined; // this is hoisted

// favouritedFood = "grapes"

var favouritedFood = "grapes";

var foodThoughts = function () {
  //  here execution context created and hoisted variable and function
  var favouritedFood = undefined;
  console.log("Original favourite food : " + favouritedFood);
  var favouritedFood = "Sushi";
  console.log("New favourite food : " + favouritedFood);
};

foodThoughts();

//  another question
// Exercise 4
function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();

  function littleBrother() {
    return "no me!";
  }
}

console.log(bigBrother());
