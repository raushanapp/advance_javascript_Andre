// Types of Javascripts
//  Primitive data types   ===>> what does mean only represent single value
// 5
// true
// "string"
// undefined
// null
// Symbol("just me");

//  non Primitive data types Javascripts  does not contain  actual value 
// {}
// []
// function(){}

// console.log(typeof 5)
// console.log(typeof true)
// console.log(typeof "string")
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Symbol("just me"))
// console.log(typeof {})


// Array is at end of in javascript is object
const test = [1, 2, 3, 4, 5];
console.log(typeof Array.isArray(test)) // check in array

//  Pass by Reference vs pass by Value

//  pass by value

var a = 5;
var b = a;
b++
console.log(a) // result should look like 5 because pass value
console.log(b) // result should look like 6 because pass by value
//  pass by value means simply copay a value and put into the  some were in memory copay that value and they do't have any connections 