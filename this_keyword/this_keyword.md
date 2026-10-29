# JavaScript `this` keyword

`this` is a value available inside a function. For regular functions, its value is
determined by **how the function is called**, not where the function was written.
The call site is the expression that invokes the function.

The useful question is not "what object contains this function?" but:

> **How was this function called?**

Arrow functions are the important exception: they do not create their own `this`.
They use the `this` value from the surrounding lexical scope.

## Call-site decision diagram

For a **regular function**, follow the way it is invoked:

```text
                       Is it an arrow function?
                       /                    \
                     yes                     no
                      |                       |
       Use surrounding lexical this       Called with new?
                                          /          \
                                        yes           no
                                         |             |
                                 New instance is    Was it created with
                                      `this`              bind?
                                                   /            \
                                                 yes             no
                                                  |               |
                                          Use bound `this`   Called with
                                                             call/apply?
                                                             /       \
                                                           yes        no
                                                            |          |
                                                 Use supplied this  Called as
                                                                 object.method()?
                                                                 /          \
                                                               yes           no
                                                                |             |
                                                        object is this   Default this:
                                                                      undefined in strict
                                                                      mode; global object
                                                                      in sloppy mode
```

For regular functions, `new` takes precedence over a `this` value set by `bind`.
A bound function keeps its bound `this` even if later called with `call` or
`apply`. Arrow functions have lexical `this`, so `call`, `apply`, and `bind`
cannot change it.
`bind` creates a new function; unlike `call` and `apply`, it does not invoke
the original function immediately.

## 1. Method call: the object before the dot

When a regular function is called as `object.method()`, the object to the left
of the dot is its `this` value for that call.

```js
const singer = {
  name: "Billie",
  sing() {
    return `La la la, I'm ${this.name}.`;
  },
};

singer.sing(); // "La la la, I'm Billie."
```

Here, `singer.sing()` is the call site, so `this` inside `sing` is `singer`.
This is a call-time relationship: putting a function on an object does not
permanently bind it to that object.

## 2. Reusing a regular function

The same function can work with different objects because each method call
supplies its own receiver:

```js
function introduce() {
  return `I'm ${this.name}.`;
}

const cassy = { name: "Cassy", introduce };
const jacob = { name: "Jacob", introduce };

cassy.introduce(); // "I'm Cassy."
jacob.introduce(); // "I'm Jacob."
```

The function is the same; the call sites determine the different `this` values.

## 3. Plain function call and strict mode

A plain call has no object receiver:

```js
"use strict";

function showThis() {
  return this;
}

showThis(); // undefined
```

In strict mode, a regular function's `this` stays `undefined` when it is called
plainly. In non-strict (sloppy) mode, JavaScript substitutes the global object
instead. Avoid depending on the global-object behavior; it can vary by runtime
and may hide mistakes.

## 4. Explicit binding: `call`, `apply`, and `bind`

These methods let you provide a `this` value explicitly:

```js
const person = { name: "Ari" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

greet.call(person, "Hello", "!");        // "Hello, Ari!"
greet.apply(person, ["Hi", "."]);        // "Hi, Ari."

const greetPerson = greet.bind(person, "Welcome");
greetPerson("!");                        // "Welcome, Ari!"
```

- `call(thisValue, arg1, arg2, ...)` invokes the function immediately with
  separate arguments.
- `apply(thisValue, [args])` invokes it immediately with arguments in an array.
- `bind(thisValue, arg1, ...)` returns a new function with `this` (and optionally
  some leading arguments) fixed for later calls.

## 5. Constructor call: `new`

Calling a constructor with `new` creates an instance and makes that instance
the function's `this`:

```js
function Animal(name) {
  this.name = name;
}

const otter = new Animal("Otter");
otter.name; // "Otter"
```

Conceptually, `new Animal("Otter")` creates an object, runs `Animal` with that
object as `this`, and returns the object (unless the constructor explicitly
returns another object).

## 6. Nested functions and arrow functions

A nested regular function does not inherit `this` from the method containing
it. It follows its own call site. An arrow function does inherit `this`:

```js
const musician = {
  name: "Alex",
  showNames() {
    function regularInnerFunction() {
      return this;
    }

    const arrowInnerFunction = () => this;

    return {
      methodThis: this.name,                     // "Alex"
      regularFunctionThis: regularInnerFunction(), // undefined in strict mode
      arrowFunctionThis: arrowInnerFunction().name, // "Alex"
    };
  },
};

musician.showNames();
```

`showNames` is called as `musician.showNames()`, so its `this` is `musician`.
The regular inner function is called plainly, so its `this` is `undefined` in
strict mode. The arrow function captures the method's `this`.

Before arrow functions, a common solution was to save the value:

```js
const musician = {
  name: "Alex",
  showName() {
    const self = this;
    function printName() {
      return self.name;
    }
    return printName();
  },
};
```

Another option is to bind the inner function:

```js
const musician = {
  name: "Alex",
  showName() {
    const printName = function () {
      return this.name;
    }.bind(this);
    return printName();
  },
};
```

## 7. A detached method

Copying a method into a variable removes the object from the call site:

```js
const cassy = {
  name: "Cassy",
  showThis() {
    return this;
  },
};

const detachedShowThis = cassy.showThis;
detachedShowThis(); // undefined in strict mode
detachedShowThis.call(cassy); // the cassy object
```

In this example, the detached function returns `this` itself, so its strict-mode
plain call visibly returns `undefined`. If a detached method instead tries to
read `this.name`, it throws a `TypeError` in strict mode because `this` is
`undefined`.

If a callback needs the original object's `this`, pass a bound function or use
an arrow callback where its surrounding `this` is the desired one.

## Connecting the note to `app.js`

The examples in [`app.js`](./app.js) demonstrate the same rules:

| Example in `app.js` | What happens |
| --- | --- |
| `obj.sing()` and `obj.singAgain()` | Both are method calls, so `this` is `obj`. |
| `obj1.importantPerson()` and `obj2.importantPerson()` | The shared function uses `obj1` or `obj2`, depending on the call site. Both objects define `name` but not `firstName`, so the second value it logs is `undefined!`. |
| `importantPerson()` and the plain calls to `a()` and `b()` | These use default binding. In a non-strict script, `this` is the global object; in strict mode, it is `undefined`. |
| `c.hi()` inside `b` | `hi` is called as a method, so `this` is `c`, even though it is nested inside other functions. |
| `obj3.sing()` and `anotherFunction()` inside it | `sing` receives `obj3` as `this`; the separately called regular `anotherFunction` does not inherit that value. |
| `obj4.sing()` and its arrow function | The arrow function captures `this` from `sing`, so it refers to `obj4`. |
| `anotherFunc.bind(this)` inside `objects.sing()` | `bind` returns a function fixed to `objects`. `objects.sing()` returns that function, but the current code does not invoke it. To see its log, the returned function would need to be called, for example `objects.sing()()`. |
| `self = this` inside `obj5.sing()` | The regular inner function reads the saved reference, so it can access the outer method's object. |
| `new Person("John", 30)` | `new` creates a `Person` instance and uses it as `this` inside the constructor. |
| `person2.greet()` | This method call makes `person2` its `this`, so it can read `name` and `age`. |

The last examples in the current file are worth noticing when reading its
output: `person3.greet` is bound to `window`, but the code calls
`person2.greet()` instead, so `person3.greet` never runs. Likewise,
`person4.hi()` would demonstrate an arrow function using `person4` as `this`,
but the current file calls `person2.greet()` again rather than `person4.hi()`.
These notes describe the current code without changing those calls.

The `person3` example refers to the browser's `window` object, so the file is
intended to run as a browser script. Running it directly with Node.js will fail
at `window` because Node.js does not provide that browser global.

## Quick reference

| Call form | `this` for a regular function |
| --- | --- |
| `object.method()` | `object` |
| `method.call(object, ...)` / `method.apply(object, ...)` | The supplied `object` |
| `method.bind(object)` | The supplied `object` on calls to the bound function |
| `new Constructor()` | The newly created instance |
| `method()` in strict mode | `undefined` |
| `method()` in sloppy mode | The global object |
| Arrow function | Inherited from the surrounding lexical scope |

## Remember

1. For a regular function, inspect the **call site** to determine `this`.
2. `object.method()` sets `this` to `object`; assigning a method to an object
   alone does not bind it.
3. A plain regular-function call has `this === undefined` in strict mode.
4. Use `call`, `apply`, or `bind` when you need to provide a receiver explicitly.
5. Arrow functions inherit `this`; they are useful for nested callbacks but are
   usually not suitable as object methods when the method needs the object as
   `this`.

## Run the examples

The matching examples are in [`app.js`](./app.js). Because that file refers to
`window`, run it as a browser script (for example, in the browser developer
console or from a page that loads it), not directly with Node.js.
