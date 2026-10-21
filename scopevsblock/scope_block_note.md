# Function Scope vs Block Scope

**Scope** decides where a variable can be accessed. JavaScript has these kinds:

| Scope    | Created by                     | Affects                    |
| -------- | ------------------------------ | -------------------------- |
| Global   | Top level of a script          | `var`, `let`, `const`, functions |
| Function | Every function                 | `var`, `let`, `const`, functions |
| Block    | Any `{ ... }` (`if`, `for`, `while`, `try`, bare block) | `let`, `const`, `class` (and functions in strict mode) |

**Key rule:** `var` ignores blocks (only functions create a scope for it). `let` and `const` respect blocks.

---

## 1. Function scope (`var`)

A variable declared inside a function is not visible outside it.

```js
function example() {
  var a = 10;
  console.log(a); // 10
}
example();
console.log(a); // ReferenceError: a is not defined
```

Anywhere inside the function (even in nested blocks) can use it:

```js
function demo() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 - 'var' is not limited to the if-block
}
```

## 2. Block scope (`let` / `const`)

```js
if (true) {
  let b = 20;
  const c = 30;
  console.log(b, c); // 20 30
}
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

A bare block also creates a scope:

```js
{
  let temp = "only here";
}
console.log(temp); // ReferenceError
```

## 3. `var` leaks out of blocks

```js
if (5 > 4) {
  var secret = 30;
}
console.log(secret); // 30 - works, because 'var' is function (or global) scoped
```

Same code with `let` fails:

```js
if (5 > 4) {
  let secret = 30;
}
console.log(secret); // ReferenceError
```

## 4. Loops

### Problem: `var` leaks the loop counter

```js
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
  console.log("Outside the loop, i is:", i); // 5 - still accessible
}
loop();
```

### Fix: `let` keeps the counter inside the loop

```js
function loopFixed() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
  console.log(i); // ReferenceError - 'i' only exists in the loop block
}
```

### Classic interview question: `setTimeout` in a loop

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 3 3 3
```

Why: there is only **one** `i` (function/global scoped). By the time the callbacks run, the loop has finished and `i` is `3`.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 0 1 2
```

Why: `let` creates a **new `i` for every iteration**, and each callback closes over its own copy.

Old fix for `var` (an IIFE creates a new function scope per iteration):

```js
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
// 0 1 2
```

## 5. Hoisting and the Temporal Dead Zone (TDZ)

- `var` is hoisted and initialized with `undefined`.
- `let` / `const` are hoisted but **not initialized** until their line runs. Accessing them earlier throws an error. That gap is the TDZ.

```js
console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;
```

## 6. `const`

`const` is block scoped and cannot be reassigned, but objects and arrays it holds can still be mutated.

```js
const n = 1;
n = 2; // TypeError: Assignment to constant variable

const user = { name: "Raushan" };
user.name = "Kumar"; // OK - the object is mutated, not reassigned
user = {}; // TypeError
```

## 7. Shadowing

An inner scope can declare a variable with the same name as an outer one. The inner one hides the outer one.

```js
let name = "outer";
{
  let name = "inner";
  console.log(name); // inner
}
console.log(name); // outer
```

Illegal shadowing: `var` cannot shadow a `let` in the same function scope.

```js
let a = 1;
{
  var a = 2; // SyntaxError: Identifier 'a' has already been declared
}
```

(`var` would be hoisted out of the block into the same scope as the outer `let`, so it collides.)

## 8. Scope chain

If a variable is not found in the current scope, JavaScript looks in the outer scope, and keeps going up to global.

```js
const g = "global";

function outer() {
  const o = "outer";
  function inner() {
    const i = "inner";
    console.log(i, o, g); // inner outer global
  }
  inner();
}
outer();
```

Lookup goes inside -> out only, never the other way.

## 9. Global scope gotchas

```js
var a = 1;
let b = 2;
console.log(window.a); // 1 (browser) - 'var' becomes a property of window
console.log(window.b); // undefined - 'let' does not

function f() {
  oops = 5; // no declaration (non-strict mode): creates an accidental global
}
f();
console.log(oops); // 5 - avoid this; use 'use strict' to get a ReferenceError instead
```

## 10. Other places that create a block scope

```js
// try / catch
try {
  throw new Error("x");
} catch (err) {
  let msg = err.message; // 'err' and 'msg' exist only in the catch block
}

// switch - one shared block for all cases, wrap cases in {} to isolate
switch (1) {
  case 1: {
    let v = "one";
    break;
  }
  case 2: {
    let v = "two"; // no clash because of the extra braces
    break;
  }
}
```

---

## Quick comparison

| Feature                 | `var`            | `let`          | `const`        |
| ----------------------- | ---------------- | -------------- | -------------- |
| Scope                   | function / global | block          | block          |
| Hoisted                 | yes (`undefined`) | yes (TDZ)      | yes (TDZ)      |
| Re-declare in same scope | allowed          | SyntaxError    | SyntaxError    |
| Reassign                | allowed          | allowed        | not allowed    |
| Becomes `window` property | yes (global)   | no             | no             |
| Per-iteration binding in `for` | no        | yes            | yes (but can't `i++`) |

## Summary

- `var` is function scoped; `let` and `const` are block scoped.
- Prefer `const` by default, `let` when you must reassign, and avoid `var`.
- Block scope limits where variables live, which prevents leaks and accidental overwrites.
- `let` in loops creates a fresh binding per iteration, which fixes the `setTimeout` closure problem.
- Accessing `let` / `const` before declaration throws (TDZ); `var` just gives `undefined`.
- Scope lookup follows the scope chain from the inside out.

## Interview questions

1. What is the difference between function scope and block scope?
2. What does this print, and why? `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i))`
3. What is the Temporal Dead Zone?
4. Can you change a property of a `const` object? Why?
5. Why does `let a = 1; { var a = 2; }` throw an error?
