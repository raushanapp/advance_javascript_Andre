// Hoisting

x = undefined;
console.log(x); // undefined
coonsole(histingExample());

var x = 10;
x = 10;
function histingExample() {
  console.log("Inside histingExample function");
}
