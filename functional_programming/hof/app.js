// Higher Order Functions in JavaScript
//  Function have first class citizens in javascript which means they can be passed as arguments to other functions, returned from functions, and assigned to variables.

// HOF
//  A Higher Order Function is a function that takes one or more than one function as arguments, or returns a function as its result.

const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});

// Closures
//  A closure is a function that the outer function variable is accessible to the inner function even after the outer function has executed.
//  Closures are commonly used to create private variables or to maintain state between function calls.
//  They allow functions to have "memory" of the variables in their scope even after the outer function has finished executing.
//  This allows us to maintain state in a controlled manner, without exposing the internal variables directly.
//  In this example, the closure allows us to increment the count while keeping it private from the outside scope.
//  Below given closure function is impure because it modifies the internal state (count) each time it is called.
//  The increment function returned by the closure has access to the count variable, and each call to incrementFn modifies this internal state.
//  so this closure is considered impure because it has side effects by modifying the internal state.
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFn = closure();
incrementFn();
incrementFn();

//  In this case we are creating a closure that only allows us to get the current count without modifying it.
//  This is useful when you want to expose some internal state without allowing external code to modify it.
//  This pattern is often referred to as a "getter" closure.
//  this is called data encapsulation in closures or data hiding.
//  In this example, the internal count variable is hidden from the outside scope, and can only be accessed through the getCount function.
const getCounteClosure = () => {
  let count = 0;
  return function getCount() {
    return count;
  };
};

const getCountFn = getCounteClosure();
getCountFn();
