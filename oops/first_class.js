// On this slide we are creating our first class.
//  Remember to add the constructor method that will enable the creation of instance (Objects) based on our class

class Animals {
  // this first class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `The name of animal is ${this.name} and Age is ${this.age}`;
  }
}

//  First instances
// on the previous slide we created a new class, added a constructor method that takes in 2 arguments-name and age. To create an object from this
//  constructor method we need to use the new keyword and pass in the given name and age of the animal object that we are creating. we
//  also have added a getInfo method that returns the information about the object

//
const firstAnimal = new Animals("Rex", 2);
console.log("====================================");
console.log(firstAnimal);
console.log("====================================", firstAnimal.getInfo());

//  Inheritance
