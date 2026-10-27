# JavaScript Prototype Inheritance

JavaScript objects can delegate property lookups to another object. The object doing the delegation has an internal `[[Prototype]]` link to that other object. If a property is not found directly on the object, JavaScript follows this link and keeps searching until it finds the property or reaches `null`.

This is often called **prototypal inheritance**. It is delegation: objects can reuse behavior from other objects without copying that behavior onto themselves.

## Prototype chain

```text
object
  │  own properties are checked first
  ▼
its prototype
  │  checked if the property was not found above
  ▼
that prototype's prototype
  │
  ▼
Object.prototype
  │
  ▼
null  (end of the chain)
```

For example, the chain for an ordinary object is:

```text
{ name: "Sally" } ──▶ Object.prototype ──▶ null
```

`Object.prototype` provides shared methods such as `hasOwnProperty`. It is the end of most ordinary object chains; its own prototype is `null`.

## Property lookup and `this`

The following is based on the `dragon` and `lizard` objects in `app.js` and `prototype_chain.js`:

```js
const dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    return `I am ${this.name} the breather of fire!`;
  },
};

const lizard = Object.create(dragon);
lizard.name = "Kiki";
lizard.fight = function () {
  return 1;
};

console.log(lizard.sing());  // "I am Kiki the breather of fire!"
console.log(lizard.fight()); // 1
console.log(lizard.fire);    // true (found on dragon)
```

```text
lizard
  own: name = "Kiki", fight = function
   │
   ▼
dragon
  own: name = "Tanya", fire = true, fight = function, sing = function
   │
   ▼
Object.prototype
   │
   ▼
null
```

`lizard.fight` is found on `lizard`, so it takes precedence over `dragon.fight`. `lizard.sing` is not an own property, so lookup finds `dragon.sing`. The method is called as `lizard.sing()`, which means `this` is `lizard`; consequently, the method uses `"Kiki"` for `this.name`.

If a property is not found anywhere in the chain, reading it returns `undefined`.

## Creating and inspecting prototype relationships

Prefer `Object.create` to set up a prototype relationship:

```js
const parent = { mortal: true };
const person = Object.create(parent);
person.age = 45;

console.log(person.age);                  // 45 (own property)
console.log(person.mortal);               // true (inherited property)
console.log(Object.getPrototypeOf(person) === parent); // true
console.log(parent.isPrototypeOf(person)); // true
```

`Object.create(parent)` creates a new object whose prototype is `parent`. It does not copy `parent`'s properties onto the new object.

`__proto__` can be seen in older examples and developer tools, but it is a legacy accessor. Use `Object.getPrototypeOf(object)` to inspect a prototype and `Object.create(prototype)` to create an object with a chosen prototype.

## Own properties versus inherited properties

An own property belongs directly to the object. An inherited property is found somewhere farther along its prototype chain.

```js
const example = Object.create({ inherited: "from prototype" });
example.own = "on the object";

console.log(Object.hasOwn(example, "own"));       // true
console.log(Object.hasOwn(example, "inherited")); // false
console.log("inherited" in example);              // true (checks the whole chain)
```

`for...in` visits enumerable string properties on the object **and** its prototype chain. Check ownership when you only want the object's own properties:

```js
for (const key in example) {
  if (Object.hasOwn(example, key)) {
    console.log(`Own property: ${key}`);
  } else {
    console.log(`Inherited property: ${key}`);
  }
}
```

`Object.hasOwn(object, key)` is a safe ownership check. `object.hasOwnProperty(key)` also works for ordinary objects, but may be shadowed if the object defines a property with that name.

## Constructor functions and `prototype`

A constructor function's `prototype` property is an ordinary object used as the prototype for instances created with `new`:

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const dog = new Animal("Rex");
console.log(dog.speak()); // "Rex makes a sound"
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
```

```text
dog ──[[Prototype]]──▶ Animal.prototype ──▶ Object.prototype ──▶ null

Animal ──prototype property──▶ Animal.prototype
```

The term `prototype` refers to two related but different things:

- `Animal.prototype` is a property on the constructor function. `new Animal()` uses this object as the new instance's `[[Prototype]]`.
- `Object.getPrototypeOf(Animal)` is the prototype of the function object `Animal` itself. For a normal function, this is `Function.prototype`.

Do not confuse `function.prototype` with a function object's own prototype link. Traditional constructible function declarations and function expressions have a `prototype` property, but arrow functions, async functions, and concise object methods do not; they cannot be used as constructors with `new`.

## Functions and arrays have prototype chains too

Functions are objects that can be called. A normal function object delegates to `Function.prototype`, which in turn delegates to `Object.prototype`:

```text
multiplyByFive (function object)
  └──▶ Function.prototype  (includes call, apply, bind)
         └──▶ Object.prototype
                └──▶ null
```

Methods such as `call`, `apply`, and `bind` are inherited from `Function.prototype`; they are not own properties of each function. For example, `Object.hasOwn(multiplyByFive, "call")` is `false`, while `typeof multiplyByFive.call` is `"function"`.

An array instance delegates through `Array.prototype`:

```text
array instance ──▶ Array.prototype ──▶ Object.prototype ──▶ null
```

Array methods such as `map` are found on `Array.prototype`. `toString` is also available on arrays, but arrays have their own `toString` method on `Array.prototype`; it is not looked up directly from `Object.prototype`.

## Key takeaways

- Property lookup starts with the object itself, then follows its prototype chain.
- An own property shadows a property with the same name on a prototype.
- A method's `this` depends on how it is called. Calling `child.method()` gives the method `child` as `this`, even if the method was found on a prototype.
- Prototypes let objects share behavior through delegation; inherited properties are not copied onto the child.
- Use `Object.create`, `Object.getPrototypeOf`, and `Object.hasOwn` for clear prototype and ownership operations.
