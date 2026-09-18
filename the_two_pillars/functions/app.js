//  Function
//  when we invoked  function  we get two parameter automatically this keyword and arguments

//  ==> type of way invoking a function
// 1
function one() {
  return 1;
}
one();

// 2  function invoked  using method

const obj = {
  name: "Rohan",
  call: function introduce() {
    return `Hi I am ${this.name}`;
  },
};

obj.call();

// 3 used call apply and bind

// 4 this called function constructor

const four = new Function("return 4");
const five = new Function("num", "return num");

four();
five(5);

function whooo() {
  console.log("wooowhhoo");
}

whooo();

//  Function are first class citizens in JS
//  1 --> function can be assign  to variables and properties of objects
var stuff = function () {};
//  2 --> we can pass the function as arugments or parameter
//  I'm able to pass as parameter and call the function in side
function a(fun) {
  fun();
}
a(function () {
  console.log("hi there");
});

// 3
//  we can return functions as  the value

function b() {
  return function c() {
    console.log("Bye --");
  };
}

var d = b();
d();
//  function is data it's mean we can not only called the function we pass as arugment
//  assign as variable and return a function as value , that why function called first class citizens in JS

//  --> Extra BITs function
// -- care full initial the function in side of loop

for (let i = 0; i < 5; i++) {
  function a() {}
  a();
}

//  instead should be move top
function a() {}
for (let i = 0; i < 5; i++) {
  a();
}

//  some

function e() {
  return params;
}

e(); // we get reference error because params is not define
//  how we avoid this
function f(params = 6) {
  return params;
}
f();
