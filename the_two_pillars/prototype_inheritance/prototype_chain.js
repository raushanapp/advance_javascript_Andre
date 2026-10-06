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

const obj = { name: "Sally" };

obj.hasOwnProperty("name"); // --> true
obj.hasOwnProperty(name); //-->false

obj.hasOwnProperty("hasOwnProperty"); // --> false ==> Object himself does not  have this own  property
//  it has this property up the prototype chain, specifically on Object.prototype

//  waht about the function

function a() {}
//  all function have call apply and bind methods available through their prototype chain

a.hasOwnProperty("call"); // --> false, because "call" are not part of the property
a.hasOwnProperty("apply"); // --> false, because "apply" are not part of the property
a.hasOwnProperty("bind"); // --> false, because "bind" are not part of the property
a.hasOwnProperty("name"); // --> true, because name is optional property of function objects

//  A function is special type of object in Javascript
//  function is callable object in Javascript and where we have code so we can invoke it
//  We have Code ()
// we have an Optional Name property for the function object
// we have Properties for the function object (like call, apply, bind) ==> technically are't 100% correct because these properties are inherited from Function.prototype, not directly on the function object itself

function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive(2); // --> 10

//  proto links to Function.prototype for the multiplyByFive function object

multiplyByFive.__proto__; // --> Function.prototype
multiplyByFive.__proto__.__proto__; // --> Object.prototype (have these properties like call, bind ,apply hasOwnProperty isPrototypeOf etc.)

//  in the browser, if the see the multiplyByFive function
//  we need first to
multiplyByFive.__proto__; // --> Function.prototype
//  then we need enter then see the properties on right click on and store as global variable and the you can able to see all these properties and methods available through the prototype chain.

const array = [];
array.__proto__; // --> Array.prototype
array.__proto__.__proto__; // --> Object.prototype
array.__proto__.__proto__.__proto__; // --> null

let human = {
  mortal: true,
};

let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates); // => { age: 45 }
console.log(socrates.mortal); // => true

console.log(human.isPrototypeOf(socrates)); // --> true
