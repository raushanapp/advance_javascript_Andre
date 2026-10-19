# JavaScript Hoisting

Hoisting describes how JavaScript processes declarations when it creates an execution context. Before executing statements, the engine creates bindings for declarations in the current scope. The declarations are not physically moved in the source code.

The key distinction is what value a binding has before execution reaches its declaration:

| Declaration | Before its declaration is reached |
|---|---|
| `var name` | Binding exists and has the value `undefined` |
| `function name() {}` | Binding exists and contains the function |
| `let name` / `const name` | Binding exists but is in the temporal dead zone (TDZ); accessing it throws a `ReferenceError` |
| `var name = function () {}` | The `var` binding is `undefined`; the function value is assigned only when that statement runs |

## A small example

```js
console.log(animal); // undefined
console.log(sound()); // "woof"

var animal = "dog";

function sound() {
  return "woof";
}
```

Conceptually, the setup and execution look like this:

```text
Source code                         Before statements execute
-----------                         -------------------------
console.log(animal)                 animal -> undefined
console.log(sound())                sound  -> function sound() { ... }
var animal = "dog"                  (assignment runs later)
function sound() { ... }            (function is available now)
             │
             └── execute top to bottom ──>
                 log undefined, log "woof", assign "dog"
```

This is a mental model for declaration setup, not literal code rearrangement.

## Function declarations and function expressions

A function declaration is available throughout its scope:

```js
greet(); // "Hello"

function greet() {
  console.log("Hello");
}
```

A function expression assigned to `var` is different. Only the variable binding is initialized to `undefined`; the assignment happens in order:

```js
console.log(greetLater); // undefined
// greetLater(); // TypeError: greetLater is not a function

var greetLater = function () {
  console.log("Hello later");
};

greetLater(); // "Hello later"
```

Calling the expression before its assignment does not produce a `ReferenceError`: the name exists, but its value is `undefined` and is not callable. If the binding were declared with `let` or `const`, accessing it before its declaration instead would throw a `ReferenceError` because it is in the TDZ.

## What the examples in this folder demonstrate

- In [app.js](./app.js), `teddy` is `undefined` before the `var teddy = "bear"` assignment, while the `sing` function declaration can be called before its source position.
- `sing2` is assigned a function expression. In the current file, `sing2()` is called before that assignment, so it throws a `TypeError` and stops the script there. The comment calling this a `ReferenceError` is inaccurate.
- `sing1` is the name of a named function expression, not a declaration in the surrounding scope. The expression is not invoked, and the later `sing1()` call outside it throws a `ReferenceError` because that name is not defined in the surrounding scope.
- In [exercise.js](./exercise.js), the second same-scope `a` function declaration is the one used, so `a()` logs `"Bye"`. The second `littleBrother` declaration similarly means `bigBrother()` returns `"no me!"`. The comments saying the first declaration wins are inaccurate.
- In `foodThoughts`, the local `var favouriteFood` binding shadows the outer binding for the whole function. Its value is initially `undefined`; after the assignment, it is `"sushi"`. Without the local declaration, the function would read the outer `"grapes"` value.

## Practical guidance

Hoisting is useful for understanding JavaScript, but avoid relying on declarations appearing after their use. Declare variables before using them, prefer `const` by default (and `let` when reassignment is needed), and use function declarations or expressions consistently. This makes execution order and scope easier to see.