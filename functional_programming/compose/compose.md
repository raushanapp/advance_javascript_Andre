# Function Composition in Functional Programming

## What is Composition?

Composition is a fundamental principle in functional programming that allows you to combine simple functions to create more complex operations. It's about building complex functionality by composing smaller, reusable, and pure functions together.

> **Definition**: Composition is a system design principle that deals with the relationship between components and how they can be combined to form more complex operations.

---

## The Compose Function (Right-to-Left)

### Concept

The `compose` function combines two or more functions by applying them **right to left**, meaning the **rightmost function is executed first**.

### How It Works

```
Input → [Function 2] → [Function 1] → Output
         (applied first)  (applied second)
```

### Basic Implementation

```javascript
const compose = (f, g) => (data) => f(g(data));
```

**Breaking it down:**
- `f` and `g` are two functions
- Returns a new function that takes `data` as input
- First executes `g(data)` (rightmost function)
- Then passes the result to `f` (leftmost function)

### Practical Example

```javascript
// Define simple, pure functions
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

// Compose them together
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

// Usage
console.log(multiplyBy3AndAbsolute(-50));
// Step 1: makePositive(-50) → 50
// Step 2: multiplyBy3(50) → 150
// Output: 150
```

### Visual Flow Diagram

```
Input: -50
   │
   ├─────────────────────────────────────┐
   │                                     │
   │  [Compose Function]                 │
   │                                     │
   │  ┌──────────────────────────────┐   │
   │  │ Step 1: makePositive(-50)    │   │
   │  │ Math.abs(-50) = 50           │   │
   │  └──────────────────┬───────────┘   │
   │                     │                │
   │  ┌──────────────────▼───────────┐   │
   │  │ Step 2: multiplyBy3(50)      │   │
   │  │ 50 * 3 = 150                 │   │
   │  └──────────────────┬───────────┘   │
   │                     │                │
   └─────────────────────┼────────────────┘
                         │
                      Output: 150
```

---

## The Pipe Function (Left-to-Right)

### Concept

The `pipe` function is similar to `compose`, but it applies functions **left to right**, meaning the **leftmost function is executed first**.

### How It Works

```
Input → [Function 1] → [Function 2] → Output
         (applied first)  (applied second)
```

### Basic Implementation

```javascript
const pipe = (f, g) => (data) => g(f(data));
```

**Breaking it down:**
- `f` and `g` are two functions
- Returns a new function that takes `data` as input
- First executes `f(data)` (leftmost function)
- Then passes the result to `g` (rightmost function)

### Practical Example

```javascript
const makePositive = (num) => Math.abs(num);
const multiplyBy3 = (num) => num * 3;

// Pipe them together (left to right)
const makePositiveAndMultiplyBy3 = pipe(makePositive, multiplyBy3);

// Usage
console.log(makePositiveAndMultiplyBy3(-50));
// Step 1: makePositive(-50) → 50
// Step 2: multiplyBy3(50) → 150
// Output: 150
```

### Visual Flow Diagram

```
Input: -50
   │
   ├──────────────────────────────────────┐
   │                                      │
   │  [Pipe Function]                     │
   │                                      │
   │  ┌──────────────────────────────┐   │
   │  │ Step 1: makePositive(-50)    │   │
   │  │ Math.abs(-50) = 50           │   │
   │  └──────────────────┬───────────┘   │
   │                     │                │
   │  ┌──────────────────▼───────────┐   │
   │  │ Step 2: multiplyBy3(50)      │   │
   │  │ 50 * 3 = 150                 │   │
   │  └──────────────────┬───────────┘   │
   │                     │                │
   └─────────────────────┼────────────────┘
                         │
                      Output: 150
```

---

## Compose vs Pipe: Side-by-Side Comparison

### Same Functions, Different Order

```javascript
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const subtract1 = (x) => x - 1;

// COMPOSE: Right to Left
// compose(f, g, h) means: f(g(h(x)))
const composeResult = compose(multiply3, add2, subtract1);
// Input: 5
// Step 1: subtract1(5) = 4
// Step 2: add2(4) = 6
// Step 3: multiply3(6) = 18
// Output: 18

// PIPE: Left to Right
// pipe(f, g, h) means: h(g(f(x)))
const pipeResult = pipe(subtract1, add2, multiply3);
// Input: 5
// Step 1: subtract1(5) = 4
// Step 2: add2(4) = 6
// Step 3: multiply3(6) = 18
// Output: 18
```

| Feature | Compose | Pipe |
|---------|---------|------|
| Direction | Right to Left | Left to Right |
| Execution Order | Rightmost function first | Leftmost function first |
| Reading Style | Mathematical notation | Logical flow |
| Use Case | Functional libraries | Data transformations |

---

## Arity: The Number of Function Arguments

**Arity** is the number of arguments a function takes. It's an important concept in functional programming.

```javascript
// Arity examples
const noArg = () => 42;
console.log(noArg.length); // 0

const singleArg = (x) => x * 2;
console.log(singleArg.length); // 1

const add = (a, b) => a + b;
console.log(add.length); // 2 (arity is 2)

const threeArgs = (x, y, z) => x + y + z;
console.log(threeArgs.length); // 3
```

**Why Arity Matters:**
- Helps in function composition by ensuring the output of one function matches the input arity of the next
- Enables compiler optimizations
- Useful for partial application and currying

---

## Real-World Example

Let's create a data transformation pipeline:

```javascript
// Pure functions
const toUpperCase = (str) => str.toUpperCase();
const addExclamation = (str) => str + "!";
const reverse = (str) => str.split('').reverse().join('');

// Using Compose (right to left)
const composeGreeting = compose(
  reverse,
  addExclamation,
  toUpperCase
);

console.log(composeGreeting("hello"));
// Step 1: toUpperCase("hello") = "HELLO"
// Step 2: addExclamation("HELLO") = "HELLO!"
// Step 3: reverse("HELLO!") = "!OLLEH"
// Output: "!OLLEH"

// Using Pipe (left to right)
const pipeGreeting = pipe(
  toUpperCase,
  addExclamation,
  reverse
);

console.log(pipeGreeting("hello"));
// Step 1: toUpperCase("hello") = "HELLO"
// Step 2: addExclamation("HELLO") = "HELLO!"
// Step 3: reverse("HELLO!") = "!OLLEH"
// Output: "!OLLEH"
```

---

## Benefits of Composition

1. **Modularity**: Break complex operations into simple, focused functions
2. **Reusability**: Compose the same functions in different ways
3. **Testability**: Pure functions are easy to test in isolation
4. **Readability**: Clear intent when functions are well-named
5. **Maintainability**: Changes to one function don't affect others
6. **Performance**: Function reuse reduces code duplication

---

## Key Takeaways

✅ **Composition** combines simple functions to create complex ones  
✅ **Compose** works right-to-left (mathematical notation style)  
✅ **Pipe** works left-to-right (logical flow style)  
✅ **Arity** is the number of arguments a function accepts  
✅ Use composition with **pure functions** for best results  
✅ Composition enables **modular and maintainable** code  
