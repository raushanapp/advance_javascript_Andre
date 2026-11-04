//  Idempotence : --->> In Functional Programming
// in functional programming refers to the property of certain functions where multiple applications of the function have the same effect as a single application.
//  the idea of Idempotence mean's as passing as arugment input and it's return value should remain the same for the same input.
function notGod(num) {
  return Math.random(num);
}
notGod(5);
function notGod1(num) {
  console.log(num);
}
//  if here passing as parameter 5 event though no matter how many times we call this function, always return the same result, it would be idempotent.
notGod1(5);
//  Idempotence other feature being able to call again and again itself or being able to call inside it self  of function return the same result for the same input.

//  Example of an idempotent function

Math.abs(-5); //  Example of an idempotent function, always returns 5 for the same input -5
Math.abs(Math.abs(-5)); //  Still returns 5, demonstrating idempotence
