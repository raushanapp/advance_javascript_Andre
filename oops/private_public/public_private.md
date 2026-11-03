# Public and Private in JavaScript

JavaScript classes can contain **public** and **private** fields and methods. Public members are part of an object's normal interface. Private members keep implementation details inside the class that declares them.

## Access diagram

```text
Outside the class                       Character class
┌─────────────────────┐       ┌─────────────────────────────────────┐
│ Read: hero.name     │──────►│ public getter: get name()           │
└─────────────────────┘       │              │                      │
                              │              ▼                      │
                              │ private field: #name                │
                              │                                     │
┌─────────────────────┐       │                                     │
│ Write:              │──────►│ public setter: set name(value)      │
│ hero.name = "..."   │       │              │                      │
└─────────────────────┘       │              ▼                      │
                              │ validate value, then update #name   │
                              │                                     │
┌─────────────────────┐       │                                     │
│ Call: hero.greet()  │──────►│ public method: greet()              │
└─────────────────────┘       │              │                      │
                              │              ▼                      │
                              │ private method: #makeGreeting()     │
                              └─────────────────────────────────────┘

Direct access from outside: hero.#name or hero.#makeGreeting() ──X──► blocked
```

## Public members

Public properties and methods can be read or called outside the class. In this example, `weapon` and `type` are public properties, and `attack()` is a public method:

```js
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

const hero = new Character("Legolas", "bow");
console.log(hero.weapon); // "bow"
console.log(hero.attack()); // "Legolas attacks with bow"
hero.weapon = "sword"; // Public properties can be changed from outside.
```

## Private members

Prefix a class field or method with `#` to make it private. Private members can only be accessed by code in the class body where they are declared. They are not ordinary properties, so they cannot be read with `object["#name"]` or listed with `Object.keys()`.

The `Character` example in [`app.js`](./app.js) keeps the character's name and attack count private. Its public `name` and `attackCount` getters provide controlled read access, and `attack()` calls the private `#performAttack()` method.

```js
class Character {
  #name;
  #attackCount = 0;

  constructor(name, weapon) {
    this.#name = name;
    this.weapon = weapon; // Public property
  }

  get name() {
    return this.#name;
  }

  attack() {
    this.#attackCount += 1;
    return this.#performAttack();
  }

  #performAttack() {
    return `${this.#name} attacks with ${this.weapon}`;
  }
}

const hero = new Character("Legolas", "bow");
console.log(hero.name); // "Legolas"
console.log(hero.attack()); // "Legolas attacks with bow"
// hero.#name; // SyntaxError: private fields cannot be accessed here
```

### Reading and updating private fields; calling private methods

A public getter can read a private field, and a public setter can update it. The setter is a good place to validate new values before storing them. Accessors are used like properties: write `hero.name`, not `hero.name()`.

A private method cannot be called directly from outside the class. Instead, expose a public method that calls it. This keeps the private implementation hidden while still making its behavior available through the class's public API.

```js
class Character {
  #name;

  constructor(name) {
    this.name = name; // Uses the public setter, including its validation.
  }

  get name() {
    return this.#name; // Controlled read access to the private field.
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new TypeError("Name must be a non-empty string");
    }

    this.#name = value.trim(); // Controlled write access to the private field.
  }

  greet() {
    return this.#makeGreeting(); // Public method delegates to the private method.
  }

  #makeGreeting() {
    return `Hello, I'm ${this.#name}.`;
  }
}

const hero = new Character("Legolas");
console.log(hero.name); // "Legolas" — calls the getter
hero.name = "Aragorn"; // Calls the setter
console.log(hero.greet()); // "Hello, I'm Aragorn."
// hero.#name; // SyntaxError: private field is only accessible inside Character
// hero.#makeGreeting(); // SyntaxError: private method is only accessible inside Character
```

**Notes:**

- `get name()` and `set name(value)` are public accessors, so callers can read and assign `name` without accessing `#name` directly.
- The getter and setter do not make `#name` public. They provide controlled access through the public API.
- JavaScript setters accept one value and are assigned like properties; they are not called with parentheses.
- A private method is not exposed by a getter or setter here. The public `greet()` method calls `#makeGreeting()` from inside the class.
- A setter is optional. Add one only when external code should be allowed to update the value; otherwise, use a getter for read-only access.

## Private members and inheritance

A subclass inherits a parent's **public** methods and properties, but it cannot directly access the parent's private fields or methods. A parent method can still use its own private members when the subclass calls that method.

```js
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type; // Public property added by Elf
  }
}

const elf = new Elf("Legolas", "bow", "woodland elf");
console.log(elf.name); // "Legolas" — inherited public getter
console.log(elf.attack()); // Works; Character.attack() uses Character's private members
// elf.#name; // SyntaxError: private to Character, and inaccessible here
```

JavaScript does not have a `protected` access modifier. If a subclass needs data, expose a suitable public getter or method rather than trying to access a parent's private field.

## Quick comparison

| Member | Declaration | Accessible from outside? | Accessible in a subclass? |
|---|---|---:|---:|
| Public field | `this.weapon = weapon` | Yes | Yes |
| Public method | `attack() { ... }` | Yes | Yes |
| Private field | `#name` | No | No |
| Private method | `#performAttack() { ... }` | No | No |

Run the complete example with `node app.js` from this folder. Private class fields and methods require a modern JavaScript runtime that supports the `#` syntax.