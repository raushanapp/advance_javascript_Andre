// Higher order function
//  1 --> A higher order function simply means as function as arguments
// 2 -- > higher order function take a function and return a function

//  example this is simple function

function letAdaminLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return "Access Granted to Adam";
}

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 10000; i++) {
    array.push(i);
  }
  return "Access Granted to Adam";
}

letAdaminLogin();
letEvaLogin();

// let create generic function

const giveAccessTo = (name) => "Acess Granted to " + name;

function authenticate(verify) {
  let array = [];
  if (!verify?.takeTime) {
    for (let i = 0; i < verify.takeTime; i++) {
      array.push(i);
    }
  }
  return giveAccessTo(verify.name);
}

function sing(person) {
  return "La lal la my name is " + person.name;
}

function letUserLogin(user) {
  // ++ we now tell the function what data to use
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}

letUserLogin("Eva"); // we have ability to define the data

//  if want to more generic we can use DRY principle
function letAdminLogin(admin) {
  // ++ we now tell the function what data to use

  return giveAccessTo(admin);
}

//  make better
function letPerson(person, fn) {
  // what data to use and tell it what function to use
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
}

let res1 = letPerson(
  { level: "user", name: "Tim", takeTime: 10000 },
  authenticate,
);
let res2 = letPerson(
  { level: "admin", name: "sally", takeTime: 500000 },
  authenticate,
);
let res3 = letPerson({ level: "admin", name: "sally" }, sing);

console.log("Result1 ==>>", res1);
console.log("Result2 ==>>", res2);
console.log("Result3 ==>>", res3);

//  exercise

function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

let multiplyByTwo = multiplyBy(2);
let multiplyByTen = multiplyBy(10);
console.log(multiplyByTwo(10));
console.log(multiplyByTen(10));
