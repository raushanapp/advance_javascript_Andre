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

## 5. Undefined

When a variable is declared but no value is assigned, its value is
`undefined`.

```js
var password;
console.log(password); // undefined
```

`undefined` means that a value has not been assigned. This is different from
`null`, which is an intentional empty value.

## 6. Control Flow and Conditional Statements

Control flow determines which code runs. JavaScript conditional statements
include:

- `if` - runs code when a condition is true.
- `else if` - checks another condition when the previous condition is false.
- `else` - runs when none of the previous conditions are true.
- Ternary operator - a short form of `if...else` for simple conditions.
- `switch` - compares one value with several `case` values.

```js
const name = "Billay";

if (name === "Billay") {
  console.log("Hi Billay");
} else if (name === "Susy") {
  console.log("Hi Susy");
} else {
  console.log("I do not know you");
}
```

JavaScript checks the conditions from top to bottom. Once it finds a true
condition, it runs that block and skips the remaining blocks.

## 7. Logical Operators

Logical operators combine or reverse conditions.

| Operator | Name        | Meaning                                 |
| -------- | ----------- | --------------------------------------- | ---------- | ---------------------------------------- |
| `&&`     | Logical AND | True only when both conditions are true |
| `        |             | `                                       | Logical OR | True when at least one condition is true |
| `!`      | Logical NOT | Reverses a Boolean value                |

```js
const name = "Ann";

if (name === "Billay" || name === "Ann") {
  console.log("The name is Billay or Ann");
}

if (name === "Billay" && name === "Ann") {
  console.log("This will not run because both cannot be true");
}

if (!(name === "Bob")) {
  console.log("The name is not Bob");
}
```

Boolean examples:

```js
!true; // false
!false; // true
```

### Interview points

- `if...else` is useful when conditions need to be evaluated in order.
- `&&` requires every condition to be true.
- `||` requires at least one condition to be true.
- `!` changes `true` to `false` and `false` to `true`.
- Prefer `const` for values that are not reassigned. The example source uses
  `var` because it is demonstrating variable declarations.

## 8. JavaScript Functions

A function is a reusable block of code that performs an action. A function can
perform one action or several actions.

### Function declaration

A function declaration uses the `function` keyword and a function name. It can
be called after it is declared, and function declarations are hoisted.

```js
function sayHello() {
  console.log("Hello");
}

sayHello(); // Hello
```

### Function expression

A function expression stores a function in a variable. When the function has
no name, it is called an **anonymous function**.

```js
const sayBye = function () {
  console.log("Bye");
};

sayBye(); // Bye
```

The variable `sayBye` references the function, so adding `()` calls the
function.

### Parameters and arguments

- **Parameters** are the named variables in a function definition.
- **Arguments** are the actual values passed when the function is called.

```js
function multiply(a, b) {
  // a and b are parameters
  return a * b;
}

const result = multiply(5, 20); // 5 and 20 are arguments
console.log(result); // 100
```

Using parameters makes a function reusable and helps avoid repeating the same
code, which follows the DRY principle: **Don't Repeat Yourself**.

### The `return` statement

`return` sends a value back to the code that called the function. It also ends
the function immediately. A function without a `return` statement returns
`undefined`.

```js
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // Code here would not run.
}

function showMessage() {
  console.log("Hello");
}

console.log(add(2, 3)); // 5
console.log(showMessage()); // Hello, then undefined
```

### Arrow function

Arrow functions were introduced in ES6. They provide a shorter syntax for
function expressions.

```js
const multiplyNumbers = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const double = (number) => number * 2;
```

### Interview points

- A function declaration has a name and is hoisted.
- A function expression is assigned to a variable and is not usable before
  that assignment runs.
- Parameters are placeholders; arguments are the values passed to them.
- `return` provides a result and stops the function.
- Calling a function without a returned value produces `undefined`.
- Functions are first-class values in JavaScript, so they can be stored in
  variables, passed as arguments, and returned from other functions.

## 9. Arrays and Objects

### Arrays (source lines 118-131)

An array is an ordered collection of values. JavaScript arrays can contain
different data types, including strings, numbers, booleans, objects, and
functions.

```js
const list = ["tiger", "cat", "bear", "bird"];
const mixedValues = ["text", 10, true, function () {}];

console.log(list[0]); // "tiger"
console.log(list.length); // 4
```

Arrays use zero-based indexes, so the first item is at index `0`.

Functions can also be stored in an array and called using their index:

```js
const functionList = [
  function apple() {
    console.log("Apple function called");
  },
  function banana() {
    console.log("Banana function called");
  },
];

functionList[0](); // Apple function called
functionList[1](); // Banana function called
```

### Objects (source lines 133-152)

An object stores related data as **key-value pairs**. The keys are called
properties. A function stored inside an object is called a **method**.

```js
const user = {
  name: "John",
  age: 34,
  isMarried: false,
  spells: ["abrakadra", "shuzan", "boo"],
  shout: function () {
    console.log("AHHHHHH!");
  },
};
```

Read object properties with dot notation or bracket notation:

```js
console.log(user.name); // "John"
console.log(user["name"]); // "John"
```

Dot notation is concise. Bracket notation is useful when the property name is
stored in a variable or contains characters that are not valid in dot notation.

```js
const propertyName = "name";
console.log(user[propertyName]); // "John"
```

Objects can be changed after creation. You can add a property or update an
existing property, then call a method on the object:

```js
user.favouriteFood = "spinach"; // add a property
user.isMarried = true; // update a property
user.shout(); // call the method
```

### Arrays of objects (source lines 154-165)

An array of objects is useful for representing a collection of records, such
as users, products, or orders.

```js
const users = [
  { username: "andy", password: "secret", id: 1 },
  { username: "jess", password: "secret", id: 2 },
];

console.log(users[0].username); // "andy"
console.log(users[1]["id"]); // 2
```

### Interview points

- Arrays are ordered collections and use zero-based indexes.
- Arrays can contain mixed value types, including functions and objects.
- Objects store data as key-value pairs.
- A function inside an object is called a method.
- Dot notation and bracket notation both access object properties.
- `var list` is declared earlier in the source and declared again later. This
  is allowed because `var` can be redeclared, but `let` and `const` cannot be
  redeclared in the same scope. Prefer `const` when the variable is not
  reassigned.
