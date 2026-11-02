# Public and Private in JavaScript

JavaScript classes can contain **public** and **private** fields and methods. Public members are part of an object's normal interface. Private members keep implementation details inside the class that declares them.

## Access diagram

```text
                         Character class
┌──────────────────────────────────────────────────────────┐
│ Public interface                                         │
│  name (getter)     ───────────► reads private #name      │
│  weapon            ───────────► public instance property │
│  attack()          ───────────► uses private members     │
│  attackCount       ───────────► reads private count      │
│                                                          │
│ Private implementation (class-only access)               │
│  #name                                                  │
│  #attackCount                                           │
│  #performAttack()                                       │
└──────────────────────────────────────────────────────────┘
           ▲                         ▲
           │ public API              │ public API
     Outside code                 Elf subclass
     can use name,                can use inherited
     weapon, attack()             name, weapon, attack()
     and attackCount              but not Character's #name
                                  or #performAttack()
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