//  first exercise on hoisting in JavaScript
var one = 1;
var two = 2;
//  ignore the second one define the one javascript variable first due to hoisting
// every time call the function  there creation phase and execution phase happen, and the last function declaration overrides the previous ones due to hoisting

a(); // bye  because first function declaration overrides the previous one due to hoisting

function a() {
  console.log("Hi");
}

function a() {
  console.log("Bye");
}

// another exercise on hoisting in javascript
var favouriteFood = "grapes";
var foodThoughts = function () {
  //  here javascript enging
  //  favouriteFood is undefined
  console.log("Original favourite food : " + favouriteFood); // favouriteFood is undefined here due to hoisting of the local variable
  //   if here i removed inside local variable, it would refer to the global favouriteFood instead of being undefined
  var favouriteFood = "sushi";
  console.log("New favourite food : " + favouriteFood);
};
foodThoughts(); // as soon ran the function, it is created new execution context with its own creation and execution phase

//  exercise

function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }

  return littleBrother();

  function littleBrother() {
    return "no me!";
  }
}

console.log(bigBrother()); // no me! because the second function declaration overrides the first one due to hoisting

//  avoid using hoisting in our code base
