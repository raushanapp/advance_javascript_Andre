// Hoisting in Javascript

console.log("1-----");
console.log(teddy); // undefined due to hoisting of the variable declaration
console.log(sing()); // function declaration is hoisted, so this works even before the function is defined
var teddy = "bear";
console.log("Expression hoisting example", sing2); // undefined due to hoisting of the variable declaration
console.log("Expression hoisting example", sing2()); // reference error because function expressions are not hoisted
// Function expression  example
var sing2 = function () {
  console.log("ohhh la la la");
};

// Function declaration hoisting example
function sing() {
  console.log("ohhh la la la");
}

console.log("2-----", sing1()); // reference error because function expressions are not hoisted

(function sing1() {
  console.log("ohhh la la la");
});
