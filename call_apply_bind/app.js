// Call Apply and Bind methods in JavaScript

//  Call, Apply and Bind methods are used to explicitly set the 'this' context for a function
//  Call: immediately invokes the function with a given 'this' value and arguments provided individually
//  Apply: immediately invokes the function with a given 'this' value and arguments provided as an array
//  Bind: returns a new function with a given 'this' value and optional arguments, without invoking it immediately

//  example

function a() {
  console.log("Call the function with 'this' context");
}

// a.call();
a.apply();

const wizard = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 80,
};
console.log("1", archer);
// wizard.heal.call(archer, 100, 20);
wizard.heal.apply(archer, [100, 30]);
let healArcher = wizard.heal.bind(archer, 50, 50);
healArcher();

console.log("2", archer);

const array = [-1, 0, -6, 1, 2, 3, 5];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

function getMinNumber(arr) {
  return Math.min.apply(null, arr);
}

console.log(getMaxNumber(array));
console.log(getMinNumber(array));

//  Function currying using bind;
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
let multiplyBytwenty = multiply.bind(this, 20);
console.log(multiplyByTwo(5)); // Output: 10
console.log(multiplyBytwenty(5)); // Output: 100
