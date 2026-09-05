# Object-Oriented Programming in JavaScript

This note is based on the code we wrote in [oops/app.js](oops/app.js).

## 1) Encapsulation

Encapsulation means grouping related data and behavior together inside one object.

In JavaScript, an object can contain:

- state/data: properties like `name`, `weapon`
- behavior: methods like `attack()`

This keeps the object self-contained and easier to manage.

```js
const elf = {
  name: "Ajay",
  weapon: "bow",

  attack() {
    return "Attack with  " + elf.weapon;
  },
};
```

### Why this is important?

- Data and logic stay together.
- The object controls how its own state is used.
- It makes the code more readable and organized.

---

## 2) Object Literal Pattern

This is the simplest way to create an object in JavaScript.

```js
const elf2 = {
  name: "Ajay",
  weapon: "bow",

  attack() {
    return "Attack with  " + elf.weapon;
  },
};
```

This works for one object, but if we need many similar objects, we should use a factory function or a class.

---

## 3) Factory Function Pattern

A factory function creates multiple objects with the same structure but different values.

```js
function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return "Attack with  " + weapon;
    },
  };
}

const peter = createElf("Peter", "stones");
const sam = createElf("Sam", "fire");
```

### Benefits

- Reusable object creation logic
- Easy to create many similar objects
- Cleaner than repeating object literals manually

---

## 4) Method Borrowing and `this`

This part of the code shows that a method can be reused from one object and attached to another object.

```js
function createElfs(weapon, name) {
  return {
    name,
    weapon,
  };
}

const elfFn = {
  attack() {
    return "Attack with  " + this.weapon;
  },
};

let a = createElf("PS", "Fire");
a.attack = elfFn.attack;
console.log(a.attack());
```

### Important point

- `elfFn.attack` is a method defined on one object.
- We assign it to `a.attack`.
- When we call `a.attack()`, JavaScript sets `this` to the object `a`.
- So `this.weapon` resolves to `a.weapon`.

This is a very important JavaScript OOP concept because methods are not tied permanently to one object; they can be reused and called in different contexts.

### Why this matters

- helps with code reuse
- explains dynamic `this` binding in JavaScript
- shows how behavior can be shared across objects

---

## 5) What the example is teaching

The code demonstrates the basic idea of OOP:

- an object has properties
- an object has methods
- methods can work with the object data
- similar objects can be created using a function

In short: object-oriented programming is about modeling real-world entities as objects with states and behaviors.

---

## 6) Simple diagram

```mermaid
flowchart TD
    A[Object / Entity] --> B[State]
    A --> C[Behavior]

    B --> D[name]
    B --> E[weapon]
    C --> F[attack()]

    G[Factory Function createElf()] --> H[Returns new elf object]
    H --> I[peter]
    H --> J[sam]

    K[elfFn.attack method] --> L[Assigned to a.attack]
    L --> M[When called, this = a]
    M --> N[a.weapon]
```

---

## 7) Real-world interpretation

Think of an elf as a real object:

- name = identity
- weapon = property
- attack() = method/action

So instead of writing separate variables for every value, we group them into one entity.

```js
const peter = createElf("Peter", "stones");
console.log(peter.attack());
// Output: Attack with stones
```

---

## 8) Summary

The main OOP ideas in this file are:

- encapsulation: grouping data and methods together
- object literal: creating one object directly
- factory function: creating many similar objects
- method borrowing: reusing behavior from one object on another object
- `this`: dynamic value that depends on how a method is called

This is the foundation of object-oriented programming in JavaScript and also a key concept for JavaScript interviews.
