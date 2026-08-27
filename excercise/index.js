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
// console.log(sing2()); // getting error Uncaught TypeError: sing2 is not a function
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

// aa();

// function aa() {
//   console.log("hi");
// }

// function aa() {
//   // re-write in the memory
//   console.log("Bye");
// }

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

  // function littleBrother() {
  //   return "no me!";
  // }
}

bigBrother();

console.log(bigBrother());

//  Function Expression
var canada = () => {
  console.log("Clod");
};

//  Function Declaration

function india() {
  console.log("Warm");
}

// Function
// Invocation / Call / Execution
canada();
india();

function marry(person1, person2) {
  console.log("Arguments", arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");

//  varoable environment

function two() {
  var isValid; // this remain undefined
}

function one() {
  var isValid = true; // local environment or variable env
  two(); // new EC
}

var isValid = false;
one();
// two --- undefined  first pop up off  and also memory space gone
//  we just created new execution context one () --- true second popup off   and also memory space gone
//  global EC -- false third pop off  and also memory space gone
//  each execution have own variable environment

//  Scope Chain and static scope

var x = "x";

function findName() {
  console.log(x);
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  console.log(x);
  return "Rohan shekhar";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();

//  this function rin lexical different way

function sayMyName1() {
  // know as function lexical environment link each other
  var a = "a";
  return function findName() {
    var a = "a";
    console.log(c);
    return function printName() {
      var c = "c";
      return "Maa ";
    };
  };
}

sayMyName1();
//  undefind mean's we have variable but not asign anythigs now

//  exercise
// we can use use stirct weired things
function weird() {
  height = 50; // this is called leakage of global variable and but waht javascript does here under the hood see the is't create any variable either local and global
  //  so see that and create variable
  return height;
}

weird();

var heyhey = function doodle() {
  //  do something
  //  here we can access the doodle
  // doodle();
  return "Heyhey";
};

heyhey(); // Heyhey
//  if i run the doodle
doodle(); // getting reference error doodle is not defined because doodle has own execution context or variable environment

// Function vs scope
// vs
// block scope
//  scope mean's what variable have to access to you

if (5 > 4) {
  var secret = "12345";
}
//  suppose i created using function then still not able to access the secret
function d() {
  var secret = "123459899";
}
console.log(secret); // in this access we can access the secret

if (6 > 5) {
  let secret = "123456"; // but this case we can not access the secret
}

console.log(secret, "2");

// execise

function loop() {
  //  if i use here let keyword this not allow you to access out side of scope because only inside curly brace and function and if statement
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Final", i);
}
loop();

//  global variable or global lexical environment
//  waht be called populating the global name space
//  variable collison

//  IIFE

(function () {
  // but here we call the function expression
  var a = 1;
})();

// function(){}() // we can not called function declaration after next error unexpected token

//  THIS KEYWORD
//  this is  the object that the function is a property of

const obj = {
  name: "Zilly",
  // sing: function () {
  //   return "lalala" + this.name;
  // },
  sing() {
    return "lalala" + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

obj.sing();
obj.singAgain();

// two benifit
//  1:  gives methods acess to their object
// 2: execute  same code for multiple obejcts

//  example

function importantPerson() {
  console.log(this.name + "!");
}

const name = "Sunny";

const obj1 = {
  name: "Cassy",
  importantPerson: importantPerson,
};

const obj3 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

importantPerson();

//  another execrise

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

const obj5 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc();
  },
};

//  solve
const obj6 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", self);
    };
    anotherFunc();
  },
};

const obj7 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

const obj8 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var self = this;
    var anotherFunc = function () {
      console.log("b", self);
    };
    anotherFunc();
  },
};

//  Call Apply and Bind

const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

wizard.heal();
//  here call
wizard.heal.call(archer, 50, 30);
// apply
wizard.heal.apply(archer, [50, 40]);
//  call and apply for usefull for browring methods

//  bind ==> return new function with parameter
// useful for calling later when we  need
const healArcher = wizard.heal.bind(archer, 100, 40);
healArcher();

// bind and currying

//  function currying

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(4));

// exercise

var e = {
  name: "Jay",
  say() {
    console.log(this);
  },
};

var f = {
  name: "Jay",
  say() {
    return {
      function() {
        console.log(this);
      },
    };
  },
};

var g = {
  name: "Jay",
  say() {
    return () => console.log(this);
  },
};
