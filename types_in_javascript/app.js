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
