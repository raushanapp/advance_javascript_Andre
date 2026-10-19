// An execution context is the environment JavaScript uses to evaluate code.
// The global execution context is created first. Each function call creates
// a new function execution context.

function printName() {
  return "Name printed!";
}

function findName() {
  function test() {}
  return printName();
}

function sayMyName() {
  return findName();
}
{
  let blockScopedVariable = "I exist only within this block";
  var keyScopedVariable =
    "I exist within the function or globally if not in a function";
}

console.log(keyScopedVariable);

console.log(sayMyName());

// Calls are pushed onto the call stack and removed when they return:
//
//   push: sayMyName -> findName -> printName
//   pop:  printName -> findName -> sayMyName
//
// The global execution context remains at the bottom of the stack while
// this synchronous call chain runs.

// Lexical scope is determined by where functions and blocks are written,
// not by where they are called. Inner code can read bindings in outer scopes.
const globalGreeting = "Hello";

function createGreeter(name) {
  const punctuation = "!";

  return function greet() {
    return `${globalGreeting}, ${name}${punctuation}`;
  };
}

const greetRaushan = createGreeter("Raushan");
console.log(greetRaushan()); // Hello, Raushan!

// greet keeps access to name and punctuation after createGreeter returns.
// This preserved access to its lexical environment is a closure.

// `globalThis` refers to the global object. The value of `this` at the
// top level depends on the host and script type; it is not universally
// equal to the global object (for example, in ES modules, top-level `this`
// is undefined).

//  Global execution context
//  global object  this keyword  globalThis(Node.js )
//  Hoisting
//  Run code ran when
