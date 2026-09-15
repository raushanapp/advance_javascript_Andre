// ES2021 features in JavaScript
// This version improved string handling and promises.

// 1) String.prototype.replaceAll()
// Earlier, replace() only changed the first match.
// replaceAll() changes every matching occurrence.

const str = "ztm is the best of the best";
const updatedStr = str.replaceAll("best", "worst");
console.log(updatedStr); // "ztm is the worst of the worst"

// 2) Logical Assignment Operators
// These combine assignment with logical operators.

let score = 10;
score &&= 20;
console.log(score); // 20

let count = 0;
count ||= 5;
console.log(count); // 5

let userName = null;
userName ??= "guest";
console.log(userName); // "guest"

// 3) Promise.any()
// Returns the first fulfilled promise.
// It ignores rejected promises until one succeeds.

const p1 = Promise.reject("first failed");
const p2 = Promise.resolve("second succeeded");
const p3 = Promise.resolve("third also succeeded");

Promise.any([p1, p2, p3]).then((value) => {
  console.log(value); // second succeeded
});

// 4) Numeric separators
// Makes large numbers easier to read.

const amount = 1_000_000_000;
console.log(amount); // 1000000000

// 5) FinalizationRegistry and WeakRef
// These are newer low-level features for resource cleanup patterns.
// They are not usually used in beginner examples, but they are part of ES2021.

// Summary:
// ES2021 adds more expressive string operations and safer logical value handling.
