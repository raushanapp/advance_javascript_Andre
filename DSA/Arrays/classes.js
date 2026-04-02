// reference  type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

//  context vs scope

const obj4 = {
  a: function () {
    console.log(this);
  },
};

//  instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.type}!`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

//  classical inheritance
// var Player = function (name, type) {
//   this.name = name;
//   this.type = type;
// };

// Player.prototype.introduce = function () {
//   console.log(`Hi, I'm ${this.name}, a ${this.type}!`);
// };

// var wizard3 = new Wizard("Shelly", "Healer");
// var wizard4 = new Wizard("Shawn", "Dark Magic");

// wizard3.play = function () {
//   console.log(`WEEEEEEE I'm a ${this.type}`);
// };

// wizard4.play = function () {
//   console.log(`WEEEEEEE I'm a ${this.type}`);
// };
