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

//  pass by reference 
const obj1 = { name: "vineet", password: "1234" };
// const obj2 = { ...obj1, password: "easypassy" } // if we are doing 
const obj2 = obj1;
// console.log(obj1)
// console.log(obj2);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c); // C is still same but d variable have change the array legnth becuase we use concat
d.push(12345567);
// console.log(d);
// console.log(c);

//  let do with Object

let obj = { a: "a", b: "b", c: {deep:"try and copy me"} };
let clone = Object.assign({}, obj);
let clone2={...obj}
obj.c.deep = "hahahah"
let superClone= JSON.parse(JSON.stringify(obj)) // this is used cause performance issue
// console.log(clone) // not because we cloning the object not modifing the object
// console.log(obj);
// console.log(clone2)
// console.log("SuperClone", superClone)

//  Type Coercion
1 == "1" // true

if (10) { // 
    console.log("Type coerion")
}

-0 === +0; // true because javascript have wired behaviour
Object.is(-0, +0);

