// Hosting 
//  variable are paratial hosited 
// Partial hoisting for var means the variable's declaration is moved to the top of its scope, but its assignment is not.
//  Function declarations, on the other hand, are fully hoisted, meaning both the function's name and its body are moved to the top

// This difference determines how JavaScript processes your code,
//  allowing you to use a function before its definition but giving a different result when accessing a var variable before its value has been assigned

// What var partial hoisting means
// When a var variable is partially hoisted, its declaration is moved to the top of its containing function or global scope during compilation.
//  However, the initialization or assignment of its value remains in its original place. 
// This leads to the following behavior: 

// Before the assignment line is executed, the variable exists and is accessible but holds the value undefined.
// You will not get a ReferenceError for trying to access a variable that hasn't been declared, but you may get unexpected behavior because the value is undefined. 

// Example
console.log(car); // Output: undefined
var car = "Honda";
console.log(car); // Output: "Honda"

// The JavaScript engine processes the code as if it were written like this: 
// javascript
var car; // Declaration is hoisted and initialized to undefined
console.log(car); // undefined
car = "Honda"; // Assignment remains in place
console.log(car); // "Honda"


//  function decleartions is fully hosted
//  And function decleartion hosited

// What function declaration full hoisting means
// With a function declaration, both the function's name and its entire body are hoisted to the top of the scope.
//  This means the function is completely available for use throughout its entire scope, even if you call it before its definition appears in the code. 

// The JavaScript engine effectively processes the code like this, making the function immediately callable: 

// A note on function expressions is partially hosited  it's behave like var
// It is important to distinguish between function declarations and function expressions, as the latter are not fully hoisted.
//  When a function is assigned to a var variable, only the var declaration is partially hoisted, not the function itself

// Example 
// This will cause an error because the variable holds undefined
try {
  sayGoodbye();
} catch (e) {
  console.error(e); // TypeError: sayGoodbye is not a function
}

var sayGoodbye = function() { // this have partially hosited
  console.log("Goodbye!");
};


console.log("--======= console");
console.log(test1);
// console.log(obj.name); // this is give me result like undefined because value is not assign to object.name just allocation in memory 
SingD()
//  if i just calling a function just console the function name get undefined because of hosting 
console.log(sing2); // result should be undefined
// sing2() // get undefined because  during the creation phase getting assign to value is undefined because of hoting and getting error sing2 function is not a defined
// runCode();
// lexicalEnv()
// console.log(lexicalEnv) // ReferenceError: Cannot access 'lexicalEnv' before initialization because let keyword

var b = "tedday";
var b = "test";
// const a = {
//     var: "a",
    
// }
{
    let a = "test"; // this out scope is not accesable 
    var b = "test2";// this is out side of scope is available
}

//  function expression 
var sing2 = function () {
    console.log("LAl la la sing");
}

//  function decleartion 
function SingD() {
    console.log("ohhh la la la");
}

let test = ["a", "b", "c"]; // throw error ReferenceError: Cannot access 'test' before initialization because and cost not beging host 
var test1 = ["b", 1, 3]

var runCode = () => {
    console.log("Runing code");
}
let lexicalEnv = () => {
    console.log("Lexical Env===")
};
// runCode();
//  execerices
var one = 1;
var one = 2; // because during the creation time javascripts know i already created one and assing to undefined so now this second avoid or skiped
console.log("One", one) // print should be 2 because javascript's know owwo i already assign into memory 
a(); // result have this should print
function a() {
    console.log("Hi A One Runs");
}

function a() {
    console.log("This should Print")
}

var favouriteFood = "papaya";
var foodThoughts = function () {
    console.log("Original Favourite :", favouriteFood); // undefined because hosited in local scope
    var favouriteFood = "Eggs";
    console.log("New Favourite Food:", favouriteFood);
}

foodThoughts();
console.log(vegtables);

let furits = "Apple"
const vegtable="beetRoot"

var obj = { name: "Vineet", last: "Jain" };

//  global execution and this keyword  during creation phase and code excution phase in between var keyword and function decleration get hosted

printHello() // getting result Hello Hositing
// printInnerHostion() // Reference error ReferenceError: printInnerHostion is not defined

function printHello() {
    console.log("Hello Hositing");
    printInnerHostion()
    function printInnerHostion() {
        console.log("Inner function hositing in function scope not a global execution")
    }
}
//  let and cost is hosited but in temporal dead zone
console.log(testTemp); // this is temporal deaded zone
// this is temporal deaded zone all line are temporal deaded zone
// this is temporal deaded zone
let testTemp = "Hosited but in temporal deaded zone"
//  now accessable
