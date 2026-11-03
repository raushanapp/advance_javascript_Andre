//  Pure Functions In Javascript
//  A pure function is a function that, given the same input, will always return the same output and does not have any side effects.

//  no side effects
const array = [1, 2, 3];
//  this function has a side effect because it modifies the original array
function mutateArray(arr) {
  arr.pop(); // removes the last element from the array
}
function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}
// another pure function example we are creating a new array without modifying the original array
//  this function does not modify the original array and always returns the same output for the same input
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}
//  another pure function example that multiplies each item in the array by two without modifying the original array
function multiplyByTwo(arr) {
  return arr.map((item) => item * 2);
}
// mutateArray(array);
// console.log(array); // [1, 2]  //  the original array is modified, so this is not a pure function
// mutateArray2(array);
// console.log(array); // [1, 1]  //  the original array is modified, so this is not a pure function
// mutateArray(array);
// console.log(array); // [1]  //  the original array is modified again, so this is still not a pure function
// Using the pure function removeLastItem to create a new array without modifying the original array
const newArray = removeLastItem(array);
console.log(newArray); // [1, 2]  //  the original array is not modified, so this is a pure function
console.log(array); // [1, 2, 3]  //  the original array remains unchanged

// Using the pure function multiplyByTwo to create a new array with each item multiplied by two without modifying the original array
const multipliedArray = multiplyByTwo(array);
console.log(multipliedArray); // [2, 4, 6]  //  the original array is not modified
console.log(array); // [1, 2, 3]  //  the original array remains unchanged
// The original array is still unchanged, demonstrating the purity of the functions used above
//  another example
function a() {
  //  it is effecting the outside world by printing to the console, so this is not a pure function
  //  because console.log is browser dependent and affects the outside world
  //  it's modifying the outside itself
  //  that function has a side effect because it affects the outside world
  console.log("Hi");
}
a();

//  Input ---> output
//  Pure functions take input and produce output without affecting the outside world
//  this waht we called Referential Transparency (R)
//  it means that an expression can be replaced with its value without changing the program's behavior
//  Example:
function add(a, b) {
  return a + b;
}
//  no matter you can see the b function i am calling it with add(3, 4) or add(2, 3), it will always produce the same output for the same input without affecting the outside world
//  because Referential Transparency ensures that the output is consistent for the same input without affecting the outside world
//  because these are only dependent on theier own input and do not rely on or modify the outside world
function b(num) {
  return num * 2; //  pure function that always returns the same output for the same input without affecting the outside world
}

console.log(b(add(3, 4))); // 14  //  always returns the same output for the same input
console.log(add(2, 3)); // 5  //  always returns the same output for the same input
console.log(b(add(2, 3))); // 10  //  always returns the same output for the same input

// Can we have 100% pure functions in real-world applications?
//  In practice, it is challenging to have 100% pure functions because most programs need to interact with the outside world (e.g., reading/writing files, network requests, user input, etc.)
//  However, we can strive to maximize the use of pure functions within our code to improve predictability, testability, and maintainability

//  A functional programming Rule
//  1. Predictable
//  2. One Task
//  3. Return statement
//  4. Pure
//  5. No Shared State
//  6. Immutable State
//  7. Composable
