# JavaScript Class Inheritance

Inheritance lets a class reuse and extend the behavior of another class. In
`app.js`, `Character` is the parent class, and `Elf` and `Orge` are subclasses.
The subclasses inherit `Character`'s constructor setup and `attack()` method,
then add their own properties or methods.

## Class relationship and prototype chain

```text
                  Character
             name, weapon, attack()
                 /         \
                /           \
              Elf           Orge
             type       color, makeFort()
                \           /
                 \         /
        instances created with `new`

For an Elf instance:
dolby -> Elf.prototype -> Character.prototype -> Object.prototype -> null

For an Orge instance:
shrek -> Orge.prototype -> Character.prototype -> Object.prototype -> null
```

When JavaScript looks up a property or method, it first checks the instance.
If it cannot find the requested property there, it follows the prototype chain
until it finds the property or reaches the end. Class inheritance uses this
prototype chain; it does not copy the parent class's methods onto every
instance.

## Parent class and subclasses

The parent class initializes the shared properties and defines shared behavior:

```js
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "Attack with " + this.weapon;
  }
}
```

`Elf` and `Orge` extend `Character`. Each subclass calls `super(name, weapon)`
to run the parent constructor and initialize `name` and `weapon`.

```js
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Orge extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    return "strongest fort in the world made";
  }
}
```

`super()` must be called in a derived class constructor before using `this`.
`Elf` adds `type`; `Orge` adds `color` and its own `makeFort()` method. Both
subclasses inherit `attack()` from `Character`.

## Creating and using instances

Class declarations must be initialized before they are used. Here is the
example from `app.js` in runnable declaration order:

```js
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "Attack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Orge extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    return "strongest fort in the world made";
  }
}

const fiona = new Elf("Fiona", "ninja stars", "forest");
const dolby = new Elf("Dolby", "Cloth", "House");
const shrek = new Orge("Shrek", "Club", "Green");

console.log(fiona.attack()); // "Attack with ninja stars"
console.log(dolby.attack()); // "Attack with Cloth"
console.log(dolby.type); // "House"
console.log(shrek.attack()); // "Attack with Club"
console.log(shrek.color); // "Green"
console.log(shrek.makeFort()); // "strongest fort in the world made"
```

The current `app.js` has this order near the top:

```js
const fiona = new Elf("Fiona", "ninja stars");
// ...
class Elf extends Character {
  // ...
}
```

This throws a `ReferenceError`: a class declaration is in its temporal dead
zone until execution reaches the class declaration. The class definitions
must come before `new Elf(...)` or `new Orge(...)`. The runnable example above
shows the corrected order for learning purposes; this note does not change
`app.js`.

## Why object spread does not copy inherited methods

The example in `app.js` makes a shallow copy with object spread:

```js
const orge = { ...fiona };
console.log(orge.attack); // undefined
```

Object spread copies an object's own enumerable properties. It does not copy
properties found through the prototype chain. An `Elf` instance has own data
properties such as `name`, `weapon`, and `type`, while `attack()` is available
through `Character.prototype`. Therefore, `orge` gets the data properties but
does not inherit `attack()`.

The spread copy is also a plain object; it is not an `Elf` instance. To make
another `Elf`, use its constructor:

```js
const anotherElf = new Elf("Fiona", "ninja stars", "forest");
anotherElf.attack(); // "Attack with ninja stars"
```

Avoid using `__proto__` in application code. It is a legacy accessor; use
`Object.getPrototypeOf(value)` to inspect an object's prototype:

```js
Object.getPrototypeOf(dolby) === Elf.prototype; // true
Object.getPrototypeOf(Elf.prototype) === Character.prototype; // true
```

## Checking instances

`instanceof` checks whether a constructor's `prototype` appears in the
instance's prototype chain:

```js
dolby instanceof Elf; // true
dolby instanceof Character; // true

shrek instanceof Orge; // true
shrek instanceof Character; // true

orge instanceof Character; // false: object spread did not preserve the chain
orge instanceof Elf; // false
```

## Key points

- Use `extends` to define a subclass and `super()` to initialize the parent
  class.
- A subclass instance can use methods from its parent through the prototype
  chain.
- Each instance owns its data properties, while class methods are shared on
  prototypes.
- Object spread copies own enumerable properties, not inherited methods or the
  source object's prototype chain.
- Declare a class before creating instances of it.