//  Javascript Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (new in ECMAScript 6)
// 7. Object

//
//  this primitve data in javascript
// Javascript Comparisons
//  !==
//  ===
//  >=
//  <=
//  >
//  <

//  Javascripts Variables
//  1. var
//  let (new in ECMAScript 6)
//  const  (new in ECMAScript 6)

//  Variable Rules
// 1. --> variable start with small case letter and end with numbers
// 2. --> you can not start with &percent  and number
// 3. --> some case you can start with _ underscore and $ dollar sign

//  Undefined --> undefined when we use nothing asign to the variable in this case we use undefined

var password; // it's means  here undefined

//  Control flow
//  Javascript Conditionals

// if
//  else
//  else if
//  ternary operator
// switch

var name = "Billay";
//  if first condtion is not match go to the other conditions
if (name === "Billay") {
  alert("Hi Billay");
} else if (name === "Susy") {
  alert("Hi Susy");
} else {
  alert("I dont know you");
}

// Javascripts logical operators
// <-- && -->
// <-- || -->
//  <-- ! -->

var name = "Ann";
if (name === "Billay" || name === "Ann") {
  // this means one of the condition stastified than you let you in but none of the conditions match than do not let you in
  console.log("Hi Billay and Ann");
}

if (name === "Billay" && name === "Ann") {
  // this means  both  of the condition stastified than you let you in but one of the conditions do not  match than do not let you in
  console.log("Hi Billay and Ann");
}
//  !true  ==> false
// !false ==> true
if (!(name === "Bob")) {
  console.log("Hi Bob");
}

//  Javascripts Function
//  var a = function name() {} -->
//  function name (){}
//  return
//  () => {new in ECMASscript Es6}
// what is function in javascipt --> function in javascrips perform actions and could be one action and multiple actions
// alert("Hello") ==> hello is arguments
//   Arguments are what given to the functions

//  Function declaration
function sayHello() {
  console.log("Hello");
}

sayHello();

//  function expression
//  technically does not have the function name here
//  this is called anonymous function
// but here in function expression what we are doing we just asign to the var name to the function
// here we referencing to function into the sayBye variable

//  whenever use function if we are not  mean's your are not give back to result to function because we are not returning the value
//  if we are using return key either is you get value or undefined
//  if as soon as return keyword than programm exist into the function
//
var sayBye = function () {
  console.log("Bye");
};

var sayByes = function () {
  console.log("God Bye");
};

sayBye();
sayByes();
// here we use arugment to reuse the function and DRY method do not repeat same things again and again

function multiply(a, b) {
  return a * b;
}

multiply(5, 20); // we are using arugment to pass the function

// Array  Data structure

var list = ["tiger", "cat", "bear", "bird"];
//  we can hold multiple type of data
//  we can hold string number boolean function

var functionList = [
  function apple() {
    console.log("Apple function called");
  },
  function banana() {
    console.log("Banana function called");
  },
];

//  Object --> object is  collection of property

var user = {
  name: "John",
  age: 34,
  hobby: "Socer",
  isMarried: false,
  spells: ["abrakadra", "shuzan", "boo"],
  //  function inside object called methods
  shout: function () {
    console.log("AHHHHHH!");
  },
};

user.name;
user["name"];

user.favouriteFood = "spinch";
user.isMarried = true;
user.shout();

var list = [
  {
    username: "andy",
    password: "secret",
    id: 1,
  },
  {
    username: "jess",
    password: "secret",
    id: 2,
  },
];
