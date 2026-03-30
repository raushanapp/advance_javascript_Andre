// Function  Expression
var canada = () => {
  console.log("Cold");
};

//  Function Expression
function india() {
  console.log("Warm");
}

//  Function
// Invocation / Call / Execution
canada();
india();
//  Execution Context we have two keysword inside of the global excution context : this and arguments

//  example

function marry(person1, person2) {
  console.log("Argument:", arguments); //
  return `${person1} and ${person2} are married!`;
}

function marry2(...args) {
  console.log("Argument:", args); //
  console.log(Array.from(args));
  return `${args[0]} and ${args[1]} are married!`;
}

marry2("Alice", "Bob");

// Each excution context we create new arguments object if you are not passing any arguements then it will be an empty object other wise  passing parameters will be available in the
// arguments
