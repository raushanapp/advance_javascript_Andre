// Object Orientend Programming -
// this keyword
// new Keyword
// prototype
//  ES6 Classes
//  Java
// Inheritance
//  Object.create()
// Private vs Public
//  4 Principle of OOP - Encapsulation, Abstraction, Inheritance, Polymorphism

//  --> Factory Function
//  els we have state with in elf object called data
//  function with in the object created  we called method of that object
//  this first approch is creating objects manually for each elf
const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "Attack with " + this.weapon;
  },
};

const elf2 = {
  name: "Sllay",
  weapon: "bow",
  attack() {
    return "Attack with " + this.weapon;
  },
};

//  factory function
//  suppose we have 10000 of  createEfl here we can see how to improve
// because attack function or method is created each elf created so it store in the different place in the memory
//  when each elf is created, so this not efficient in terms of memory usage
//  we can improve this by using shared methods outside the factory function so that all elves can share the same method instead of creating a new one for each elf
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "Attack with " + weapon;
    },
  };
}

const peter = createElf("Peter", "stones");
const sam = createElf("Sam", "fire");
