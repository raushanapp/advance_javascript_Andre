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

lizard.__proto__ = dragon;

console.log(lizard.sing()); // I am Kiki the breather of fire!
console.log(lizard.fight()); // 1

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard()); // I am Kiki the breather of fire!

//  javascript data type
// number  -->> store the value of number value integer or floating point
//  string  -->> store the sequence of characters
// boolean  -->> store the value of true or false

//  undefined  -->>  store the value of undefined it mean's value is not assigned

//  null  --> store the value of null it mean's value is intentionally absent
// symbols ---> store the value of a unique of object property
// bigInt ---> store the value of an integer larger than 2^53 - 1
// object  ---> store the value of a collection of key-value pairs
// array  ---> store the value of an ordered collection of elements

// two type of categories of data types in javascript
// primitive data type ---> include number, string ,boolean, undefined, null, symbol, bigInt
//  immutable and stored by value you cannot change the value of the primitive data type once it is  assigned value
var num = 10; //

//  non primimtive data type ---> include object,array and function
// mutable and stored by reference you can change the value of the non-primitive data after it is assigned.

var obj = { name: "Raushan" };
obj.name = "Rohan";
console.log(obj); // { name: "Rohan" }
// this demonstrates the non-primitive data is mutable and stored by reference

//  javascript operatores
//  === strict equality operator, checks both value and type
"6" === 6; // false
// == lose equlaity we are using doubule here "6"==6
"6" == 6; // to string to thins true
//  >
if (10 > 0) {
  console.log("10 is greater than 0");
}
//  <
if (10 < 20) {
  console.log("10 is less than 20");
}
// >=
if (10 >= 10) {
  console.log("10 is greater than or equal to 10");
}
