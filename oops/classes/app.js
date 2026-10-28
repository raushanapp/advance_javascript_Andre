//  Classes
//  hold properties and methods for Elf objects
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `attacks with ${this.weapon}`;
  }
}

//  new keyword we called instance of a class
//  it creates a new object based on the class blueprint

const peter = new Elf("Peter", "Bow");
console.log(peter);
console.log(peter.attack());

console.log(peter instanceof Elf); // true
console.log(Elf instanceof peter); // false
console.log(peter instanceof Object); // true
console.log(Elf instanceof Object); // true
console.log(peter instanceof Function); // false
console.log(Elf instanceof Function); // true
console.log(peter instanceof Function); // false
