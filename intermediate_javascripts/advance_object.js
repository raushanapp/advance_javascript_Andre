// Advance object
// Reference type
// [] === []; --> false

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2; // true // in this case we have object1 assign to the object2 same reference or same memory
object1 === object3; // false --> here because object1 and object3 both object are point to the different memory location

object1.value = 15;
object2.value; // 15
object3.value;
//  context  vs scope

function a() {
  //  this called scope or this is also called own world in term's programming
  let b = 5;
}
console.log(b); // reference error becuase root scope does not have variable called b
// context  tell you where we are with in object
//  this keyword what object have inside

function d() {
  console.log(this);
}
d();

const object4 = {
  a: function () {
    console.log(this);
  },
};
object4.a();

//  instantiation
class Player {
  constructor(name, type) {
    console.log("palyer", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shally", "Healer");
const wizard2 = new Wizard("Shawn", "Drak Magic");

//  classical inheritance

var Player1 = function (name, type) {
  this.name = name;
  this.type = type;
};

Player1.prototype.introduce1 = function () {
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
};

var wizard3 = new Player1("Shally", "Healer");
var wizard4 = new Player1("Bobby", "Dark mangic");

wizard3.play = function () {
  console.log(`WEEEE I'm a ${this.type}`);
};

wizard4.play = function () {
  console.log(`WEEEE I'm a ${this.type}`);
};
