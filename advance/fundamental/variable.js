//  this is called variable environement
//  function some have their own variable environment to access depending upon where
//  variable are decleared

function two() {
  var isValid; // isValid is undefined in this execution context.
}

function one() {
  // 3. this variable will be put into the new execution context. It's own variable environment
  var isValid = true; // this variable is put into the local variable environment
  two(); // 4. New execution context created.
}
var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.

one(); // 2. New execution context is created on top of the stack.

//  this is called call stack

//  two()  -- undefined
//  one (); -- true
//  global  // false
