// this keyword
//  Funcdamental of this keyword
//  what is this --->  this is the object that the function is a property of

// obj.someFunc(this)
const obj = {
  name: "Billay",
  sing: function () {
    return "la la la" + this.name;
  },
  singAgain() {
    return this.sing(); // this refers to the object 'obj' itself and allows access to its properties and methods
  },
};

console.log(obj.sing());
console.log(obj.singAgain());

//  1 : give method aceess to theier object
//  2: execute same code for multiple objects

//  second example
function importantPerson() {
  console.log(this.name, this.firstName + "!");
}

const name = "Sunny";
const obj1 = { name: "Cassy", importantPerson: importantPerson };
const obj2 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

importantPerson(); // this will refer to the global object (window in browsers) and not print "Sunny!  only print undefined !"

obj1.importantPerson();
obj2.importantPerson();

//  exercise
//  in this example code not matter it's matter where is called

const a = function () {
  console.log(this);
  const b = function () {
    console.log(this);
    const c = {
      hi: function () {
        console.log(this);
      },
    };
    c.hi();
  };
  b();
};
a();

//  another example to demonstrate 'this' behavior inside nested functions
const obj3 = {
  name: "Alex",
  sing() {
    console.log("A", this);
    var anotherFunction = function () {
      //  why this is referring to the window object and not 'obj3'
      //  because 'anotherFunction' is a regular function and not a method of 'obj3', so 'this' defaults to the global object (window in browsers)
      console.log("B", this); // 'this' here refers to the global object (window in browsers) and not 'obj3'
    };
    anotherFunction();
  },
};
obj3.sing();

//  this keyword dynamically
//  it does't matter where written it's matter how it called
const obj4 = {
  name: "BIlly",
  sing() {
    console.log("A", this);
    //  this waht object srounding to this keyword and it's referr to this object to bind
    const anotherFunction = () => {
      console.log("B", this); // 'this' here refers to 'obj4' because arrow functions inherit 'this' from their surrounding context
    };
    anotherFunction();
  },
};

const objects = {
  name: "Another way to solve this before ES6",
  sing() {
    var anotherFunc = function () {
      console.log("B", this); // 'this' here refers to the global object (window in browsers) and not 'objects'
    };
    return anotherFunc.bind(this);
  },
};
objects.sing();

const obj5 = {
  name: "another way to use self",
  sing() {
    console.log("A ", this);
    let self = this;
    const anotherFunction = function () {
      console.log("B Inner ", self);
    };
    anotherFunction();
  },
};
obj5.sing();
