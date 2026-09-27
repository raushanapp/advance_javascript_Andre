// Javascript
// What is javascript
// Javascript is a high-level, interpreted programming language that is commonly used to create interactive effects within web browsers.

// Features of Javascript
// 1. Dynamic typing
// 2. First-class functions
// 3. Prototype-based inheritance
// 4. Event-driven programming
// 5. Asynchronous programming with Promises and async/await

// Use cases of Javascript
// 1. Web development (client-side and server-side)
// 2. Mobile app development (using frameworks like React Native)
// 3. Game development (using libraries like Phaser)
// 4. Desktop app development (using Electron)
// 5. Server-side scripting (using Node.js)
// 6. Internet of Things (IoT) development (using frameworks like Johnny-Five)
// Javascript is widely used for both front-end and back-end development, making it a versatile language for web development.

// Javascript Data Types

// 1. Number
// 2. String
// 3. Boolean
// 4. Object
// 5. Array
// 6. Null
// 7. Undefined
// 8. Symbol (ES6)

//  primitive data types
// Primitive data types are immutable and are compared by their value.
//  what does it mean for a data type to be primitive?
// A primitive data type is a data type that is not an object and has no methods. It is immutable, meaning its value cannot be changed once created.

// 1. Number --> represents both integer and floating-point numbers.
// 2. String --> represents a sequence of characters.
// 3. Boolean --> represents a logical entity and can have two values: true and false.
// 4. Null --> represents the intentional absence of any object value.
// 5. Undefined --> represents a variable that has been declared but has not yet been assigned a value.
// 6. Symbol (ES6). --> used to create unique identifiers for objects.

// Examples of primitive data types:
const num = 42; // Number example
// String example
const str = "Hello, World!"; // String example

// Boolean example
const bool = true; // Boolean example

// Null example
const n = null; // Null example

// Undefined example
let u; // Undefined example

// Symbol example (ES6)
const sym = Symbol("unique"); // Symbol example

//  non-primitive data types
// Non-primitive data types are mutable and are compared by their reference.
// what does means of reference compared
// When non-primitive data types are compared, their references (memory addresses) are compared, not their actual content.

// 1. Object --> represents a collection of key-value pairs.
// 2. Array --> represents an ordered list of values.

// Examples of non-primitive data types:
// Object example
const obj = { key: "value" }; // Object example
let anotherObj = { key: "value" }; // Another Object example
let yetAnotherObj = obj; // Yet another Object example
yetAnotherObj === obj; // Comparing two objects by reference, will return true
obj === anotherObj; // Comparing two objects by reference, will return false

// Array example
const arr = [1, 2, 3]; // Array example
//  are they function
// In JavaScript, functions are also objects, but they are callable. They are considered non-primitive data types because they have properties and methods and are compared by reference.
// Function example
const func = function () {
  return "Hello";
}; // Function example

// Arrow function example (ES6)
const arrowFunc = () => "Hello"; // Arrow function example

//  variables
// In JavaScript, variables are used to store data values. They can be declared using var, let, or const.

// var example
var variableVar = "I am a var variable"; // var example

// let example
let variableLet = "I am a let variable"; // let example

// const example
const variableConst = "I am a const variable"; // const example

//  scope of variables
// In JavaScript, the scope of a variable determines where it can be accessed.
// var has function scope, let and const have block scope.

// Function scope example with var
function varScopeExample() {
  var functionScoped = "I am function scoped";
  console.log(functionScoped); // Accessible here
}
// console.log(functionScoped); // Not accessible here, would throw an error

// Block scope example with let and const
if (true) {
  let blockScopedLet = "I am block scoped (let)";
  const blockScopedConst = "I am block scoped (const)";
  console.log(blockScopedLet); // Accessible here
  console.log(blockScopedConst); // Accessible here
}
// console.log(blockScopedLet); // Not accessible here, not defined error javascript (ReferenceError)
// console.log(blockScopedConst); // Not accessible here, not defined error javascript (ReferenceError)

// var has function scope, meaning it is accessible within the function it is declared in, but not outside of it.
// what is var keyword
// The var keyword is used to declare variables in JavaScript. Variables declared with var are function-scoped and can be redeclared and updated within their scope.
//  example var keyword
var exampleVar = "This is an example of var keyword"; // example var keyword
exampleVar = "Updated value of exampleVar"; // Updating the value of exampleVar
var exampleVar2 = "This is another example of var keyword"; // example var keyword

if (true) {
  var blockScopedVar = "I am function scoped (var)"; // var inside block, still function scoped
}
console.log(blockScopedVar); // Accessible here because var is function scoped
// this demonstrates that var is function scoped and not block scoped

// let and const have block scope, meaning they are only accessible within the block they are declared in.
//  example let keyword
let exampleLet = "This is an example of let keyword"; // example let keyword
exampleLet = "Updated value of exampleLet"; // Updating the value of exampleLet

// let exampleLet="This is another example of let keyword";
//  example const keyword
const exampleConst = "This is an example of const keyword"; // example const keyword
// exampleConst = "Updated value of exampleConst"; // This would throw an error because const cannot be reassigned

//  what is difference between var,let and const
// var is function-scoped and can be redeclared and updated within its scope.
// let is block-scoped and can be updated but not redeclared within its scope.
// const is block-scoped and cannot be updated or redeclared within its scope.
//  write the example above
// above examples demonstrate the differences between var, let, and const in terms of scope and reassignability.
