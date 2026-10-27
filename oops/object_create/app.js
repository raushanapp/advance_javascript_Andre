// Object.create() example for creating objects with shared methods
// we can use Object.create() to create objects with shared methods to improve memory usage
//  Object.create does do it create between linked elfMethods and the new object
//  meaning the new object will have access to elfMethods through the prototype chain
const elfMethods = {
  attack() {
    return "Attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  //  here we creating prototytpe  inheritance
  //  newElf will have access to elfMethods through the prototype chain
  let newElf = Object.create(elfMethods);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf("Peter", "stones");
// peter.attack = elfMethods.attack;
console.log(peter.attack());
const sam = createElf("Sam", "fire");
console.log(sam.attack());
// sam.attack = elfMethods.attack;
