// Only functins have the "prototype" property in JavaScript.
// The "prototype" property is used to implement inheritance in JavaScript.
// Every function in JavaScript has a "prototype" property by default.
// When a function is used as a constructor with the "new" keyword, the newly created object's internal [[Prototype]] is set to the constructor's "prototype" property.
// This allows instances created by the constructor to inherit properties and methods from the constructor's prototype.

function multiplyBy10(num) {
  return num * 10;
}

multiplyBy10.prototype; // --> {} (an empty object by default)
