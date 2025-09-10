// Lexical Environment 
//  what does means lexical environment
// In Javascript our lexical scope (available data + variable where the funtion was define)
// Determines our available variables. Not where the function is called (dynamic scope)

function runCode() {
    
    return "Run Code";
}

function writeCode() {
    return runCode();
}

// writeCode()
// only works in node js evnironment means because javascript engine does not know about this local (module) scope 
// That function is stored in the local lexical environment of the module. and javascript find local lexical environment not global environment because of when using node js 
globalThis.writeCode = writeCode; // what can we are doing first puting into global scope because node js does not where it is
console.log(globalThis.writeCode());


// lexical means it's compiler time where the code run 

// In JavaScript, a lexical environment is a hidden internal structure that stores variables and functions for a specific scope. 
// It holds the identifier-to-variable mapping for that code and includes a reference to its parent environment, which enables the scope chain. 

// Every lexical environment has two main parts: 
// Environment Record: The internal storage space for all variables, function declarations, and parameters within the current scope.
// Outer Environment Reference: A pointer to the parent lexical environment. This allows JavaScript to look up the scope chain for variables not found in the current scope. 

// How the lexical environment works

// A lexical environment is created whenever an execution context (for a function, a block, or the global scope) is instantiated. The structure of these nested environments is determined by how the code is written, not by how functions are called.
//  This is known as lexical or static scoping. 

// Let's trace how the lexical environment is created and used in the following example:

let globalVar = 'global';

function outerFunction() {
  let outerVar = 'outer';
  
  function innerFunction() {
    let innerVar = 'inner';
    console.log(innerVar); // innerFunction's own scope
    console.log(outerVar); // outerFunction's parent scope
    console.log(globalVar); // global scope
  }
  
  return innerFunction;
}

const inner = outerFunction();
inner();

// Here is a step - by - step breakdown:

// Global Execution Context (GEC) is created:
// Global Lexical Environment is created.
// Its environment record stores globalVar and outerFunction.
// Its outer environment reference is null because it has no parent.
// outerFunction() is invoked:
// outerFunction Lexical Environment is created.
// Its environment record stores outerVar and innerFunction.
// Its outer reference points to the Global Lexical Environment.
// innerFunction() is returned:
// outerFunction finishes execution, and its execution context is popped off the call stack.


// Lexical environment vs. scope
// While often used interchangeably, there is a technical distinction: 
// Scope is the conceptual rule, defined at the time of writing the code, that governs the visibility of variables. It explains why a function can access variables from its surrounding "parent" code.
// Lexical Environment is the concrete implementation used by the JavaScript engine to manage variables and resolve scope during runtime. It is the actual data structure that holds the variables and the chain of references to outer scopes. 
// Understanding the lexical environment is crucial for mastering closures, which are functions that "remember" their lexical scope even when executed outside of it. 

