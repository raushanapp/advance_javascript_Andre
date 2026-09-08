//  what is modules or what are modules
//  Tight coupling --> simply means  every things connected
//  lot thing have depend each other
//  populating global space cause of memory space
//  It is called module pattern

// 1. global Scope
//  2. Module Scope.  ---> module scope share between the function scope so we can use them
//  with module scope we excpility say to which varibale and function we need through export and import

// 3. Function Scope
// 4. Block Scope  --> let and const

// IFEE
// Module pattern
var fightModule = (function () {
  //  this module
  //  It's great for maintainablity
  //  By definiton module is self contain map
  // well design moulde have reduce dependcies and easy to maintain the code base self contain code other part reducing the part
  //  and also aviablity to access to window scope
  // well design module reducing the global populate namesapce
  //  Idea of reuablity
  var harry = "potter";
  var voldemort = "He who must not be named";
  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} Wins ` : `${char2} wins`;
  }
  console.log(fight(harry, voldemort));
  return {
    fight: fight, // this pattern called reviling pattern the function and waht we need to access the global scope
  };
})();

// Two main problem Pro con in module
//  still populating the global namespace fightMudle

//  CommonJS and AMD -->
//  In Common js Module meant to be loaded syncronously
//  use tool to understand the browser called browsifiy and babel
var module1 = require("module1"); // .fight
var module2 = require("module2"); // . importedFunc2

function fight1() {}

module.exports = {
  fight1: fight1,
};

//  AMD  is load script asyncronuslly
define(["module1", "module2"], function (module1Import, module2Import) {
  var module1 = module1Import; // .fight
  var module2 = module2Import; // . importedFunc2
  function dance() {}

  return {
    dance: dance,
  };
});

//  UMD at end the day doing if else statement to verify to do things

// Es6 modules
const harry = "potter";
const voldemort = "He who must not be named";

export function jump() {}

export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} Wins ` : `${char2} wins`;
}
