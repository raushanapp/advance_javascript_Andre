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
  b = "Hello Now I can access this";
  var c = "hello";
}

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
