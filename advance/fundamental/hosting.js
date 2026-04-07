//  Hosting
//  means that all the variables and functions are moved to the top of the scope before the code is executed
//  variabbles are partially hosted and functions decleartion fully hosted
//  undefined javascript Reserve word

console.log("-------1");

console.log(teddy);
console.log(test());
var teddy = "Teddy";
//  function expression
var test2 = function () {
  console.log("------- test 2");
};
var f = console.log("====================================");
console.log();
console.log("====================================");
//  function declaration
function test() {
  console.log("ohhhh ");
}

//  exercise

var favouriteFood = "Graspes";

var foodThoughts = function () {
  console.log("I love " + favouriteFood);
  var favouriteFood = "Sushi";
  console.log("But I also love " + favouriteFood);
};

foodThoughts();

function foodThoughts() {
  console.log("I love " + favouriteFood);
  var favouriteFood = "Sushi";
  console.log("But I also love " + favouriteFood);
}

foodThoughts();
//  Global execution Context  we have
//  Global object and this

//  creation phase in javascripts when variable  declarations are processed
//  execution phase
//  hosting
