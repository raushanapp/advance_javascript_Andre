// Function expression
//  this function define during the runtime
var canada = function () {
  console.log("Cold");
};
//  we can write the using arrow function
//  this function define during the runtime
var canadaArrow = () => {
  console.log("Cold");
};
//  Function declaration
//  this function define when complier look the code and parse time
function india() {
  console.log("Inside india function", arguments);
  console.log("Warm");
}

//  Function
// Invocation/Call/Execution

canada(); // Function invocation
canadaArrow(); // Function invocation
india(); // Function invocation

//  when function is invoked javascript engine creates execution context for that function
//  this execution context create top of the global execution context stack
//  and is destroyed once the function execution is completed
//  this is how function execution context works in JavaScript
//  when function execution is created we get a two keyword
//  "arguments" and "this" which are available inside the function execution context

//  Example to demonstrate "arguments" and "this"
function exampleFunction(a, b) {
  console.log("Arguments:", arguments);
  console.log(Array.from(arguments));
  console.log("This:", this);
}
exampleFunction(1, 2);

function exampleFunction2(...args) {
  console.log("Args:", args);
  //   console.log("Arguments:", arguments);
  console.log(Array.from(arguments));
  console.log("This:", this);
}
exampleFunction2("Tim", "Tina");
