"use strict"
//  call stack + Heap memory
const number = 60; // allocate memory for number
const string = "some user test"; // allocate memory for string

const human = { // allocate memory for an  object..... and it's values
    firstName: "Vineet",
    lastName:'Jain',
}
//  Memory Heap 
//  the javascript memory heap is region of memory where the javascript engine store the data dynamically allocated data during program execution.
//  this primarily includes refernce type such as: Object arrays and function.

//  Key characteristics of the memory heap:
// Dynamic Allocation:
// Unlike the call stack, which handles fixed-size data and execution contexts, the heap allows for flexible memory allocation and deallocation as objects are created and destroyed during runtime. The size of data stored in the heap is not known at compile time. 

// Unordered Storage:
// Data within the heap is not stored in a strictly ordered fashion like the stack. Variables typically hold references (pointers) to the location of the data in the heap.

// Garbage Collection:
// The memory heap is managed by a garbage collector, which automatically identifies and reclaims memory that is no longer referenced by the program, preventing memory leaks. 

// Contrast with the Call Stack:
// Primitive values (numbers, strings, booleans, null, undefined) and references to heap-allocated objects are stored on the call stack, while the actual complex data structures they refer to reside in the heap.
// In essence, the memory heap serves as a dynamic storage area for the more complex and variable-sized data that your JavaScript code manipulates.

// Arbitrary data
// In JavaScript, "arbitrary data" generally refers to data that does not conform to a predefined or expected structure, or data that can take on any value or type without specific restrictions. It implies flexibility in the data's content and format.

//  UnderStand  Stack and Heap 
// STACK 
// The Stack is used for static memory allocation, primarily for storing primitive types and function calls. It's a simple, last-in, first-out (LIFO) structure, making it very fast to access.
// Stack Memory example  let consider an example using primitive data types, which store in the stack
let myYoutubeName = "ayushyadavz"; // Primitive type stored in the Stack.
let anotherName = myYoutubeName;   // A copy of the value is created in the Stack.
anotherName = "amanyadavz";        // Changing the copy does not affect the original.

console.log(myYoutubeName); // Output: ayushyadavz (Original value remains unchanged)
console.log(anotherName);   // Output: amanyadavz (Only the copy value is changed)

// Heap Memory
// The Heap is used for dynamic memory allocation, where objects and arrays (non-primitive types) are stored. Unlike the Stack, the Heap is more complex and slower to access, as it allows for flexible memory allocation
// Example of Heap memory Now, let's look at how non-primitive data types (objects) are managed in the Heap.
let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "ayush@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: ayush@google.com
console.log(userTwo.email); // Output: ayush@google.com
// Changing userTwo.email directly affects userOne.email, because both references point to the same location in memory.

// Stack Memory is used for storing primitive types and function calls. Each time you assign a value, a new copy is created in the Stack.
// Heap Memory is used for storing objects and arrays. Variables that reference the same object share the same location in memory, so changes to one variable affect the others.
// Understanding the distinction between Stack and Heap memory helps you manage variables and objects more effectively, leading to more efficient and bug-free code.

//  example call stack
function substract(num) {
    return num - 2;
}

function calcauate() {
    const totalSum = 4 + 5;
    return substract(totalSum);
}
calcauate();

//  call Stack  LIFO last in first out
//  if trying to make stack overflow do like this
function inceptions() {
    inceptions();
}
inceptions() // Browser should give a error stack overflow because pushing into the stack again and again

//  garbage collections used alogorithm mark and sweep method 
//  grabage collection manage memory refence it self internally and handle collecting data and variable 
// In JavaScript, garbage collection refers to the automatic process of reclaiming memory space that is no longer being used by the program.
//  Unlike lower-level languages where developers manually manage memory allocation and deallocation, JavaScript's runtime environment handles this automatically through a garbage collector.
// Low-level languages like C, have manual memory management primitives such as malloc() and free(). 
// In contrast, JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). 
// This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.
// 1.In this article
// Memory life cycle
// Garbage collection
// Configuring an engine's memory model
// Data structures aiding memory management
// Memory life cycle
// Regardless of the programming language, the memory life cycle is pretty much always the same:

// Allocate the memory you need
// Use the allocated memory (read, write)
// Release the allocated memory when it is not needed anymore
// The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.

//  refer MDN DOCS

// MEMORY LEAKS

//  global variable 
//  example
var a = 2;
var b = 3;
//  like me memory leack  and nested object in global vairable

//  Event Listeners
var element = document.getElementById("button");
element.addEventListener("click", onclick); // if you are not removing event listeners then getting add more and more in the memory then comme to the memory leack 

//  setInterval
setInterval(() => {
    //  .refeencing objects.... if 
})

//  https://medium.com/preezma/memory-leaks-in-javascript-and-how-to-avoid-them-63916a02f68 this is memory leak 
//  refernce https://dev.to/alwaysaman/day-6understanding-stack-and-heap-in-javascript-3766
// https://dev.to/alisamir/memory-leaks-in-javascript-a-simple-guide-31e8 memory leack

//  Java scripts runtime
console.log("===>1");
setTimeout(() => console.log("===>2"), 1000);
console.log("3")

//  Memory Heap ==> in Javascript variable ,object and function allocate the memory in memory Heap during global execution and compiler time so then can access variable and object and function 
// What is Proceess to allocate the memory in the Heap
//  Allocate the memory you need
//  Use the Allocated memory (read and write);
//  Release the allocated when it's no need

// Call Stack 
// Call Stack does to store variable and function as run our code and all function variable in the stack called stack frame 
//  call stack run first in last out method (FILO) 
//  also keep in reference where the code run and which have 
// call stack have different implement so always not store data in memory Heap