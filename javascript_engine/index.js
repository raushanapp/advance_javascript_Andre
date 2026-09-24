//  How does the JavaScript engine work?

//  the Javascript engine consist of two part
//  1. Memory Heap: where memory allocation happens.
//  Memory Heap is responsible for allocating memory for variables, objects, and functions during the execution of the program.
//   example
const a = 1;
const b = 1;
const c = 1;
var d = 10;

//  Memory leak  above declaration of variables a, b, and c it's also created memory leak because the memory allocated for these variables is not released until the program ends.
//  also called the global variale are bad practice because they can lead to memory leaks and unexpected behavior.
//  it's better to use local variables inside functions to avoid memory leaks.

//  2. Call Stack: where function calls are managed and executed or read code and executed  the code and call stack let you know where we are in the code.

//  example of Call Stack
console.log("1");
console.log("2");
console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};
one();
d = 20;
//  according to the call stack, the functions are executed in a last-in, first-out (LIFO) order. In this example, the call stack will first execute the global code, then the `one` function, and finally the `two` function.

//  call stack
//  console.log("4")
//  two()
//  one()

//  how removed from call stack
//  first removed the console.log("4") from the call stack (it has finished executing)
//  second remove the `two` function from the call stack (it has finished executing)
//  third remove the `one` function from the call stack (it has finished executing)

//  create a stack overflow example
//  it also called Recursion Error because the function keeps calling itself indefinitely, eventually causing a stack overflow.
function foo() {
  foo();
}
foo(); // call over and over

//  Javascript single  threaded language the can be non blocking

//  synchronous execution: JavaScript executes code line by line, in a single thread, following the call stack. Each function must complete its execution before the next one starts.
//  synschronous behaviour is better because we can predict the order of execution and avoid race conditions.
//  asynchronous execution: JavaScript can perform non-blocking operations using callbacks, promises, and async/await. This allows certain tasks to be executed in the background while the main thread continues executing other code.
//  asynchronous behaviour is useful for handling tasks like network requests, file I/O, and timers without blocking the main thread.

//  asynchronous example

// Call stack

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");

// 1.
console.log("1");
//  Call stack

//  Web API

// Callback queue

// Event Loop

// 2.
//   console.log("1") log the 1 and pop-up to the console immediately. and pop-off to the call-stack
//  Call stack

//  Web API

// Callback queue

// Event Loop

// 3.
//  empty call stack

//  Call stack

//  Web API

// Callback queue

// Event Loop

// 4.

setTimeout(() => {
  console.log("2");
}, 1000);
//  first come to call-stack and engine recorgnizing this web api so move to the web api with timer
//  Call stack

//  Web API

// Callback queue

// Event Loop

// 5.
console.log("2"); // immediately logged to the console
//  Call stack

//   --> setTimeout(), 1000 once timer expires, the callback will be moved to the callback queue
//  Web API

// Callback queue

// Event Loop

// 6.
//  now empty the stack
//  Call stack

//  Web API
setTimeout();
// Callback queue

// Event Loop

// 7.
//   empty call stack
//  Call stack

//  Web API

// Callback queue

// Event Loop

// 8.
console.log("3");
//  Call stack

//  Web API

// Callback queue

// Event Loop and also  event loop keep checking the call-stack and callback queue continuously to ensure non-blocking execution. and once call-stack empty then event see the callback in the queue and push it to the call stack for execution.

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");

Promise.resolve().then(() => {
  console.log("4");
});

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log("5");
  });
}, 0);

//  Expected output: 1, 3, 4, 2, 5
//  Why: sync code (1, 3) runs first -> microtasks (Promise .then -> 4) drain fully
//  before the event loop takes callbacks from the macrotask/callback queue (setTimeout -> 2, 5).
//  Full call stack / web API / microtask / callback queue diagram and step-by-step trace
//  are documented in javascript_engine.md
