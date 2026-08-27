//  interpreter vs compiler

function someCalulation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalulation(5, 4);
}

//  inline caching

function findUser() {
  return `Found ${user.firstName} ${UserActivation.lastName}`;
}

const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

//  what compier does inline caching instead of calling multiple times

//  just make like this Found Johnson Junior

// Hidden Classes

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

//  that code make the compier slow
obj1.a = 30;
// obj1.b = 100;

// obj2.a = 30;
// obj2.b = 100;

//  Delete keyword

// delete obj1.x = 40;
