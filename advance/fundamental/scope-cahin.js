//  Scope chain
// lexically means simply where the function run or rin
var x = "x";
function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Raushan Kumar";
}

function sayMyName() {
  var a = "a";
  return findName();
}
sayMyName();

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      return "Raushan Kumar";
    };
  };
}

sayMyName();
