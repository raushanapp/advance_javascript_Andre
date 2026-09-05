//  Encapsulation -->
//  we group functionality together, we state and method inside this ELF Object
//  contain data and code work together to controller the functionality
//  -->> Encapsluation means  we have data means state and function mean method so method can we read and write with state and it can we make other
//  methods change weapon
// --> it contains state and method container it self have elf
const elf = {
  // this called object literal way to create OOP
  name: "Ajay",
  weapon: "bow",

  attack() {
    return "Attack with  " + elf.weapon;
  },
};

const elf2 = {
  // this called object literal way to create OOP
  name: "Ajay",
  weapon: "bow",

  attack() {
    return "Attack with  " + elf.weapon;
  },
};

const o = elf.attack();
const f = elf2.attack();
console.log(o);
console.log(f);

//  factory functions
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
peter.attack();
const sam = createElf("Sam", "fire");
sam.attack();

// we make better
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

// a.attack();
console.log(a.attack());
