# JavaScript Types, Values, and Copies

This note explains the concepts demonstrated in [`app.js`](./app.js). Open the browser page or run the file with a modern JavaScript runtime to see the logged results.

## Primitive types

JavaScript has seven primitive types:

| Type | Example | `typeof` result |
| --- | --- | --- |
| String | `"hello"` | `"string"` |
| Number | `42` | `"number"` |
| BigInt | `42n` | `"bigint"` |
| Boolean | `true` | `"boolean"` |
| Undefined | `undefined` | `"undefined"` |
| Symbol | `Symbol("id")` | `"symbol"` |
| Null | `null` | `"object"` |

`typeof null` returning `"object"` is a historical JavaScript quirk. `null` is still a primitive value that represents an intentional absence of a value.

Primitive values are immutable. Assigning one variable to another copies the value:

```js
let first = 5;
let second = first;

second++;
console.log(first); // 5
console.log(second); // 6
```

## Objects, arrays, and functions

Objects, arrays, and functions are object values. `typeof` returns `"object"` for regular objects and arrays, but returns `"function"` for callable functions. Use `Array.isArray()` when you need to test specifically for an array:

```js
console.log(typeof { name: "Ada" }); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(Array.isArray([1, 2, 3])); // true
console.log(typeof function greet() {}); // "function"
```

## Assignment and function arguments

JavaScript is **pass-by-value**. Assigning an object or passing it to a function copies its reference value. The copied references can refer to the same object, so mutating that object is visible through either reference. Reassigning a function parameter only changes the local parameter:

```js
const original = { name: "Ada" };
const alias = original;

alias.name = "Grace";
console.log(original.name); // "Grace"

function changeUser(user) {
  user.name = "Katherine"; // Mutates the shared object
  user = { name: "Margaret" }; // Only reassigns the local parameter
}

changeUser(original);
console.log(original.name); // "Katherine"
```

It is common to say objects are “passed by reference,” but that phrase can be misleading: JavaScript still passes a value (the reference), not the caller's variable itself.

## Shallow copies and deep copies

Spread syntax and `Object.assign()` create a new **shallow** copy. The top-level properties are copied, but a nested object is still shared:

```js
const original = {
  name: "Ada",
  address: { city: "London" },
};

const copy = { ...original };
copy.name = "Grace";
copy.address.city = "Oxford";

console.log(original.name); // "Ada": top-level values are independent
console.log(original.address.city); // "Oxford": nested object is shared
```

For supported values, `structuredClone()` creates a deep copy, including nested data:

```js
const copy = structuredClone(original);
copy.address.city = "Paris";

console.log(original.address.city); // "Oxford"
console.log(copy.address.city); // "Paris"
```

`structuredClone()` does not support every JavaScript value (for example, functions). `JSON.parse(JSON.stringify(value))` is another option only for JSON-compatible data; it loses or changes values such as `undefined`, functions, symbols, `BigInt`, and special object types. Prefer `structuredClone()` where the values and runtime support it.

## Object equality

Objects compare by identity, not by their contents. Two separately created objects are not equal with `===`, even if their properties match:

```js
const first = { name: "Ada" };
const second = { name: "Ada" };

console.log(first === second); // false
console.log(JSON.stringify(first) === JSON.stringify(second)); // true for these simple objects
```

Comparing JSON strings is not a general deep-equality solution: property ordering and unsupported or special values can affect the result.

## Coercion, truthiness, and `Object.is()`

Loose equality (`==`) may convert values before comparing them. Strict equality (`===`) compares without that type coercion:

```js
console.log(1 == "1"); // true
console.log(1 === "1"); // false
```

Conditions convert their values to booleans. For example, `0`, `""`, `null`, `undefined`, and `NaN` are falsy; non-empty strings and nonzero numbers are truthy.

`Object.is()` differs from `===` for `NaN` and signed zero:

```js
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
```

## Key takeaways

- Primitive assignment copies an independent primitive value.
- JavaScript passes all arguments by value; for objects, the copied value is a reference.
- Mutating an object through one reference is visible through other references to that object.
- Spread syntax and `Object.assign()` make shallow copies, not deep copies.
- Arrays are objects; use `Array.isArray()` to identify them.
- `typeof null` is `"object"` for historical reasons.
