# Factory Functions in JavaScript

## What is a factory function?

A **factory function** is an ordinary function that creates and returns an object. It provides a reusable way to build objects with the same shape and behavior, while allowing each object to have its own data.

Unlike a constructor function or class, a basic factory is called like a regular function: there is no `new` keyword.

```js
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "Attack with " + weapon;
    },
  };
}

const peter = createElf("Peter", "stones");
const sam = createElf("Sam", "fire");

console.log(peter.attack()); // "Attack with stones"
console.log(sam.attack());   // "Attack with fire"
```

Each call returns a separate object with its own `name` and `weapon`.

## How object creation works

```text
createElf("Peter", "stones") ──▶ { name: "Peter", weapon: "stones", attack }

createElf("Sam", "fire") ──────▶ { name: "Sam", weapon: "fire", attack }
```

The factory initializes each object's state and returns it to the caller. The returned object is not automatically linked to the factory function's `prototype`.

## Methods and closures

In the example above, `attack` uses the parameter `weapon` from the `createElf` call. The method retains access to that parameter after the factory has returned; this is a **closure**.

```text
createElf("Peter", "stones")
          │
          ├── name   ──▶ "Peter"   (returned object property)
          ├── weapon ──▶ "stones"  (returned object property)
          └── attack  ──▶ function closes over weapon = "stones"
```

Because `attack` reads the closed-over `weapon`, changing `peter.weapon` does not change what this method returns:

```js
peter.weapon = "sword";
console.log(peter.weapon);  // "sword"
console.log(peter.attack()); // "Attack with stones"
```

That behavior may or may not be what you want. If the method should use the current object property, use `this.weapon` instead:

```js
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "Attack with " + this.weapon;
    },
  };
}
```

Now `peter.attack()` reads `peter.weapon`. As with any method using `this`, how the function is called matters: extracting `attack` into a standalone variable does not preserve `peter` as `this`.

## Memory trade-off: per-object methods

The method written inside the factory's returned object is created for each factory call. With many objects, this means many function objects:

```text
elf 1 ──▶ attack function 1
elf 2 ──▶ attack function 2
elf 3 ──▶ attack function 3
```

For small numbers of objects this is often the clearest option. If many objects need the same behavior and the method does not need private closure state, a shared method can avoid creating one function per object.

### Sharing a method with a prototype

```js
const elfMethods = {
  attack() {
    return "Attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  const elf = Object.create(elfMethods);
  elf.name = name;
  elf.weapon = weapon;
  return elf;
}

const peter = createElf("Peter", "stones");
const sam = createElf("Sam", "fire");

console.log(peter.attack()); // "Attack with stones"
console.log(sam.attack());   // "Attack with fire"
console.log(peter.attack === sam.attack); // true
```

```text
peter ──[[Prototype]]──┐
                       ├──▶ elfMethods.attack
sam   ──[[Prototype]]──┘
```

Both objects delegate `attack` lookup to the same `elfMethods` object. The method uses `this.weapon`, so the receiver (`peter` or `sam`) supplies the data.

This approach shares behavior, but the properties are not private: callers can read or change `elf.weapon`. A closure-based factory can encapsulate data instead.

## Private state with a closure

Variables local to a factory are not directly exposed as object properties. A returned method can still access them through its closure:

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // 1
console.log(counter.count);      // undefined
```

Each counter has its own `count`. This is useful for encapsulation, but each returned method is also newly created for each factory call.

## Factory function vs. constructor vs. class

| Pattern | How it is called | How instances get shared methods |
|---|---|---|
| Factory function | `createElf("Peter", "stones")` | Methods can be per-object, or shared explicitly |
| Constructor function | `new Elf("Peter", "stones")` | Usually through `Elf.prototype` |
| Class | `new Elf("Peter", "stones")` | Instance methods are placed on the class prototype |

Factories can also be used with composition: a factory can combine behavior from smaller objects and return an object with just the capabilities it needs. It does not require a class hierarchy.

## Common interview questions

### Why use a factory function?

It centralizes object creation, avoids repeating object literals, and can encapsulate private state with closures. It is also called without `new`.

### Does a factory function automatically use its `prototype` property?

No. A normal function's `prototype` property is used when that function is called with `new` as a constructor. A factory's returned object gets its prototype from the way that object is created (an object literal normally inherits from `Object.prototype`; `Object.create(proto)` can choose a different prototype).

### Does every factory object have a separate method?

It depends on the implementation. A method defined inside the returned object literal is created for each factory call. A method placed on a shared prototype or otherwise reused can be shared.

### What is the difference between closure state and `this` state?

Closure state belongs to the factory call and is accessed lexically by the returned functions. `this` state is read from the receiver object when a method is called. Closure state can be hidden from direct access; object properties used through `this` are public unless other mechanisms are used.

### When should a factory method use `this`?

Use `this` when behavior should read or update the returned object's properties and callers should be able to change those properties. Use a closure when data should be private or bound to that particular factory call.

## Key takeaways

- A factory function is an ordinary function that returns an object.
- It is invoked without `new`.
- Each call can initialize an independent object.
- Returned functions can close over factory-local variables.
- Methods declared in each returned object are generally separate function objects; shared prototypes can reuse methods.
- Choose closure state or `this`-based object properties based on whether the data should be private or publicly mutable.