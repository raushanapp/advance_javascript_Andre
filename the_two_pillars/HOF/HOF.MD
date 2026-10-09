# Higher-Order Functions (HOF)

This note explains the examples in [`app.js`](./app.js).

## What is a higher-order function?

A **higher-order function** is a function that does at least one of these things:

1. Takes another function as an argument.
2. Returns a function.

The two patterns are related, but they are not the same. The `letPerson` example demonstrates passing a function in; `multiplyBy` demonstrates returning one.

## Passing data into a reusable function

The first two login functions each do similar work and return a message. A reusable function can instead take the changing value as an argument:

```js
const giveAccessTo = (name) => "Acess Granted to " + name;
```

For example, `giveAccessTo("Eva")` returns `"Acess Granted to Eva"`. The function does not need a separate implementation for each person's name.

`letUserLogin(user)` and `letAdminLogin(admin)` call `giveAccessTo` with the supplied value. In the current code, those values are strings, so they work as written. By contrast, `authenticate(verify)` expects an object with `name` and `takeTime` properties.

## Passing a function into another function

`letPerson(person, fn)` receives both a person object and a function. It then calls the function with that person:

```js
fn(person)
```

Here, `fn` is often called a **callback**: a function passed to another function so the receiving function can call it.

The examples use different callbacks:

```js
letPerson({ level: "user", name: "Tim", takeTime: 10000 }, authenticate);
letPerson({ level: "admin", name: "sally", takeTime: 500000 }, authenticate);
letPerson({ level: "admin", name: "sally" }, sing);
```

The first two call `authenticate(person)`. The third calls `sing(person)`. `letPerson` does not need to know the internal details of either callback; it just chooses when to call it and passes the person along.

### Current behavior of `letPerson`

The function checks whether `person.level` is `"admin"` or `"user"`, and calls `fn(person)` for either level. Those two branches currently do the same thing, so the level check does not change the result. If the level is neither value, the function returns `undefined`.

This is a basic callback demonstration, not a complete authorization system: it does not verify credentials or enforce different permissions for admins and users.

## Returning a function: `multiplyBy`

`multiplyBy(num1)` returns another function:

```js
function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
```

For example:

1. `multiplyBy(2)` returns a function that remembers `num1` as `2`.
2. Assigning it to `multiplyByTwo` lets us call that returned function later.
3. `multiplyByTwo(10)` uses `num2` as `10` and returns `2 * 10`, or `20`.

The returned function still has access to `num1` after the outer `multiplyBy` call has finished. This is a **closure**: the inner function retains access to variables from the scope where it was created.

The arrow-function version has the same behavior:

```js
const multiplyByArrow = (num1) => (num2) => num1 * num2;
```

`multiplyByArrow(2)(10)` means “call the outer function with `2`, then call the function it returns with `10`.”

## Important corrections to the current examples

- In `authenticate`, the condition is backwards: `if (!verify?.takeTime)` means the loop runs when `takeTime` is falsy, not when it is a positive number. With the example values `10000` and `500000`, the loop is skipped. The function still returns an access message, so these examples do **not** currently perform the work their `takeTime` values suggest.
- If `verify` is missing, the current condition can enter the branch and then `verify.takeTime` will throw an error. A clearer implementation for the intended loop is:

  ```js
  function authenticate(verify) {
    const array = [];
    for (let i = 0; i < (verify.takeTime ?? 0); i++) {
      array.push(i);
    }
    return giveAccessTo(verify.name);
  }
  ```

  This assumes `verify` is an object. In production code, validate the object and its fields before using them.
- `letEvaLogin()` currently returns `"Access Granted to Adam"`; that appears to be a copy-and-paste mistake.
- The message in `giveAccessTo` spells “Access” as `"Acess"`. That spelling is part of the current return value.

## Quick summary

- Pass a value to a function to reuse its behavior with different data.
- Pass a function to another function when that function should decide when to run it: this is the callback pattern.
- Return a function to create reusable behavior that can remember values from its outer scope: this uses a closure.
- A function is higher-order if it accepts a function, returns a function, or both.