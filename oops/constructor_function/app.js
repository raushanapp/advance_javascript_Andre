// Constructor function example for creating objects with shared methods
// we can use constructor functions to create objects with shared methods to improve memory usage
//  the methods are shared through the prototype chain

// Constructor function

function Elf(name, weapon) {
  console.log(this); // Elf {}
  this.name = name;
  this.weapon = weapon;
  //  with constructor function only way to add the properties  using this keyword  inside the constructor function
}
//  Proto --> point to the prototype chain where shared methods are stored
Elf.prototype.build = function () {
  function building() {
    return `${this.name} builds with ${this.weapon}`;
  }
  return building.bind(this);
};

Elf.prototype.build1 = function () {
  let self = this;
  function building() {
    return `${self.name} builds with ${self.weapon}`;
  }
  return building();
};

//  if we use arrow function here getting undefined because arrow function lexical bond
//  because this is an arrow function does not have srounding `this` context, it uses the `this` value from the enclosing lexical scope.
//  so `this.name` and `this.weapon` will be undefined inside the arrow function.
//  Therefore, using an arrow function for prototype methods that rely on `this` will not work as expected.
//  In such cases, it's better to use regular function expressions for prototype methods.
//  arrow function not matte where it's called, it will always use the `this` from the surrounding lexical scope.
//  so in this case, `this.name` and `this.weapon` will be undefined when `fire` is called on an instance of Elf.
Elf.prototype.fire = () => {
  return `${this.name} fires with ${this.weapon}`;
};

const peter = new Elf("Peter", "Bow");
console.log(peter);
console.log(peter.build());
const sam = new Elf("Sam", "Sword");
console.log(sam);
console.log(sam.build());
console.log(peter.fire()); // undefined because arrow function does not have its own `this` context
console.log(sam.fire()); // undefined for the same reason

//  another way

const Elf1 = new Function(
  "name",
  "weapon",
  "this.name = name; this.weapon = weapon;",
);

const sarah = new Elf1("Sarah", "Axe");
console.log(sarah);

Elf1.prototype.attack = function () {
  return `${this.name} attacks with ${this.weapon}`;
};
console.log(sarah.attack());
const john = new Elf1("John", "Spear");
console.log(john.attack());
