# The Two Pillars of JavaScript

JavaScript is often explained through two related ideas:

1. **Functions**: reusable behavior that can be called, passed around, and returned.
2. **Objects**: collections of data and behavior. Functions stored on objects are called methods.

Closures and prototype inheritance build on these two pillars.

```mermaid
flowchart LR
    F[Functions] --> FC[First-class values]
    F --> I[Invocation]
    F --> C[Closures]
    O[Objects] --> M[Methods]
    O --> P[Prototype inheritance]
    I --> T[Determines this]
    FC --> O
    C --> O
```

## 1. Functions

A function is a reusable block of code. A function declaration can be called before its declaration because declarations are hoisted.

```js
sayHello();

function sayHello() {
  return "Hello";
}
```

### Function invocation

The way a function is invoked affects the value of `this`. A normal function also receives the `arguments` object automatically. Arrow functions do not create their own `this` or `arguments`.

```mermaid
flowchart TD
    A[Function call] --> B{How is it called?}
    B -->|plain call| C[showName()\nthis depends on strict mode]
    B -->|method call| D[user.showName()\nthis is user]
    B -->|call/apply/bind| E[Explicit this value]
    B -->|new| F[New object\nprototype linked]
```

#### 1. Plain function call

```js
function add(first, second) {
  return first + second;
}

add(2, 3); // 5
```

In strict mode, `this` is `undefined` in a plain function call. In non-strict mode, it is usually the global object.

```js
"use strict";

function inspectCall(value) {
  return {
    value,
    thisValue: this,
    argumentsCount: arguments.length,
  };
}

inspectCall("plain call");
```

#### 2. Method call

When a function is called through an object, the object before the dot becomes `this`.

```js
const user = {
  name: "Rohan",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

user.introduce(); // "Hi, I am Rohan"
```

The call site matters. Assigning the method to a variable removes the object receiver:

```js
const introduce = user.introduce;

// In strict mode, this is undefined inside introduce.
introduce();
```

#### 3. `call`, `apply`, and `bind`

These methods let us choose the `this` value for a normal function.

```js
function describe(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Maya" };

describe.call(person, "Hello", "!");
describe.apply(person, ["Welcome", "."]);

const describeMaya = describe.bind(person, "Hi");
describeMaya("!");
```

| Method  | Arguments                 | When the function runs               |
| ------- | ------------------------- | ------------------------------------ |
| `call`  | Comma-separated arguments | Immediately                          |
| `apply` | An array of arguments     | Immediately                          |
| `bind`  | Comma-separated arguments | Later, through the returned function |

#### 4. Constructor call with `new`

Calling a function with `new` creates an object, connects it to the function's prototype, binds `this` to the new object, and returns that object.

```js
function User(name) {
  this.name = name;
}

const firstUser = new User("Rohan");
firstUser.name; // "Rohan"
```

The `Function` constructor can create functions dynamically, but it is usually avoided because the code is evaluated at runtime and is harder to analyze safely.

```js
const returnFour = new Function("return 4");
const multiply = new Function("first", "second", "return first * second");

returnFour(); // 4
multiply(2, 3); // 6
```

### Functions are first-class values

In JavaScript, a function is data. It can be:

1. Assigned to a variable.
2. Stored as an object property.
3. Passed as an argument.
4. Returned from another function.

```js
// Assigned to a variable
const greet = function (name) {
  return `Hello, ${name}`;
};

// Stored as an object property
const actions = {
  greet,
};

// Passed as an argument
function run(action) {
  return action("Maya");
}

run(actions.greet); // "Hello, Maya"

// Returned from another function
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

The returned `increment` function remembers `count` after `createCounter` has finished. This preserved surrounding state is a **closure**.

```mermaid
flowchart LR
    A[createCounter()] --> B[Creates count = 0]
    B --> C[Returns increment]
    C --> D[counter()]
    D --> E[count becomes 1]
    E --> F[counter()]
    F --> G[count becomes 2]
    D -. remembers .-> B
    F -. remembers .-> B
```

### Functions inside loops

Declare reusable functions outside a loop when the function does not depend on the current iteration. This avoids recreating the same function unnecessarily.

```js
function logIteration(iteration) {
  console.log(`Iteration ${iteration}`);
}

for (let iteration = 0; iteration < 5; iteration += 1) {
  logIteration(iteration);
}
```

When a callback needs the current loop value, `let` creates a new binding for each iteration:

```js
const callbacks = [];

for (let index = 0; index < 3; index += 1) {
  callbacks.push(() => index);
}

callbacks.map((callback) => callback()); // [0, 1, 2]
```

### Parameters and default values

An undeclared identifier causes a `ReferenceError`. Define the parameter and give it a default value when a fallback is appropriate.

```js
function getValue(value = 6) {
  return value;
}

getValue(); // 6
getValue(10); // 10
```

The default is used only when the argument is `undefined`, not for every falsy value:

```js
getValue(undefined); // 6
getValue(0); // 0
getValue(null); // null
```

## Quick summary

```mermaid
mindmap
  root((JavaScript functions))
    Invocation
      Plain call
      Method call
      call/apply/bind
      new
    First-class values
      Assign
      Pass
      Return
      Store
    Scope
      Parameters
      Default values
      Closures
    Objects
      Properties
      Methods
      Prototypes
```

Keep these questions in mind when reading JavaScript:

- What function is being called?
- How is it being invoked?
- What will `this` refer to at that call site?
- Is the function being passed around as a value?
- Which variables can a returned function still access?
