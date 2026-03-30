//  how do run javascripts
function printName() {
  return "John Doe";
}

function findName() {
  return printName();
}

function sayName() {
  return findName();
}

sayName();
// global execution context finalll this pop off call stack
//  second create execution context sayName()  third pop off call stack
//  again create execution context findName() second pop off call stack
//  finally create execution context printName(). first pop off call stack

//  Global Execution Context   two  thing
//  1. Global Object
//  2. 'this' keyword
//  3. creation phase
// 4. execution phase

//  ===>> lexical environment terms in javascript
//  simply means where you write a code
//  global lexical environment and local lexical environment
