// Primitive
//  Primitive mean's the data represent only single value in the memory
//  the value of primitive directly contains the value in the memory
typeof 5; // ---> number
typeof true; // --> boolean
typeof "To be or not to be"; // string
//  undefined is the absence of a definition  when javasript engine when initial variable assign to undefined
typeof undefined; // -->  it's special value in javascript called undefined
//  null is the absence of value, it's mean's there is nothing or no value
typeof null; // --> {} by mistake created in javascript object but this should be null
typeof Symbol("Just me"); // symbol are symbol--> Symbol are using to identified the object property so the object property should be unique
//
Boolean(true).toString();

// Non Primitive
// Non primitive data type doesn't contain directly value in the memory
// Non primitive data it's hold the reference of value in the memory
//  example
const obj = {
  a: "Tom",
};
typeof {}; // object
typeof []; // --> object
typeof function () {}; // --> function
// Note  Arrays and function are object in javasdript

//  example

function a() {
  return 5;
}

a.hi = "hihihiih";
console.log(a.hi);

// Array
let array = [1, 2, 3, 4, 5];

let objArray = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};

//  Array in javascript are object
// How we are check array in javascript
Array.isArray(array); // true
Array.isArray(objArray); // false

//  Pass by value and Pass by reference
//  value
// Copy the value and somewere else store the the value
var a = 5; // here in the memory we have address of variable a
var b = a; // here in the memory we have address of variable  b and here copy the value
b++;
a++;
console.log("before", "A", a, "B", b);
// a = 15;
// b = 20;
// console.log("after overing value", "A", a, "B", b);

//  Pass By reference
// here obj1 and obj2 pointing to the same reference so here simply we doing given to obj2 to the obj1 reference
// in this case we are not copy any object only we maintaining through the reference here
const obj1 = {
  name: "Yao",
  password: "123",
};
let obj2 = obj1;

obj2.password = "easypeasy";

console.log(obj1); // --> password should be change easypeasy
console.log(obj2); // --> password should be change easypeasy

//  Array
var c = [1, 2, 3, 4, 5];
var d = c; //here just point to the reference to the same location in the memory
d.push(13489349);
console.log(c); // c array also change because array are in javascript object so in this we are using here pass by reference
console.log(d); // same goes to array d

//  if we want to copy the do not modify the actual array element
var f = [1, 2, 3, 4, 5, 6];
var e = [].concat(f); // in this case actual array are not modify just copying and pushing into the new array
e.push(12474127812);
console.log(e);
console.log(f);

//  Object are little more diffcult

let abj = {
  a: "a",
  b: "b",
  //   if try copy one level down to copy the object we need use deep clone using JSON Stringify
  c: {
    deep: "try and cop me",
  },
};
//  first level have shallow clone object
let clone = Object.assign({}, abj);

abj.c = 5;
// another way doing
let clone2 = { ...abj };
// this is have performace implication when useing this type of cloning
let superClone = JSON.parse(JSON.stringify(abj));

console.log(abj);
console.log(clone);
console.log(clone2);

//  exercise
var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 == user2; // false
let anotherEq = JSON.stringify(user1) === JSON.stringify(user2);
