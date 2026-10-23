# JavaScript `call`, `apply`, and `bind`

Regular functions get their `this` value from how they are called. The
`call`, `apply`, and `bind` methods let you explicitly choose that value.

## At a glance

```text
function.call(thisValue, arg1, arg2, ...)
        └─ invoke now; pass arguments separately

function.apply(thisValue, [arg1, arg2, ...])
        └─ invoke now; pass arguments in an array (or array-like value)

function.bind(thisValue, arg1, arg2, ...)
        └─ return a new function to invoke later
```

| Method | Sets `this`? | Invokes immediately? | How arguments are supplied |
| --- | --- | --- | --- |
| `call` | Yes | Yes | Separately |
| `apply` | Yes | Yes | In an array or array-like value |
| `bind` | Yes | No; returns a function | Separately; optional arguments can be preset |

## A simple example

```js
const person = { name: "Ari" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

greet.call(person, "Hello", "!");       // "Hello, Ari!"
greet.apply(person, ["Hi", "."]);       // "Hi, Ari."

const greetAri = greet.bind(person, "Welcome");
greetAri("!");                           // "Welcome, Ari!"
```

In the first two calls, the function runs immediately. `bind` instead returns
`greetAri`, a new function with `this` set to `person` and `"Welcome"` already
provided as the first argument.

## Borrowing a method

A method can be written on one object and called with another object as `this`.
This is often called **method borrowing**:

```js
const wizard = {
  name: "Merlin",
  health: 50,
  heal(amount1, amount2) {
    this.health += amount1 + amount2;
    return this.health;
  },
};

const archer = {
  name: "Robin Hood",
  health: 80,
};

wizard.heal.call(archer, 100, 20);       // 200; archer.health is now 200
wizard.heal.apply(archer, [100, 30]);    // 330; archer.health is now 330

const healArcher = wizard.heal.bind(archer, 50, 50);
healArcher();                            // 430; archer.health is now 430
```

Although the function is stored as `wizard.heal`, each example explicitly
supplies `archer` as `this`, so it updates `archer.health`. The calls above run
in sequence; each result uses the health left by the previous call.

## `call` versus `apply`

The main difference is how you pass the arguments:

```js
function add(a, b) {
  return a + b;
}

add.call(null, 2, 3);       // 5
add.apply(null, [2, 3]);    // 5
```

Here `add` does not use `this`, so `null` is supplied for the receiver.

`apply` is also useful when a function expects separate arguments but the
values are already in an array:

```js
const numbers = [-1, 0, -6, 1, 2, 3, 5];

Math.max.apply(null, numbers); // 5
Math.min.apply(null, numbers); // -6
```

In modern JavaScript, spread syntax is usually the more readable choice:

```js
Math.max(...numbers); // 5
Math.min(...numbers); // -6
```

## `bind` and preset arguments

`bind` can preset leading arguments. This is called **partial application**:

```js
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);
const multiplyByTwenty = multiply.bind(null, 20);

multiplyByTwo(5);     // 10
multiplyByTwenty(5);  // 100
```

Because `multiply` does not read `this`, `null` is used as the `this` argument.
This pattern is often called currying in casual examples, but technically
partial application fixes one or more arguments; currying transforms a
multi-argument function into a sequence of single-argument functions.

## Important details

- `call` and `apply` invoke the original function and return its result.
- `bind` does not invoke the original function. It returns a new bound function.
- For a regular function, a bound `this` cannot be replaced by a later
  `call`/`apply`; the bound function keeps the value supplied to `bind`.
- Passing arguments to `bind` presets those leading arguments; later calls can
  supply the remaining arguments.
- Arrow functions have lexical `this`. `call`, `apply`, and `bind` cannot change
  an arrow function's `this` (although a bound arrow can still preset arguments).
- In strict mode, a regular function uses the exact `this` value supplied.
  Outside strict mode, `null`/`undefined` and primitive values may be converted
  according to JavaScript's `this` rules.

## Quick memory aid

> **Call now, apply an array now, bind for later.**

See [`app.js`](./app.js) for the runnable examples this note is based on.