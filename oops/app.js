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
// console.log(a.attack());

//  create using OBject.create
// Inheritance in javascripts
//  here we are using object .create method to inheritate the propertry to other objects

const elfStore = {
  changeWeapon() {
    return "Changed Weapons : --> " + this.weapon;
  },
};

function createNewElf(name, weapon) {
  let newElf = Object.create(elfStore);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

let newCreateObject = createNewElf("Rohit", "Wood");

// console.log(newCreateObject.changeWeapon());

//  this even close the OOP
// Constructor Function

//  new Keyword here automatic return the objects and it's  ElfConstructor construct the objects for  us
//  any function invoked with new keyword called the constructor functions
function ElfConstructor(name, weapon) {
  console.log("This ===>>", this);
  this.name = name;
  this.weapon = weapon;
  console.log("This --->>", this);
}

//  with constructor function only way to create the property using this keyword
//  in the Javascript function is a specails types of callable functions and at end it is called  object can we can attached the
//  methods using prototype and if see the method in __proto__.__prototypes__ --> attack method

ElfConstructor.prototype.attackWithWeapon = function () {
  return "Attack With : " + this.weapon;
};

//  if here i used arrow function get undefined because the arrow is lexically scope base on where ran
//   arrow function is matter where it's ran so that why the buildOwnHouse method is returning undefined and switch to arrow function to normal function is dynamically scope

ElfConstructor.prototype.buildOwnHouse = () => {
  return "Build Own house " + this.name;
};

ElfConstructor.prototype.buildOwnHouse = function () {
  return "Build Own house " + this.name;
};

ElfConstructor.prototype.build = function () {
  let self = this;
  // function building() {
  //   return this.name + " builds a house";
  // }
  function building() {
    return self.name + " builds a house";
  }
  // few way to solve this
  return building();
  // return building.bind(this);
};

const peters = new ElfConstructor("Peter", "gun");
// undefined why do get undefined  and function inside function this keyword not assign to the object itself actually assign to the windows object
console.log("====>>> " + peters.build()); // undefined and there is few way to solve this
const peters2 = new ElfConstructor("New build", "gun");

console.log(peters.prototype); // undefined because peter is object and only function have access to prototypes

console.log(peters2.buildOwnHouse());

//  A functions constructor they allow us to create object with new Keywords

let Andrew = new Function(
  "name",
  "weapon",
  ` this.name = name;
  this.weapon = weapon;`,
);

let andrew1 = new Andrew("Andrew", "Stone");

console.log(andrew1);

// Classes in javascripts
//  ES6 Javascripts
//  here are modeling real world data and method and property into one place
// Instance happen when we create object to call the claas Elfg
class Elfg {
  // sudo class of prototype of inheritance
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "Attack with New Es6 " + this.weapon;
  }
}

// shally have instance of  Elfg
// under the hood javascript create using to the  prototype

const shally = new Elfg("Shally", "stones"); // this is also called instanceance
console.log(shally instanceof Elfg); // true
shally.attack();

// This Keyword

//  new binding this
//  new binding allow us to person1 to instanceate  to person1 and person1 is this keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xavier", 40);
//  implicit binding
//  this imply to person or referr to person
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("Hi " + this.name);
  },
};

//  explicit binding
// in this case i am tell to bind to the window
const person2 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log("Hi " + this.setTimeout);
  }.bind(window),
};

person2.hi();

//  arrow function case
// lexical scope where ever write the function that why this bind

const person3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = () => {
      //  this is window object but usally never won't this
      console.log("Hi " + this.name);
    };

    return inner();
  },
};
//  second case
const person4 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = function () {
      //  this is window object but usally never won't this
      console.log("Hi " + this.name);
    };

    return inner();
  },
};

//  here i need to fixed this
const person5 = {
  name: "Karen",
  age: 40,
  hi: function () {
    let self = this;
    var inner = function () {
      //  this is window object but usally never won't this
      console.log("Hi  ==>>" + self.name);
    };

    return inner();
  },
};

person3.hi();
person4.hi();
person5.hi();
