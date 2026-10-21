# Variable Environment in JavaScript

The **variable environment** is the part of an execution context that stores variables and function declarations for that scope.

- Every execution context has its own variable environment.
- It is created together with the execution context and destroyed with it.

```js
function example() {
  var a = 10; // 'a' lives in example()'s variable environment
  console.log(a);
}
example();
```

When `example()` is invoked, a new execution context is created and `a` is stored in its variable environment. When the function finishes, both are destroyed.

## Each function gets its own environment

```js
function two() {
  var isValid; // local to two()
}

function one() {
  var isValid = true; // local to one()
  two(); // new execution context for two()
}

var isValid = false; // global
one();
console.log(isValid); // false - global variable is untouched
```

Three separate `isValid` variables exist, one per variable environment.

## Scope chain

Each environment holds a reference to its outer environment. When a variable isn't found locally, JavaScript walks up this chain.

```js
function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Raushan Kumar";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();
```

Note: scope is **lexical** (determined by where a function is written), not by where it is called. `findName` cannot see `a` from `sayMyName`, because it is defined globally.

Nested functions do see their enclosing variables:

```js
function sayMyName1() {
  var a = "a";
  return function findName() {
    var b = "b";
    // can access a and b, but NOT c
    return function printName() {
      var c = "c"; // can access a, b, c
      return "Rohan shekhar";
    };
  };
}

sayMyName1()()();
```

Outer scopes can never access variables from inner scopes (`console.log(c)` inside `findName` would throw a `ReferenceError`).

## Named function expressions (a weird part)

```js
var heyhey = function doodle() {
  doodle(); // works: the name is visible inside the function's own scope
  console.log("Inside doodle function");
};

heyhey(); // invoking via the variable
doodle(); // ReferenceError: doodle is not defined
```

- The name of a named function expression (`doodle`) is only bound **inside** the function itself, so it is useful for recursion and stack traces.
- It is not added to the enclosing scope, so `doodle()` outside throws a `ReferenceError`.
- Caveat: as written, `doodle()` calls itself unconditionally, so `heyhey()` recurses infinitely and throws `RangeError: Maximum call stack size exceeded` before the outer `doodle()` line is ever reached. Add a base condition to avoid this.
