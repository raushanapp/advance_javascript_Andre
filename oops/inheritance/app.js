//  Inheritance in JavaScript
//  Inheritance allows one class to acquire the properties and methods of another class. This helps in code reusability and establishing a relationship between classes.
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "Attack with " + this.weapon;
  }
}

const fiona = new Elf("Fiona", "ninja stars");
const orge = { ...fiona };
//  here we are checking the prototype of the 'orge' object
//  here checking attack method availability on 'orge' object
console.log(orge.attack); // undefined because 'orge' is a plain object and doesn't inherit from Elf.prototype
orge.__proto__;
fiona.__proto__;
//  how do solve this
//  this called subclassing, where Elf is a subclass of Character and inherits its properties and methods
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

const dolby = new Elf("Dolby", "Cloth", "House");

console.log(dolby.attack()); // Attack with Cloth
console.log(dolby.type); // House

const shrek = new Orge("Shrek", "Club", "Green");
console.log(shrek.attack()); // Attack with Club
console.log(shrek.color); // Green
console.log(shrek.makeFort()); // strongest fort in the world made

console.log(dolby instanceof Elf); // true
console.log(dolby instanceof Character); // true
console.log(shrek instanceof Orge); // true
console.log(shrek instanceof Character); // true
console.log(orge instanceof Character); // false
console.log(orge instanceof Elf); // false
console.log(orge instanceof Orge); // false
//  when ever use new keyword to create an instance, the resulting object will have its prototype set to the constructor's prototype.
//  also new create an instnace of the class it new version of that class
//  for example, 'fiona' is an instance of Elf, and 'shrek' is an instance of Orge
//  whereas 'orge' is just a plain object and not an instance of any class
//  when we are using extends to create a subclass, the subclass inherits the properties and methods of the parent class.
//  in this case we are not copying the properties and methods javascript in this just links the prototype chain so that the subclass can access the parent's properties and methods.
