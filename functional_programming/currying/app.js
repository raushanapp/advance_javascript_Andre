//  Currying in Javascript
//  Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
//  This allows us to create specialized functions by partially applying arguments to the original function.
//  Currying helps in creating reusable and composable functions by breaking down functions into smaller, single-argument functions.
//  currying allows us take one parameter at a time instead of passing all arguments at once.
//  Example:

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

//  Usage:
const multiplyByTwo = curriedMultiply(2);
multiplyByTwo(5); // 10
const multiplyByThree = curriedMultiply(3);
multiplyByThree(5); // 15

//  partial application using currying;
// It is process of producing a function with a smaller number of parameters by fixing some of the arguments in advance.
//  Some of its arguments into the function so it remember those parameters than uses closure to later on be called with all the rest of the arguments.
const multiply1 = (a, b, c) => a * b * c;
const curriedMultiply1 = (a) => (b) => (c) => a * b * c;
const partiallyMultiplyByFive = multiply1.bind(null, 5);
//  Usage:
partiallyMultiplyByFive(2, 3); // 30
//  Usage:
curriedMultiply1(2)(3)(4); // 24
