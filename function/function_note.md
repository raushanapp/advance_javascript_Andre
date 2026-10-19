# JavaScript Functions

A function is a reusable block of code. Defining a function creates it; invoking (calling) it runs its body. Each function call creates a new function execution context, which is placed on the call stack while the function runs and removed when it returns.

## Function forms in `app.js`

### Function expression

A function expression creates a function value and assigns it to a variable. The assignment happens when execution reaches that line.

```js
var canada = function () {
  console.log("Cold");
};

canada(); // "Cold"
```

### Arrow function

An arrow function is another kind of function expression. It is also assigned when its line runs.

```js
var canadaArrow = () => {
  console.log("Cold");
};

canadaArrow(); // "Cold"
```

Arrow functions do not have their own `arguments` object or `this`; they use those from the surrounding scope. Use a regular function when you need a function-local `arguments` object or its own `this` behavior.

### Function declaration

A function declaration defines a named function. It can be called before its declaration in the same scope because declarations are initialized during that scope's setup.

```js
india(); // "Inside india function" and an empty arguments object, then "Warm"

function india() {
  console.log("Inside india function", arguments);
  console.log("Warm");
}
```

## Calling a function and the call stack

The functions in `app.js` are called one after another. Each call creates an execution context, runs its body, and returns to the global code:

```text
Start:             Call canada():      Return:             Call canadaArrow():
+----------------+ +----------------+  +----------------+  +----------------------+
| Global context | | canada context |  | Global context |  | canadaArrow context  |
+----------------+ +----------------+  +----------------+  +----------------------+

Then canadaArrow returns, india is called and returns, and exampleFunction calls run:

Global -> canada -> Global -> canadaArrow -> Global -> india -> Global
                                                        |
                                           context is removed on return
```

The global context remains at the bottom of the stack while each called function's context is pushed above it. When a function finishes, its context is popped and execution continues after the call.

## Parameters, `arguments`, rest parameters, and `this`

A regular function can access the arguments passed to it through the special `arguments` object. It is array-like, but it is not a true array.

```js
function exampleFunction(a, b) {
  console.log("Arguments:", arguments); // Arguments object containing 1 and 2
  console.log(Array.from(arguments)); // [1, 2]
  console.log("This:", this);
}

exampleFunction(1, 2);
```

`this` is not simply a value that is always created with one fixed meaning for every function call. For a regular function, its value depends on how the function is called (and on strict-mode rules). In the example above, the plain function call does not provide a receiver object; the exact displayed value can depend on the script environment and strict mode.

Rest parameters collect the remaining arguments into a real array:

```js
function exampleFunction2(...args) {
  console.log("Args:", args); // ["Tim", "Tina"]
  console.log(Array.from(arguments)); // ["Tim", "Tina"] for this regular function
  console.log("This:", this);
}

exampleFunction2("Tim", "Tina");
```

`args` is the array created by `...args`. `arguments` remains a separate array-like object here because `exampleFunction2` is a regular function. Prefer rest parameters when you want to collect function arguments as an array.

## Key points

- A function definition does not run the function; calling it does.
- Function expressions and arrow functions assigned to variables are evaluated at their assignment statements.
- Function declarations are initialized during scope setup and can be called before their source position.
- Each function call gets its own execution context on the call stack.
- Regular functions have their own `arguments` object; arrow functions do not.
- For regular functions, `this` depends on the call site. Arrow functions inherit `this` lexically from their surrounding scope.