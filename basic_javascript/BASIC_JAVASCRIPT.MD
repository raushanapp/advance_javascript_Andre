# JavaScript Basics

## 1. JavaScript Data Types

JavaScript has **two categories of data types**:

### Primitive data types

Primitive values are immutable and are not objects.

1. **Number** - integers and floating-point values.
   ```js
   const age = 25;
   const price = 19.99;
   ```
2. **String** - text wrapped in single quotes, double quotes, or backticks.
   ```js
   const name = "Raushan";
   ```
3. **Boolean** - either `true` or `false`.
   ```js
   const isLoggedIn = true;
   ```
4. **Undefined** - a declared variable that has not been assigned a value.
   ```js
   let result;
   console.log(result); // undefined
   ```
5. **Null** - an intentional absence of a value.
   ```js
   const selectedUser = null;
   ```
6. **Symbol** - a unique value, commonly used as a unique object property key.
   ```js
   const id = Symbol("id");
   ```
7. **BigInt** - integers larger than `Number.MAX_SAFE_INTEGER`.
   ```js
   const largeNumber = 9007199254740993n;
   ```

### Non-primitive data type

8. **Object** - a collection of related data. Arrays and functions are also
   objects in JavaScript.
   ```js
   const user = { name: "Raushan", age: 25 };
   const numbers = [1, 2, 3];
   ```

Check a value's type with `typeof`:

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof null; // "object" (a historical JavaScript behavior)
typeof undefined; // "undefined"
```

## 2. JavaScript Comparisons

Comparison operators return a Boolean value.

| Operator | Meaning                                   |
| -------- | ----------------------------------------- |
| `===`    | Strict equality: same value and same type |
| `!==`    | Strict inequality                         |
| `==`     | Loose equality: may convert types         |
| `!=`     | Loose inequality                          |
| `>`      | Greater than                              |
| `<`      | Less than                                 |
| `>=`     | Greater than or equal to                  |
| `<=`     | Less than or equal to                     |

Prefer strict comparison in most application code because it avoids implicit
type conversion:

```js
5 === "5"; // false
5 == "5"; // true
```

## 3. JavaScript Variables

Variables are declared with `let`, `const`, or `var`.

### `let`

Use `let` when the variable will be reassigned. It is block-scoped.

```js
let score = 0;
score = 10;
```

### `const`

Use `const` when the variable binding will not be reassigned. It is also
block-scoped.

```js
const country = "India";
```

An object declared with `const` can still be mutated; the variable itself
cannot point to a different object:

```js
const user = { name: "Raushan" };
user.name = "Alex"; // allowed
// user = {};        // TypeError
```

### `var`

`var` is function-scoped and can be redeclared. Prefer `let` and `const` in
modern JavaScript because their block scope makes code easier to reason about.

## 4. Variable Naming Rules

1. A variable name may start with a letter, `_`, or `$`.
2. It cannot start with a number.
3. After the first character, it may contain letters, numbers, `_`, or `$`.
4. Variable names are case-sensitive: `userName` and `username` are different.
5. Do not use reserved JavaScript keywords such as `class`, `return`, or
   `function` as variable names.
6. Use descriptive names and `camelCase` by convention.

```js
const firstName = "Raushan";
let itemCount = 3;
const _internalValue = 10;
const $element = document.querySelector("#basic");
```

Invalid examples:

```js
// const 1name = "Raushan"; // cannot start with a number
// const user-name = "Raushan"; // hyphens are interpreted as subtraction
// const class = "basic"; // reserved keyword
```

## Interview Quick Answers

### What is the difference between `let`, `const`, and `var`?

`let` and `const` are block-scoped. `let` can be reassigned, while `const`
cannot be reassigned. `var` is function-scoped and can be redeclared, so it is
usually avoided in modern JavaScript.

### What is the difference between `==` and `===`?

`==` allows type coercion before comparing. `===` compares both value and type
without coercion, so it is generally the safer default.

### Is `null` an object?

`typeof null` returns `"object"` because of a historical language bug. Conceptually,
`null` represents an intentional absence of a value and is treated as a
primitive value.
