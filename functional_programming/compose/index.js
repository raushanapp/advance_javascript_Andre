// Compose Function
//  data  --> fn --> data --> fn  -->
//  compose is a system designed principle that deals with the  releation between components and how they can be combined to form more complex operations.
//  Compose allows us to combine simple functions to build more complex ones.
//  compose function moves right to left, meaning the rightmost function is applied first.
//  In this example, we first make the number positive and then multiply it by 3 using the compose function.
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

multiplyBy3AndAbsolute(-50);

//  Pipe Function
//  Pipe is similar to compose but it moves left to right, meaning the leftmost function is applied first.
const pipe = (f, g) => (data) => g(f(data));
const makePositiveAndMultiplyBy3 = pipe(makePositive, multiplyBy3);

makePositiveAndMultiplyBy3(-50);

// arity ===> number of arguments a function takes
const add = (a, b) => a + b;
console.log(add.length); // 2
