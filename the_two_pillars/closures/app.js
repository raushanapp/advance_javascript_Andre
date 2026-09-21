// Closures In Javascript
//  Lexical scope ==> Javascript engine know based on the where the code is written before the code ran,what variables are accessible in which function variable are accessible in which scope
//  Closure --> Combinations of a function and lexical environment from  which it was declared
//  Closures --> Allow the function to access variables from the enclosing scope even after that scope has finished executing code and where it was originally declared

//  example
//  function a() and  function b() is highger order function because they return another function
//  function c() is not a higher order function because it does not return another function
function a() {
  let grandpa = "I am grandpa";
  return function b() {
    let father = "I am father";
    return function c() {
      let son = "I am son";
      return `${grandpa} -> ${father} -> ${son}`;
    };
  };
}
//  when creating closure  the javascript engine keeps a reference to lexical environment of the outer function, allowing the inner function to access those variables even after the outer function has finished executing.
//  lexical --> it's mean where it ran code,
//  scoping --> what variables are accessible in the current scope
//  when creating close chain making memory heap store references [grandpa, father, son]
//  even though javascript  trying clean up memory, the references are still kept in the closure.

console.log(a()()());

//  exericse

function callMeMayBe() {
  const callMe = "Hi! I am now here!";

  setTimeout(() => {
    console.log(callMe);
  }, 4000);
}
callMeMayBe(); // This will log "Hi! I am now here!" after 4 seconds due to the closure created by setTimeout.

function callMeMayBe1() {
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}
callMeMayBe1(); //  this still console.log Hi! I am now here! after 4 seconds due to the closure created by setTimeout.
