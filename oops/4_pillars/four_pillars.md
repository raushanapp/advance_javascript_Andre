# The Four Pillars of OOP in JavaScript

Object-oriented programming (OOP) organizes code around objects that combine data and behavior. The four commonly described pillars are **encapsulation**, **abstraction**, **inheritance**, and **polymorphism**.

## How the example is organized

```text
                  Character (base class)
             shared name, weapon, health API
              private #health + takeDamage()
                 abstract attack() contract
                     /             \
                    /               \
                 Elf                 Ogre
          type, Elf attack()   color, Ogre attack()
                    \               /
                     \             /
              same call: character.attack()
              different result for each object
```

In [`app.js`](./app.js), `Character` defines behavior shared by all characters. `Elf` and `Ogre` extend it with their own data and attack implementations.

## 1. Encapsulation

Encapsulation keeps an object's state and the operations that manage it together. The `#health` field is private: code outside `Character` cannot assign to or read `character.#health`. Instead, callers read health through the public `health` getter and change it through `takeDamage()`, which validates the input and keeps health from dropping below zero.

```js
class Character {
  #health;

  constructor(health) {
    this.#health = health;
  }

  get health() {
    return this.#health;
  }

  takeDamage(amount) {
    this.#health = Math.max(0, this.#health - amount);
    return this.#health;
  }
}
```

Private class fields use the `#` prefix and are enforced by JavaScript, not just by convention. A private field is only accessible inside the class body where it is declared.

## 2. Abstraction

Abstraction presents a simple interface and hides implementation details. Callers can use `attack()` without needing to know how each character produces its attack message.

JavaScript does not have a built-in `abstract class` keyword. The example uses two runtime checks to model an abstract base class: `Character` cannot be instantiated directly, and its `attack()` method throws unless a subclass overrides it.

```js
class Character {
  constructor() {
    if (new.target === Character) {
      throw new TypeError("Character is an abstract base class");
    }
  }

  attack() {
    throw new Error("Subclasses must implement attack()");
  }
}
```

This is a convention enforced at runtime, not a compile-time abstract-class feature. In TypeScript, abstract classes and methods can additionally be checked by the type system.

## 3. Inheritance

Inheritance lets a subclass reuse and extend a base class. `Elf` and `Ogre` use `extends Character`, and each calls `super(...)` to initialize the inherited state. `Ogre` also defines its own `makeFort()` method.

```js
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon, 100);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon, 150);
    this.color = color;
  }

  makeFort() {
    return `${this.name} builds a strong fort`;
  }
}
```

`super()` calls the parent constructor and must run before a derived constructor accesses `this`.

## 4. Polymorphism

Polymorphism means different object types can be used through a shared interface while providing their own behavior. Both subclasses override `attack()`. Calling `attack()` on each object runs the matching subclass method.

```js
class Elf extends Character {
  attack() {
    return `${this.name} attacks with a ${this.weapon}`;
  }
}

class Ogre extends Character {
  attack() {
    return `${this.name} swings a ${this.weapon}`;
  }
}

for (const character of [dolby, shrek]) {
  console.log(character.attack());
}
```

The loop does not need to check whether an object is an elf or an ogre. JavaScript looks up `attack()` on that object's prototype chain and calls the override.

## Complete runnable example

[`app.js`](./app.js) combines all four pillars:

- **Encapsulation:** private `#health`, exposed through a getter and updated by `takeDamage()`.
- **Abstraction:** `Character` defines the shared `attack()` interface and prevents direct construction.
- **Inheritance:** `Elf` and `Ogre` extend `Character` and reuse its constructor and methods.
- **Polymorphism:** each subclass provides a different `attack()` implementation.

Run it from the repository root with:

```sh
node oops/4_pillars/app.js
```