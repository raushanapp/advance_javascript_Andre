# `Object.create()` in JavaScript

## What does `Object.create()` do?

`Object.create(proto)` creates a new object whose internal prototype (`[[Prototype]]`) is the object passed as `proto`. It does **not** copy the prototype's properties onto the new object.

```js
const parent = {
  greet() {
    return "Hello!";
  },
};

const child = Object.create(parent);
child.name = "Ava";

console.log(child.name);  // "Ava" (own property)
console.log(child.greet()); // "Hello!" (found on parent)
```

```text
child
  own properties: name
       │
       │ [[Prototype]]
       ▼
parent
  own properties: greet
       │
       ▼
Object.prototype
       │
       ▼
null
```

When JavaScript evaluates `child.greet()`, it first checks `child`. Since `greet` is not there, it follows the prototype link to `parent` and finds the method. The method is called as `child.greet()`, so `this` refers to `child`.

## Sharing methods with `Object.create()`

The folder's example uses one shared methods object and creates each elf with that object as its prototype:

```js
const elfMethods = {
  attack() {
    return "Attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  const newElf = Object.create(elfMethods);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf("Peter", "stones");
const sam = createElf("Sam", "fire");

console.log(peter.attack()); // "Attack with stones"
console.log(sam.attack());   // "Attack with fire"
console.log(peter.attack === sam.attack); // true
```

```text
peter                        sam
  own: name = "Peter"          own: name = "Sam"
       weapon = "stones"            weapon = "fire"
       │                            │
       └──────────┐       ┌─────────┘
                  ▼       ▼
              elfMethods
                own: attack
                  │
                  ▼
            Object.prototype
                  │
                  ▼
                 null
```

Both elves find the **same** `attack` function on `elfMethods`. The method reads `this.weapon`, so the receiver (`peter` or `sam`) provides the correct weapon.

## Property lookup and shadowing

An own property takes precedence over an inherited property with the same name:

```js
const parent = { color: "blue" };
const child = Object.create(parent);

console.log(child.color); // "blue" (inherited)

child.color = "green";
console.log(child.color); // "green" (own property shadows parent's value)
console.log(Object.hasOwn(child, "color")); // true
console.log(parent.color); // "blue" (unchanged)
```

```text
Before assignment: child ──▶ parent { color: "blue" }
                   lookup follows prototype link

After assignment:  child { color: "green" } ──▶ parent { color: "blue" }
                   own value wins
```

Assigning an inherited data property this way normally creates or updates an own property on the child; it does not change the parent's property.

## Inspecting the prototype

Use the standard APIs to inspect and check prototype relationships:

```js
const prototype = Object.getPrototypeOf(peter);

console.log(prototype === elfMethods); // true
console.log(elfMethods.isPrototypeOf(peter)); // true
console.log(Object.hasOwn(peter, "name")); // true
console.log(Object.hasOwn(peter, "attack")); // false
console.log("attack" in peter); // true (checks own properties and the chain)
```

`Object.hasOwn(object, key)` checks only the object's own properties. The `in` operator checks the object and its entire prototype chain.

Avoid using `.__proto__` to manage prototype links in new code. Prefer `Object.create()` to create an object with a chosen prototype and `Object.getPrototypeOf()` to inspect it.

## `Object.create(null)`

Passing `null` creates an object with no prototype:

```js
const dictionary = Object.create(null);
dictionary.answer = 42;

console.log(dictionary.answer); // 42
console.log(Object.getPrototypeOf(dictionary)); // null
console.log("toString" in dictionary); // false
```

```text
dictionary { answer: 42 }
       │
       ▼
      null
```

This can be useful for dictionary-like objects that should not inherit names such as `toString`. Such an object also does not inherit methods like `hasOwnProperty`; use `Object.hasOwn(dictionary, "answer")` to check ownership.

## Common interview questions

### Does `Object.create(proto)` copy properties?

No. The new object's prototype is set to `proto`; inherited properties remain on `proto` and are found through lookup.

### Why use it to share methods?

Objects can reuse a single method through the prototype chain instead of each having a separately created method function. In the elf example, `peter.attack === sam.attack` is `true`.

### What does `this` refer to in an inherited method?

It depends on the call expression. In `peter.attack()`, `this` is `peter`, even though JavaScript found `attack` on `elfMethods`.

### How is this different from `Object.assign()`?

`Object.create(proto)` establishes a prototype link. `Object.assign(target, source)` copies enumerable own properties from source objects onto the target; it does not set the target's prototype to the source.

```js
const source = { value: 1 };
const linked = Object.create(source);
const copied = Object.assign({}, source);

console.log(Object.getPrototypeOf(linked) === source); // true
console.log(Object.hasOwn(linked, "value")); // false
console.log(Object.getPrototypeOf(copied) === source); // false
console.log(Object.hasOwn(copied, "value")); // true
```

## Key takeaways

- `Object.create(proto)` returns a new object that delegates to `proto`.
- Prototype properties are looked up, not copied.
- Own properties shadow inherited properties of the same name.
- Shared prototype methods can use `this` to work with each receiver's own data.
- Use `Object.getPrototypeOf`, `Object.hasOwn`, and `isPrototypeOf` to inspect relationships.
- `Object.create(null)` creates a prototype-free object; it does not inherit `Object.prototype` methods.