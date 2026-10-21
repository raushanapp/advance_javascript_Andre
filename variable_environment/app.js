// Variable Environment in JavaScript
// The variable environment is a part of the execution context that stores variables and function declarations.
// It keeps track of the current state of variables and functions within a particular scope.
// Each execution context has its own variable environment.
// The variable environment is created when the execution context is created and is destroyed when the execution context is destroyed.
// Example:
function example() {
  var a = 10;
  console.log(a);
}
example();

// In the above example, the variable 'a' is stored in the variable environment of the 'example' function's execution context.
// When the function is invoked, the execution context is created, and the variable environment is initialized with 'a'.
// Once the function execution is completed, the execution context and its variable environment are destroyed.
// This demonstrates how JavaScript manages variable scope and lifecycle within function execution contexts.

// Note: The variable environment is closely related to the concept of the scope chain, which determines the accessibility of variables in nested functions.

function two() {
  var isValid; // variable environment or local environment created for 'two' function
}

function one() {
  var isValid = true; // variable environment or local environment created for 'one' function
  two(); // ---> new execution context for 'two' function is created here
}

var isValid = false;
one();
console.log(isValid);

// Scope Chain

// example of scope chain in JavaScript

function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Raushan Kumar";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName(); // ---> new execution context for 'sayMyName' function is created here
// The scope chain allows 'findName' to access variables from 'sayMyName' if needed, and 'printName' can access variables from 'findName' and 'sayMyName' through the scope chain.

function sayMyName1() {
  var a = "a";
  return function findName() {
    var b = "b";
    // console.log(c);
    return function printName() {
      var c = "c";
      return "Rohan shekhar";
    };
  };
}

sayMyName1()()(); // Invoking the nested functions to demonstrate the scope chain and variable environment.

//  weird thing we have javascript

var heyhey = function doodle() {
  doodle(); // Calling the named function expression within its own scope
  console.log("Inside doodle function");
};

heyhey(); // Invoking the function assigned to the variable 'heyhey'
doodle(); // This will throw an error because 'doodle' is not defined in the outer scope.
