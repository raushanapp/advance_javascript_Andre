# Constructor Functions

A constructor function is a regular JavaScript function used with `new` to create and initialize objects. By convention, constructor names start with a capital letter.

## The `Elf` example

```js
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.build1 = function () {
  const self = this;
  function building() {
    return `${self.name} builds with ${self.weapon}`;
  }
  return building();
};

const peter = new Elf("Peter", "Bow");
```

Calling `new Elf("Peter", "Bow")` creates a new object, connects its prototype to `Elf.prototype`, calls `Elf` with `this` set to that object, and returns the object (unless the constructor explicitly returns another object).

`name` and `weapon` are own properties: each instance gets its own values. Methods assigned to `Elf.prototype` are shared by instances rather than recreated for every instance.

## Object and prototype relationship

```text
peter (name, weapon) ── [[Prototype]] ──┐
                                        ├──► Elf.prototype
sam (name, weapon)   ── [[Prototype]] ──┘      │
                                                ├── build(), build1(), fire()
Elf ─────────────────── .prototype ───────────►│
Elf ◄────────────────── .constructor ──────────┘
```

When JavaScript evaluates `peter.build1()`, it first looks for `build1` on `peter`. Since it is not an own property, JavaScript looks up the prototype chain and finds it on `Elf.prototype`.

## The methods in this file

- **`build`** is a regular prototype method. It returns a *bound function*, not the building message itself. Calling `peter.build()` produces that function; calling `peter.build()()` invokes it and returns `"Peter builds with Bow"`. `bind(this)` preserves the instance as `this` for the inner function.
- **`build1`** saves the instance in `self` and immediately calls the inner function, so `peter.build1()` returns `"Peter builds with Bow"`. This is the closure-based alternative to binding.
- **`fire`** is an arrow function stored on the prototype. Arrow functions do not get their own `this`; they capture `this` from where they are created. Therefore `this` does not refer to the `Elf` instance when `peter.fire()` runs, and the result does not contain Peter's instance values. Use a regular function for a prototype method that needs its receiver:

  ```js
  Elf.prototype.fire = function () {
    return `${this.name} fires with ${this.weapon}`;
  };
  ```

  The value read by the arrow function depends on the surrounding scope (for example, top-level `this` differs between scripts and modules); it is not the instance.

## `Function` constructor example

```js
const Elf1 = new Function(
  "name",
  "weapon",
  "this.name = name; this.weapon = weapon;",
);

Elf1.prototype.attack = function () {
  return `${this.name} attacks with ${this.weapon}`;
};

const sarah = new Elf1("Sarah", "Axe");
```

`new Function(...)` dynamically creates a function whose final argument is its body. The `new` call gives the created object its own `name` and `weapon` properties, while `attack` is found on the shared `Elf1.prototype`. This form is uncommon and generally best avoided: the function body is created at runtime and does not close over the surrounding lexical scope. Prefer a normal function declaration for constructors.

## Key points

1. Use `new` when calling a constructor. Without it, `this` will not be a newly created instance.
2. Put per-instance data on `this` in the constructor.
3. Put shared methods on the constructor's `prototype`.
4. Use regular functions for prototype methods that rely on the calling instance's `this`.
5. A constructor's `.prototype` is the object used as the `[[Prototype]]` of instances created with that constructor; it is not the same thing as an instance's `[[Prototype]]` property.