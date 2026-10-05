//  Prototype Chain in Javascript

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name} the breather of fire!`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(`Own property: ${prop}`);
  } else {
    console.log(`Inherited property: ${prop}`);
  }
}

//  Javascript engine does it look up the prototype chain to find properties and methods that are not found directly on the object itself
//  if does not find the property or method in the prototype chain, it returns undefined or base object
// why this is  usefull  prototype inheritance
// it allows objects to share properties and methods efficiently
// without duplicating code, leading to better memory usage and code organization

lizard.__proto__; // --> dragon object
lizard.__proto__.__proto__; // --> Base Object.prototype
lizard.__proto__.__proto__.__proto__; // --> null
