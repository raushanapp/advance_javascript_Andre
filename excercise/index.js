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
      console.log("b", self.name);
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

//  Types of Javascript
// number
//  boolean
//  string
// undefined
// null
//  Symbol("just me")
// {}
//  lucky javascript have  operators typeof

//  Primitive type
// 1 number
// 2 boolean
// 3 string
// 4 undefined
// 5 null
//  6 Symbol("just me")

//  Non Primitive
//  1 {}
// 2 []
//  function() {}

//  Pass by value and Pass By Reference

var a = 5;
var b = a;
b++;
// array
var c = [1, 2, 3, 4, 5];
var d = [].concat(c);

d.push(198348);
console.log(c);

//  Object

let obj10 = { a: "a", b: "b", c: { deep: "try at copay me" } };
let clone = Object.assign({}, obj10);
let clone2 = { ...obj10 }; // this called shallow clone
let superClone = JSON.parse(JSON.stringify(obj10));

obj10.c = 5;
obj10.c.deep = "hahaha hahah";
console.log(obj10);
console.log(clone);
console.log(clone2);
console.log(superClone);

// Type coercoin
1 == "1"; // true check is 1==1
-0 === +0; // ==> true but technically
Object.is(-0, +0);
NaN === NaN;

//  exercise we need explain why this happen
false == ""; // true
false == []; // true
false == {}; // true
"" == 0; // // true
"" == []; // true
"" == {}; // true
0 == []; // true
0 == {}; // false
0 == null; // false

//  JTS : Dynamic vs Static type explain better with digram and code example
//  Weakly vs Strong typed   explain better with digram and code example

// JTS: Static Typing in javascript

//  Function are Objects in javascript

const ob = {
  two() {
    return 2;
  },
};

ob.two();

//  another  creating a function

const four = new Function("num", "return num");

four(4);

// Function are first class citizens in JS
// 1

var stuff = function () {};

// 2
function g(fn) {
  fn();
}

g(function () {
  console.log("hi there");
});

//  3

function h() {
  return function f() {
    console.log("Bye");
  };
}

var i = h();
i();

// Extra bit care ful when using inside loop function

//  bad way

for (let i = 0; i < 5; i++) {
  function a() {}
  a();
}

//  write way

function t() {}
for (let i = 0; i < 5; i++) {
  t();
}

//  Reference error
function z() {
  return param;
}

z();

function v(param = 6) {
  return param;
}

v();
v(6);

//  Higher order function explain with code

const multiplyBy = (num1) => {
  return (num2) => {
    return num1 * num2;
  };
};

//  one liner
const multiplyBy2 = (num1) => (num2) => num1 * num2;

const multiplyByTwo1 = multiplyBy(2);
const multiplayBySix = multiplyBy(6);
multiplyByTwo1(4);
multiplayBySix(6);

// Closures

function j() {
  let g = "grandpa";
  return function k() {
    let f = "father";
    return function l() {
      let s = "son";
      return `${g} > ${f} > ${s}`;
    };
  };
}

j()()();

function boo(s) {
  return (n) => {
    return (n2) => {
      console.log(`${s} > ${n} > ${n2}`);
    };
  };
}
boo("hi")("Tim")("becca");
// one liner

const booo = (s) => (n) => (n1) => console.log(`${s} > ${n} > ${n2}`);

//  5 years

boo("one")("two")("three");

// Exercise

function callMeMaybe() {
  const cm = "Hi! I am now here";
  setTimeout(() => {
    console.log(cm);
  }, 4000);
}
callMeMaybe();

function callMeMaybe1() {
  setTimeout(() => {
    console.log(cm);
  }, 4000);
  const cm = "Hi! I am now here";
}

callMeMaybe1();

// Closures and Memory

// Memory efficient
function heavyDuty(idex) {
  const bA = new Array(7000).fill("2");
  console.log("created!");
  return bA[idex];
}

heavyDuty(688);
//  call function many time many times
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

function heavyDuty2() {
  const bA = new Array(7000).fill("2");
  console.log("created! Again!");
  return function (i) {
    return bA[i];
  };
}

//  Encapsulation

const makeNuclearButton = () => {
  let timerWithoutDestruction = 0;
  const passTime = () => timerWithoutDestruction++;
  const totalPeaceTime = () => timerWithoutDestruction;
  const l = () => {
    timerWithoutDestruction = -1;
    return "BOOM";
  };
  setInterval(passTime, 1000);

  return {
    // launch: l,  i do not want to launch function
    totalPeaceTime: totalPeaceTime,
  };
};

let ohno = makeNuclearButton();
console.log(ohno); // nothing happen getting undefined
ohno.totalPeaceTime();

// Exercise

let view;

function initialize() {
  view = "View";
  console.log("view has been set!");
}

initialize();
initialize();
initialize();
initialize();
console.log(view); // this called fourt times

//  solve this use closures
let views;
function initialize() {
  let called = 0;
  return () => {
    if (called > 0) {
      return;
    } else {
      views = "View";
      called++;
      console.log("view has been set!");
    }
  };
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(views);

//  Exercise
//  first1
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log("I am at index : " + arr[i]);
  }, 3000);
}

for (var i = 0; i < arr.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log("I am at index : " + arr[closureI]);
    }, 3000);
  })(i);
}

//  Prototypal inheritance

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

// const singLizard = dragon.sing.bind(lizard);

// console.log(singLizard());

// dragon.sing();
// dragon.fight();

lizard.__proto__ = dragon; // we should't use here
// dragon.isPrototypeOf(lizard);
// lizard.sing();
// lizard.fire;
// lizard.fight();

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

//  inheritance

let humans = {
  mortal: true,
};

let socrates = Object.create(humans);
socrates.age = 45;
console.log(humans.isPrototypeOf(socrates));

//  Only functions have the prototype property
//  what does means

// Exercise - extend the functionality of built in object

// #1
//  Data object => to have new method .lastyear()
//  which shows you last 'YYYY' format.

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date("1900-10-10").lastYear();

// Result 1899

// #Bouns
// Mofify .map() to print "HAHAHA" at the end of each item

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "HAHA");
  }
  return arr;
};

console.log([1, 2, 3].map());

// How would you be able to create your own .bind() method using call or apply.
// Hint:
// Function.prototype.bind = function(){
// }
// See the attached solution when you are ready!

Function.prototype.bind = function (callmeLater) {
  const self = this;
  return function () {
    return self.apply(callmeLater, arguments);
  };
};

//  OOP Object orirented Programming in javascripts

const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "Attack with " + elf.weapon;
  },
};

elf.attack();

const elf2 = {
  name: "Sally",
  weapon: "bow",
  attack() {
    return "Attack with " + elf.weapon;
  },
};

elf.attack();
elf2.attack();

//  Factory function and //  to imporve
const elfFunctionsStore = {
  attack() {
    return "Attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctionsStore);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf("Peter", "stones");
peter.attack = elfFunctionsStore.attack;
peter.attack();

const sam = createElf("Sam", "stones");
sam.attack = elfFunctionsStore.attack;
sam.attack();

//  Constructor function

function Elf4(name, weapon) {
  console.log("this", this); // {} here empty object because we have't created object
  this.name = name;
  this.weapon = weapon;
  console.log("this", this); // here we can can see the object
}

const pt = new Elf4("Peter", "stones");

const sam = new Elf4("Sam", "stones");

Elf4.prototype.attack = function () {
  return "attack with " + this.weapon;
};

//  here is another way to create
Elf4.prototype.build = function () {
  function building() {
    return this.name + " builds a house";
  }

  return building.bind(this);
};

Elf4.prototype.build = function () {
  const self = this;
  function building() {
    return this.name + " builds a house";
  }

  return building();
};

console.log(pt.build()());
console.log(pt.attack());

Elf4.prototype.attack = () => {
  let w = "testing ";
  return "attack with " + this.weapon;
};
//  Only functions have acces to prototype not object like pt or sam
//  Only constructor function to have ablity to use them
console.log(pt.attack());

//  this function constructor used here to create object

const Elf5 = new Function(
  "name",
  "weapon",
  `this.name=name; this.weapon=weapon`,
);

const sarah = new Elf5("Sarah", "fireworks");

// if we are using this keyword inside arrow function so in this case this keyword lexically bind so we can not access other side property and method
//  only we can access where is written then can use this

//  funny thing about JS

// OOP Classes
// ES6 Class

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with " + this.weapon;
  }
}

const peters = new Elf("Peter", "Stones"); // new instanceate

console.log(peters.attack());

console.log(peters instanceof Elf); // true

// Object.create() vs class
// This Keyword

//  new binding this

function Person(name, age) {
  this.name = name;
  this.age = aga;
}

const person1 = new Person("Xavier", 55);

//  implicit binding
const person = {
  name: "karen",
  age: 40,
  hi() {
    console.log("hi" + this.name);
  },
};

//  explicit binding
const person3 = {
  name: "karen",
  age: 40,
  hi: function () {
    console.log("hi" + this.setTimeout);
  }.bind(window),
};
person3.hi;

//  arrow function

const person4 = {
  name: "Rohan",
  age: 25,
  hi: function () {
    var inner = () => {
      console.log("Hi" + this.name);
    };
    return inner();
  },
};

person4.hi();

//  Inheritance

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "Attact with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    // console.log(this);
    this.type = type;
  }
}

class Orge extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    return "strongest fort in the world mš";
  }
}

// Orge.prototype.makeFort under the hood javascripts doing like this

const dolby = new Elf("Bobly", "cloth", "house");

const shrek = new Orge("Shrek", "club", "green");
console.log(shrek.makeFort());

// console.log(dolby);
console.log(Orge.isPrototypeOf(shrek)); // false
console.log(Orge.prototype.isPrototypeOf(shrek)); // true
console.log(Character.prototype.isPrototypeOf(Orge.prototype)); //true;

//  we check better way

console.log(dolby instanceof Elf); // true
console.log(dolby instanceof Orge); // false
console.log(dolby instanceof Character); // true

//  we are using here OOP all pillars to explain things

class Character1 {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "Attact with " + this.weapon;
  }
}

class ElfP extends Character1 {
  constructor(name, weapon, type) {
    super(name, weapon);
    // console.log(this);
    this.type = type;
  }

  attack(cry) {
    return "Attack with Cry : " + cry;
  }
}

class OrgeP extends Character1 {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  attack() {
    return "ahhhhh";
  }
  makeFort() {
    return "strongest fort in the world mš";
  }
}

const dolby1 = new ElfP("Bobly", "cloth", "house");

const shrek1 = new OrgeP("Shrek", "club", "green");
console.log(dolby.attack("Weee"));

//  Exercise
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
// const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

// victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

class Queen extends Character1 {
  constructor(name, weapon, kind) {
    super(name, weapon);
    this.kind = kind;
  }
  attack() {
    console.log(super.attack(), "====>>> super class");
    return `I am the ${this.name} of ${this.kind}, now bow down to me!`;
  }
}

const victoria = new Queen("Victoria", "army", "herats");
console.log(victoria.attack());

//  Functional Programming

// #1 Curry
// #2 Partial Application
// #3 Pure Function
// #4 Referential Transparency
// #5 Compose
// #6 Pipe

//  Amazon  shopping

const user = {
  name: "Rohan",
  active: true,
  cart: [],
  purchases: [],
};

//  Implement a cart feature
// 1 add item to cart
// 2  add 3% tax to item in cart
// 3 Buy item: cart ---> purchases
// 4 Empty cart

//  Bouns
// Idempotence : mean's if we run the function multiple time it should not change the output

function notGood(num) {
  return Math.random(num);
}

notGood(5); // 0.123
notGood(5); // 0.456

//  not matter how many time we run the function it should return same output
//  but still have idempotence because we are not changing the output of the function but still have side effect because we are using random number
//  when come to parrel and distributed computing we need to have idempotence function because if we run the function multiple time it should not change the output
function notGood1(num) {
  console.log(num);
}
notGood1(5);

Math.abs(Math.abs(-50)); // 50

// Imperative vs Declarative
//  first example imperative way
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// declarative way
[1, 2, 3, 4, 5].forEach((i) => console.log(i));

//  Immutability
//  Immutability means not changing the data and not changing the state of the data and not changing the object and not changing the array and not changing the string
//  we can not change the data but we can create new data and return new data

const objR = { name: "Rohan" };
function clones(obj) {
  return { ...obj }; // this pure
}

function updateName(obj) {
  const obj2 = clones(obj);
  obj2.name = "Rishu";
  return obj2;
}

//  here we are direct change the name called mutation

updateName(objR);
console.log(objR);

// objR.name = "Rishu"; // this is mutation

// HOF
const hof = () => () => 5;
const hof1 = (fn) => fn(6);
hof1((num) => num * 10);

// Closure

const closures = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const increment = closures();
increment();
increment();
increment();

//  here is example closures for data hiding and data encapsulation

function makeCount() {
  let count = 55;
  return function getCount() {
    return count;
  };
}

const getCounter = makeCount();
getCounter();
getCounter();
getCounter();
