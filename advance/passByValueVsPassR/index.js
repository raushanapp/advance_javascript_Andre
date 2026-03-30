// pass by value vs pass by reference

var a = 5;
var b = a;
b++;
console.log(a); // 5
console.log(b); // because pass by value 6

//  let see pass by reference

let obj1 = {
  name: "Yao",
  password: "1234",
};

let obj2 = obj1;

obj2.password = "easypassy";

console.log(obj1); // { name: "Yao", password: "easypassy" }
console.log(obj2); // { name: "Yao", password: "easypassy" }

var c = [1, 2, 3];
var d = c;
var e = [].concat(c);

d.push(1234);
e.push(5678);
console.log(c); // [1, 2, 3, 1234]
console.log(d); // [1, 2, 3, 1234]
console.log(e); // [1, 2, 3, 5678]

let obj3 = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy",
  },
};

let clone = Object.assign({}, obj3);
let clone2 = { ...obj3 };
let superClone = JSON.parse(JSON.stringify(obj3)); // when this is used for deep cloning we have performance implications since it involves stringification and parsing, we are rarely use this

obj3.c.deep = "modified";
console.log(clone); // { a: "a", b: "b", c: { deep: "try and copy" } }
console.log(clone2); // { a: "a", b: "b", c: { deep: "try and copy" } }

//  Exercise
var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 == user2; // false

var deepEq = JSON.stringify(user1) === JSON.stringify(user2); // true
