// ES2022 features in JavaScript
// This version adds safer array access and better module/async support.

// 1) Array.prototype.at()
// This helps access elements from the end of an array in a readable way.

const array = [100, 200, 400, 5000, 50000, 10];

// Old way to get the second last item:
console.log(array[array.length - 2]); // 50000

// New way:
console.log(array.at(-2)); // 50000
console.log(array.at(-1)); // 10
console.log(array.at(0)); // 100

// 2) Top-level await
// In ES modules, we can use await at the top level without wrapping it in async.
// Example:
// import data from './data.json' assert { type: 'json' };
// const user = await fetch('/api/user').then((res) => res.json());

// 3) Object.hasOwn()
// Better and more explicit than Object.prototype.hasOwnProperty.call().

const player = { name: "Ash", level: 20 };
console.log(Object.hasOwn(player, "name")); // true
console.log(Object.hasOwn(player, "score")); // false

// 4) Error cause
// We can attach a cause when creating errors for clearer debugging.

try {
  const foo = undefined;
  foo.bar();
} catch (error) {
  const wrappedError = new Error("Something went wrong", { cause: error });
  console.log(wrappedError.name);
  console.log(wrappedError.message);
  console.log(wrappedError.cause?.message);
}

// Summary:
// ES2022 improves array access, makes modules easier to work with, and adds clearer
// ownership and error handling for developers.
