# JavaScript Classes

A JavaScript class is syntax for creating objects with a constructor and methods. Use `new` with the class to create an instance. The constructor stores instance-specific data, while class methods are shared through the class's prototype.

## Example from `app.js`

```js
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `attacks with ${this.weapon}`;
  }
}

const peter = new Elf("Peter", "Bow");

console.log(peter); // Elf { name: "Peter", weapon: "Bow" }
console.log(peter.attack()); // "attacks with Bow"
console.log(peter instanceof Elf); // true
```

When `new Elf("Peter", "Bow")` runs, JavaScript creates an object, sets that object's prototype to `Elf.prototype`, calls `constructor` with `this` referring to the new object, and returns the object.

`name` and `weapon` are own properties on each instance. `attack` is defined once on `Elf.prototype`, so instances share the method. Inside `peter.attack()`, `this` refers to `peter`.

## Instance and prototype diagram

```text
┌──────────────────────────────┐       ┌────────────────────────┐
│ peter                        │       │ Elf.prototype          │
│ name: "Peter"                │       │ attack()               │
│ weapon: "Bow"                │       │ constructor ───────┐   │
└──────────────┬───────────────┘       └────────────────────│───┘
               └── [[Prototype]] ──►                     │
                                                         ▼
                                                      Elf class

Elf class ── .prototype ──► Elf.prototype
```

When JavaScript evaluates `peter.attack()`, it finds no own `attack` property on `peter`, so it looks up the prototype chain and finds `attack` on `Elf.prototype`.

## Understanding `instanceof`

`value instanceof Constructor` checks whether `Constructor.prototype` appears in `value`'s prototype chain. The right-hand side must be a constructor (or define a custom `Symbol.hasInstance`); it is not the instance being checked.

```js
const peter = new Elf("Peter", "Bow");

peter instanceof Elf; // true
peter instanceof Object; // true
Elf instanceof Function; // true
Elf instanceof Object; // true
peter instanceof Function; // false
```

`Elf` is itself a function object, so it is an instance of `Function` and `Object`. `peter` is an object created by `Elf`, so it is an instance of `Elf` and `Object`, but not `Function`.

The line `Elf instanceof peter` in `app.js` does **not** evaluate to `false`: it throws a `TypeError`, because `peter` is an ordinary object and cannot be used as the right-hand constructor. As a result, execution stops at that line and later `console.log` statements are not reached. To test whether `peter` was made by `Elf`, use `peter instanceof Elf`.

## Class notes

- A class declaration must be called with `new`; calling `Elf(...)` without `new` throws a `TypeError`.
- Class methods are non-enumerable prototype methods, not copied onto every instance.
- Class declarations are not usable before their declaration is evaluated (they are in the temporal dead zone).
- JavaScript classes use prototypal inheritance under the hood; `class` provides a clearer syntax for creating constructors and prototypes.