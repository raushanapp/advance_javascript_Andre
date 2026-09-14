// ADVANCE FUNCTION
const first = () => {
  //  this function itself have own world it mean's within whatever written only access able from this function
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Closue ==> The Role of javascript always remember the outer scope function into the inner function although the outer function executed finish because of closures
//  always remember the reference of the variable

//  Curring --> the function that take multiple argument to convert the take one argument at time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(11);

// Avoiding Side effect and functional purity

var a = 1;

function b() {
  //  this is called side effect
  a = 2;
}

// Functional purity
//  we always return something --> Deterministic ==> always return same value if you are putting same inputs
//
