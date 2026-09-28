// Prototype Inheritance in Javascripts

//  Array Object
//  --> the array object get access to the properties and methods of the Object
//  --> array get access to the properties and methods of Array.prototype through the prototype chain
const array = [];
//  if we are using .__proto__ prototype chain to go up the chain, we can see that array inherits from Array.prototype, which in turn inherits from Object.prototype
array.__proto__; // I created new Array
array.toString(); // inherited from Object.prototype

//  funtions
//  functions get access prototypal inheritance through the properties and methoos of the object
//  every function in JavaScript is also an object, so it inherits from Function.prototype, which in turn inherits from Object.prototype
function a() {}
a.__proto__; // -->  function native code
a.prototype; // -->  object containing properties and methods that will be inherited by instances of the function a

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

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard()); // I am Kiki the breather of fire!
