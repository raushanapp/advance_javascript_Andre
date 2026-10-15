# JavaScript Execution Context and Lexical Environment

## Execution context

An **execution context** is the JavaScript engine's internal setup for
evaluating code. It keeps track of the code currently running and the
environment needed to run it. JavaScript creates a global execution context
for the script or module, and creates a function execution context whenever a
function is called.

Commonly taught kinds of execution context are:

1. **Global execution context** — created to run a script or module.
2. **Function execution context** — created for each function call.
3. **Eval execution context** — associated with evaluated `eval()` code; `eval`
   is uncommon and generally best avoided.

### Creation and execution

For learning purposes, it is useful to think of a context as being prepared
before its code runs:

1. **Creation/setup:** JavaScript establishes the context's scope information,
   bindings, and `this` value.
2. **Execution:** JavaScript evaluates statements and expressions in order.

This is a teaching model, not a literal two-pass scan of every line. For
example, function declarations are available before their textual position,
`var` bindings are initialized to `undefined`, and `let`/`const` bindings
cannot be accessed before initialization (the temporal dead zone).

## Call stack

The **call stack** tracks which execution contexts are currently active.
Calling a function pushes its context; returning from it pops that context.
For the `sayMyName()` call in [app.js](./app.js), the synchronous calls proceed
like this:

```text
Call stack grows upward

After all calls return:       While printName() runs:
┌────────────────────┐        ┌────────────────────┐
│ Global context     │        │ printName context  │  <- top / running
└────────────────────┘        ├────────────────────┤
                              │ findName context   │
                              ├────────────────────┤
                              │ sayMyName context  │
                              ├────────────────────┤
                              │ Global context     │
                              └────────────────────┘

Call order:   sayMyName -> findName -> printName
Return order: printName -> findName -> sayMyName
```

The global context is not recreated for each function call; it remains below
the active function contexts until the script or module has finished.

## Lexical environment

A **lexical environment** is the specification's mechanism for associating
identifier names with their bindings. It contains an environment record and a
reference to an outer lexical environment. In everyday terms, it lets
JavaScript find variables according to the code's written nesting (lexical
scope), rather than according to the function call site.

When code refers to a name, JavaScript looks in the current environment first.
If it is not there, it follows the outer-environment references until it finds
the binding or reaches the end of the chain.

### Lexical-environment diagram

The `greet` function returned by `createGreeter("Raushan")` in [app.js](./app.js)
can still access `name` and `punctuation` after `createGreeter` has returned:

```text
Lexical lookup from greet()

┌─────────────────────────────────┐
│ greet function environment      │
│ (local declarations, if any)    │
└────────────────┬────────────────┘
                 │ outer
                 v
┌─────────────────────────────────┐
│ createGreeter environment       │
│ name        = "Raushan"         │
│ punctuation = "!"               │
└────────────────┬────────────────┘
                 │ outer
                 v
┌─────────────────────────────────┐
│ Global environment              │
│ globalGreeting = "Hello"        │
└─────────────────────────────────┘
```

The returned function plus the lexical environment it retains access to is
called a **closure**. The environment chain describes where names can be
found; the call stack describes which calls are currently active. They are
related, but they are not the same diagram or data structure.

## `this` and the global object

`globalThis` is the standard way to refer to the host's global object.
Top-level `this` is not universally equal to the global object: for example,
it is `undefined` at the top level of an ES module, while classic browser
scripts have different behavior. Inside a function, `this` depends on how that
function is called (with special behavior for arrow functions). Therefore,
avoid assuming that `this === globalThis`.

## Try the example

Run `app.js` with a JavaScript runtime such as Node.js. It prints:

```text
Name printed!
Hello, Raushan!
```