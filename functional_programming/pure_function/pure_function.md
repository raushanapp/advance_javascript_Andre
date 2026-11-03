# Pure Functions in JavaScript

## Definition

A **pure function** has two important properties:

1. **Same input, same output:** for the same arguments, it always returns the same result.
2. **No observable side effects:** it does not change anything outside itself, such as a shared variable, an input object, the DOM, a file, or the console.

```js
function add(a, b) {
  return a + b;
}

add(3, 4); // 7
add(3, 4); // 7 again
```

`add` depends only on its arguments and returns a value. It does not update outside state.

## Visual model

```text
                  Same arguments
               ┌────────┴────────┐
               ▼                 ▼
          ┌───────────┐      ┌───────────┐
          │  f(input) │      │  f(input) │
          └─────┬─────┘      └─────┬─────┘
                ▼                  ▼
             output              output
                └────────┬─────────┘
                         ▼
                    Same result

          No changes escape the function
          (no mutation, logging, or I/O)
```

For example, `add(3, 4)` can be replaced by `7` without changing the program's behavior. This property is called **referential transparency**.

## Impure functions: side effects and hidden dependencies

A function is impure if it changes external state or relies on changing state outside its arguments.

### Mutating an input

```js
function removeLastItem(items) {
  items.pop(); // Changes the caller's array
  return items;
}

const numbers = [1, 2, 3];
removeLastItem(numbers);
console.log(numbers); // [1, 2] — the input was changed
```

### Reading a value outside the function

```js
let taxRate = 0.1;

function calculateTax(price) {
  return price * taxRate; // Depends on a variable not passed as an argument
}

calculateTax(100); // 10
taxRate = 0.2;
calculateTax(100); // 20 — same argument, different result
```

### Performing an effect

```js
function announce(message) {
  console.log(message); // Writes to the console
}
```

Logging, changing the DOM, making a network request, reading the current time, and generating random values are examples of effects or hidden dependencies. Such operations are often necessary in applications, but they are not pure.

## Pure functions with arrays

Avoid changing the caller's array. Create and return a new array instead:

```js
function removeLastItem(items) {
  const result = items.slice();
  result.pop();
  return result;
}

function multiplyByTwo(items) {
  return items.map((item) => item * 2);
}

const numbers = [1, 2, 3];

console.log(removeLastItem(numbers)); // [1, 2]
console.log(multiplyByTwo(numbers));  // [2, 4, 6]
console.log(numbers);                 // [1, 2, 3] — unchanged
```

`map` returns a new array, so this example does not mutate `items`. By contrast, methods such as `push`, `pop`, `splice`, and `sort` mutate the array they are called on.

### Important: copying can be shallow

Copying an array with `slice`, spread syntax (`[...]`), or `concat` only copies its outer structure. If the array contains objects, those objects are still shared. Updating a nested object can therefore mutate data visible to the caller.

```js
function renameFirstUser(users, name) {
  const result = users.slice(); // New array, but the user objects are shared
  result[0].name = name;        // Mutates an object from the input array
  return result;
}
```

To keep a function pure, do not mutate shared nested values. Create updated objects too:

```js
function renameFirstUser(users, name) {
  if (users.length === 0) return [];

  const [first, ...rest] = users;
  return [{ ...first, name }, ...rest];
}
```

This example creates a new array and a new first-user object. For deeply nested data, copy the changed objects at each affected level or use an established immutable-data approach.

## Referential transparency and composition

Pure functions are predictable building blocks. Their results can be composed without worrying that an earlier call secretly changed shared state:

```js
const double = (number) => number * 2;
const add = (a, b) => a + b;

const result = double(add(3, 4));
console.log(result); // 14
```

`add(3, 4)` always returns `7`, and `double(7)` always returns `14`. The expression can be reasoned about from its inputs and outputs alone.

## Keeping effects at the edges

Real applications need effects, such as user input, network calls, and displaying results. A useful design is to keep the core calculations pure and put effects at the edges:

```text
External world                 Pure core                 External world
user input ───────────────► validate / calculate ───────────────► display
network response ─────────► transform data    ───────────────► save / send
                              no I/O
```

For example, keep a calculation pure, then log its result outside the calculation:

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(12, 3); // Pure calculation
console.log(total);                  // Effect kept at the boundary
```

This does not mean an entire application must be pure. It means the logic that can be pure is easier to test and understand when separated from necessary effects.

## Why use pure functions?

- **Predictability:** outputs follow from the arguments.
- **Testability:** tests can check input/output without setting up external state.
- **Composability:** small functions can be combined reliably.
- **Safer reuse:** a function is less likely to unexpectedly affect its caller.
- **Easier debugging:** fewer hidden dependencies and state changes.

## Interview quick check

When deciding whether a function is pure, ask:

1. Does it return the same result whenever it receives the same arguments?
2. Does it avoid reading or changing external/shared state?
3. Does it avoid mutating objects passed into it?
4. Does it avoid observable effects such as logging, DOM updates, or I/O?

If all are true, it is pure. A function can create and modify its own local variables; that is not an external side effect as long as no shared input or outside state is changed.

**Interview answer:** “A pure function always produces the same output for the same input and has no observable side effects. That makes it predictable, easy to test, and safe to compose. In practice, I keep business logic pure where possible and isolate I/O and other effects at the application boundaries.”