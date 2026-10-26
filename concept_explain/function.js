// Function in javascript
//  function declaration in JavaScript
//  function expression in javascript
// anonymous function in javascript

// funtion declaration

let res = add(2, 3); // Example usage of the function
console.log(res);

function add(a, b) {
  return a + b;
}

// function expression

const multiply = function a(a, b) {
  console.log(a, b, this);
  return a * b;
};

let result = multiply(2, 3); // Example usage of the function
console.log(result);
// Example usage of the function
// console.log(res2);

const ananousFunction = function () {
  console.log("This is an anonymous function");
};
ananousFunction(); // Example usage of the anonymous function
// console.log(multiply(2, 3)); // Example usage of the function
// immediately invoked function expression

(function (a) {
  console.log(a);
})(5);

const divide = () => {
  console.log("This is a divide function", this);
};
divide(); // Example usage of the divide function

//

function test(arugments) {
  console.log(arugments); // Example usage of the function argument
}

test();

//  method

let obj = {
  two() {
    console.log("This is a method inside an object");
  },
};
obj.two(); // Example usage of the method inside the object

const three = new Function("num", "return num*3");

three(3);

function woohhooo() {}

woohhooo.apply(null, []);

let obje = {};

//  Function in Javascript is first clsss citizen, meaning it can be assigned to variables, passed as arguments, and returned from other functions.
// 1
var stuff = function () {};
// 2
function a(fn) {
  fn();
}

a(function () {
  console.log("This is a function passed as an argument");
});

//  3

function b() {
  return function c() {
    console.log("This is a function returned from another function");
  };
}

var d = b();
d(); // Example usage of the function returned from another function

//  care full when initial function inside loop and every time loop iterates, a new function is created

for (let i = 0; i < 5; i++) {
  function a() {}
  a(); // Example usage of the function inside the loop
}

//  ==> this correct to defining the function outside the loop
function a() {}
for (let i = 0; i < 5; i++) {
  a(); // Example usage of the function inside the loop
}

//  this when monany developer are defining the fuction we need to use the best practice

function two() {
  return params;
}

two(); // Example usage of the function two
//  get the undefined value because no arguments are passed to the function two to give us error
// Uncaught ReferenceError: params is not defined

// two to avid this type of error, we need to use ES6 default parameters

function three(params = "default value") {
  if (!params) return;
  return params;
}
three(); // Example usage of the function three with default parameter

//

function four() {
  console.log("this is function four");
}
four();

const method = {
  fn: function () {
    console.log("This is a method inside an object");
  },
};
method.fn(); // Example usage of the method inside the object

function boohhoo() {
  console.log("This is function boohhoo");
}

boohhoo.apply();
boohhoo.call();

const arr = new Function("num", "return num*2");
arr(2); // Example usage of the function created with the Function constructor

//  first-class citizen
//  Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

const multiplys = function (num) {
  return num * 2;
};

function hof(fn) {
  fn();
}

//  Example usage of the higher-order function hof
hof(function () {
  console.log("This is a function passed to hof");
});

//  Example usage of the higher-order function hof1
hof1(function () {
  console.log("This is a function passed to hof1");
});

function hof1(fn) {
  return fn();
}

// Higher-order functions are functions that take other functions as arguments or return functions as their result.

function hof2(fn) {
  return function () {
    fn();
  };
}

let hof2Instance = hof2(function () {
  console.log("This is a function passed to hof2");
});
hof2Instance(); // Example usage of the function returned from hof2
