//  Scope
//  Root scope (Window)
//  Scope --> Mean's  what variable do have to  access when javascript code runing
// By default in javascript we have root scope mean's window object or in node js we called it global scope
//  example
// now a function part of the window scope

function a() {
  console.log("Testing Scope");
}
a();

//  both have window object so we can access
var b = "Can  I access this";
function bb() {
  console.log(b);
  b = "Hello Now I can access this";
  console.log("after");
  var c = "hello";
}
bb();
// give me error  Reference error is not definded c because c variable have inside the function scope not a window and global scope
console.log(c);
console.log("before function run -->", b);
bb();
console.log("after function runs -->", b);

var fun = 5; // this is also called name confilict
function funFunction() {
  //  as soon as create with carly brance we create child scope or we say own scope with in the function
  var fun = "hellooo";
  console.log("1", fun);
}

function funerFunction() {
  //  child scope
  var fun = "Bye";
  console.log("2", fun);
}

function funestFunction() {
  // child scope
  fun = "AHHHHHHH";
  console.log("3", fun);
}
console.log("Out side function window", fun);
funFunction();
funerFunction();
funestFunction();
console.log("BEFORE Out side function window", fun);
//  tommorow goin to disccus about these
//  ternary operator
//  condition ? expr1 : expr2
function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
//  answer --> you may enter
//  isUserValid(false) --> Access Denied
//  same thing doing here
function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access Denied";
  }
}
// switch
function moveCommand(direction) {
  var wahtHappen;
  switch (direction) {
    case "forward": {
      wahtHappen = "you encounter a monster";
      break; // stop here go strignt of the switch to return the value what happen
    }
    case "back": {
      wahtHappen = "you arrived home";
      break;
    }
    case "right": {
      wahtHappen = "you found a river";
      break;
    }
    case "left": {
      wahtHappen = "you run into a troll";
      break;
    }
    default:
      wahtHappen = "please eneter a valid direction";
  }
  return wahtHappen;
}
moveCommand(left);

// ECMA internation
// ECMAScript===javascript
//  let  --> ECMAScript Es6
//  const --> ECMAScript Es6
const player = "bobby"; // this player variable always should be bobby and does not change
player = "Sally"; // you get error Assignment to constant variable  because if we are using const keyword we can not re-assign the value again and can be update the variable value

const obj = {
  player: "Rohan",
  experience: 120,
  wizardLevel: false,
};
obj = 10; // you can re-assign to variable value but in the case of object you can re-assign the object property value
obj.wizardLevel = true;

// let
let experience = 100;
let wizardLevel = false;
if (experience > 90) {
  //  only way to access this below varibale created only inside the curly braceses
  //  also create a new scope when we use let keyword
  let wizardlevel = true;
}
//  Destructuring
const userDetails = {
  name: "Sally",
  age: 30,
  isMarried: false,
};

const { name, age, isMarried } = userDetails;

//  Object Property
//  old way
//  daynamic property value
const name1 = "John show";
const obj1 = {
  [name1]: "hello",
  ["ray" + "smith"]: "hihi",
  [1 + 2]: "tskjs",
};

const d = "Siomon";
const e = true;
const f = {};
const obj2 = {
  d: d,
  e: e,
  f: f,
};

// new way of javascript

const obj3 = {
  d,
  e,
  f,
};
//  Tempplate string
const greeting = "Hello " + name + " you seem to be doing";
const greetingBest = `Hello ${name1} you seem to be doing `;

// default argument
function greet(name = "", age = 30, pet = "pet") {
  return `Hello ${name} you seem to be ${age - 10}. what a lovely ${pet} you have`;
}

greet("john", 40, "dog");

//  type of javascript symbols
//  sysmbol is specials
//  Symbol are used because he create a different types and symbol value used as identifier
let sm1 = Symbol();
let sm2 = Symbol("foo");
let sm3 = Symbol("foo");
// sm2===sm3  false

// Arrow function
// before be  are doing like this

function add(a, b) {
  return a + b;
}

//  in arrow function we have single line code we do not need to use return keyword
const add1 = (a, b) => a + b;
