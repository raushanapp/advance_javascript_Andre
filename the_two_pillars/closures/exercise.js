//  Exercise on closures in JavaScript
//  do not called the initialize function multiple times unnecessarily
let view;
function initialize() {
  view = "mountain";
  console.log("view has been set!");
}

initialize();
initialize();
initialize();
console.log(view);

function solutionInitialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "mountain";
      called++;
      console.log("view has been set!");
    }
  };
}

const solutionInit = solutionInitialize();
console.log(solutionInit());
console.log(solutionInit());

//  another question

const array = [1, 2, 3, 4, 5];
//  when we use var, in this case all iteration already happen when setTimeout callback executes, so it will always log the last value of i
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("I am Index : ", array[i], i);
  }, 3000);
}

//  first way to solve
// if we use here let instead of var,each iteration will have its own block scope for the variable i
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("I am Index : ", array[i], i);
  }, 3000);
}

// we can use closures to IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration

for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log("I am Index : ", array[closureI]);
    }, 3000);
  })(i);
}
