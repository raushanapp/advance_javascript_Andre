// Function in javascript
//  function declaration in JavaScript
//  function expression in javascript
// anonymous function in javascript

// funtion declaration

let res = add(2, 3); // Example usage of the function
console.log(res);

function add(a, b) {
  return a + b;
}

// function expression

const multiply = function a(a, b) {
  console.log(a, b, this);
  return a * b;
};

let result = multiply(2, 3); // Example usage of the function
console.log(result);
// Example usage of the function
// console.log(res2);

const ananousFunction = function () {
  console.log("This is an anonymous function");
};
ananousFunction(); // Example usage of the anonymous function
// console.log(multiply(2, 3)); // Example usage of the function
// immediately invoked function expression

(function (a) {
  console.log(a);
})(5);

const divide = () => {
  console.log("This is a divide function", this);
};
divide(); // Example usage of the divide function

//

function test(arugments) {
  console.log(arugments); // Example usage of the function argument
}

test();

//  method

let obj = {
  two() {
    console.log("This is a method inside an object");
  },
};
obj.two(); // Example usage of the method inside the object

const three = new Function("num", "return num*3");

three(3);

function woohhooo() {}

woohhooo.apply(null, []);

let obje = {};

// obje.
