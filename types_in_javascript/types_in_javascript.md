# JavaScript Types: Primitive vs Non-Primitive

JavaScript has two major categories of values:

1. Primitive types
2. Non-primitive (reference) types

This difference matters because it changes how values are stored, copied, and mutated in memory.

---

## 1) Primitive Data Types

Primitive values are stored directly in memory and copied by value. They represent a single value only.

```js
let number = 5;
let isActive = true;
let name = "Tom";
let notDefined = undefined;
let empty = null;
let id = Symbol("unique-id");
let largeNumber = 9007199254740991n;

console.log(typeof number); // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof name); // "string"
console.log(typeof notDefined); // "undefined"
console.log(typeof empty); // "object" // historical JavaScript bug
console.log(typeof id); // "symbol"
console.log(typeof largeNumber); // "bigint"
```

### Important note about null

```js
console.log(typeof null); // "object"
```

This is a long-known JavaScript quirk. `null` is meant to represent “no value,” but because of older language behavior, `typeof null` returns `"object"`.

---

## 2) Non-Primitive / Reference Types

Non-primitive values do not store the actual value directly. They store a reference to a memory location.

```js
const user = {
  name: "Tom",
  age: 25,
};

const arr = [1, 2, 3, 4, 5];

function greet() {
  return "Hello";
}

console.log(typeof user); // "object"
console.log(typeof arr); // "object"
console.log(typeof greet); // "function"
```

### Key idea

- Objects are reference types
- Arrays are also objects in JavaScript
- Functions are callable objects

```js
const array = [1, 2, 3, 4, 5];
const plainObj = { 0: 1, 1: 2, 2: 3 };

console.log(Array.isArray(array)); // true
console.log(Array.isArray(plainObj)); // false
```

Arrays are special objects with index-based keys, but they are still treated as objects in JavaScript.

---

## 3) Primitive vs Reference in Memory

```text
Primitive value  ──> Stored directly in memory
Reference value  ──> Stored as a pointer/reference

let a = 10       ──> Direct value copy
const obj = { name: 'Tom' }  ──> Object stored somewhere else
```

### Example: primitive assignment

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Here, `a` and `b` are separate copies of the number value.

### Example: object assignment

```js
const obj1 = { name: "Alice" };
const obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // "Bob"
console.log(obj2.name); // "Bob"
```

Here, both variables point to the same object in memory.

---

## 4) Pass by Value vs Pass by Reference

### Pass by Value

Primitive values are passed by value.

```js
let x = 5;
let y = x;

y++;

console.log(x); // 5
console.log(y); // 6
```

### Pass by Reference

Objects and arrays are passed by reference.

```js
const user1 = { name: "Vineet", password: "1234" };
const user2 = user1;

user2.password = "newPassword";

console.log(user1.password); // "newPassword"
console.log(user2.password); // "newPassword"
```

This is why mutating one object can affect another variable pointing to the same object.

---

## 5) Shallow Copy vs Deep Copy

### Shallow copy

```js
const person = { name: "Amit", age: 30 };
const shallowClone = { ...person };

shallowClone.name = "Updated";

console.log(person.name); // "Amit"
console.log(shallowClone.name); // "Updated"
```

This creates a new top-level object, but nested objects still remain shared.

```js
const obj = {
  a: "a",
  b: "b",
  c: { deep: "copy me" },
};

const clone = { ...obj };
clone.c.deep = "changed";

console.log(obj.c.deep); // "changed"
```

### Deep clone

```js
const deepClone = JSON.parse(JSON.stringify(obj));
```

This copies nested data too, but it is not suitable for every JavaScript value (for example, functions, dates, Map, Set, etc.).

---

## 6) Type Coercion

JavaScript often converts one value type into another automatically.

```js
console.log(1 == "1"); // true
```

This happens because JavaScript compares values with coercion.

### Truthy and falsy values

```js
if (10) {
  console.log("This runs because 10 is truthy");
}

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

### Special edge case: -0 and +0

```js
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false
```

`Object.is()` helps distinguish between `-0` and `+0`.

---

## 7) Quick Summary

- Primitive values are stored directly and copied by value.
- Non-primitive values are stored by reference.
- Arrays are objects in JavaScript.
- Objects and arrays can be mutated through shared references.
- JavaScript sometimes performs type coercion automatically.

---

## 8) Final Example

```js
// Primitive values
const num = 5;
const text = "Hello";
const isReady = true;

// Non-primitive values
const person = { name: "Tom", age: 21 };
const list = [1, 2, 3, 4];

console.log(typeof num); // "number"
console.log(typeof text); // "string"
console.log(typeof isReady); // "boolean"
console.log(typeof person); // "object"
console.log(typeof list); // "object"
console.log(Array.isArray(list)); // true

let a = 10;
let b = a;
b = 20;
console.log(a); // 10

const obj1 = { name: "A" };
const obj2 = obj1;
obj2.name = "B";
console.log(obj1.name); // "B"

console.log(1 == "1"); // true
console.log(Object.is(-0, +0)); // false
```

---

## Takeaway

The main idea is simple:

- Primitive = value stored directly
- Non-primitive = reference stored, not the value itself

This is why numbers and strings behave differently from objects and arrays when we assign, compare, or mutate them.
