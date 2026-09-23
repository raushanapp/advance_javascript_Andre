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

// Lexical Environment === [[Scope]]
//  sayMyName() creates a lexical environment where 'a' is defined.
//  findName() has access to 'a' due to closure and creates its own lexical environment with 'b'.
//  printName() has access to both 'a' and 'b' due to closure and creates its own lexical environment with 'c'.
console.log(sayMyName()()()); // This will log "a -> b -> c" demonstrating the closure chain.
//  make these function between link and these are not store in call-stack but instead of store in the memory heap as closures.
// heap clear by the javascript grabbage collector, but closures keep references to the outer lexical environments, preventing them from being garbage collected.
// why we use closures :
//  1. because function can be return from the function and still have access to the outer function's variables due to closure.
//  2. lexical : --> mean's the scope is determined by where the code is written not where the function called happen or invoked the function
function sayMyName() {
  let a = "a";
  return function findName() {
    let b = "b";
    return function printName() {
      let c = "c";
      return `${a} -> ${b} -> ${c}`;
    };
  };
}

// example

const boo = (string) => (name) => (name2) => `${string} -> ${name} -> ${name2}`;

let booString = boo("HI");
//  let wait 5 years
//  even after 5 years, the closure will still have access to the original "HI" string stored in the lexical environment.
// because variables are triat as local enviornment, so that why not lost even after the outer function has finished executing.
const booStringName = booString("Alice");
console.log(boo("Hi")("Alice")("Bob !"));

// Closures and Memory

//  closures have two verfy important  aspects
// 1. Memory Efficiency: Closures allow functions to retain access to their lexical environment, which can help manage memory by keeping only the necessary variables in scope.
//  Example of Memory Efficiency:

function heavyDuty(idex) {
  const bigArray = new Array(1000).fill("simle");
  console.log("created!");
  return bigArray[idex];
}

function heavyDuty2() {
  const bigArray = new Array(1000).fill("simle");
  console.log("created! again 1");
  return function (idex) {
    return bigArray[idex];
  };
}

heavyDuty(5);
heavyDuty(5);
heavyDuty(5);

const getHeavyDuty2 = heavyDuty2();
getHeavyDuty2(6);
getHeavyDuty2(7);
getHeavyDuty2(8);

//  2. Encapsulation:
// Closures allow functions to encapsulate their internal state, making it private and only accessible through the returned functions, which helps in maintaining a clean and controlled interface.
// Example of Encapsulation:

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "Boom!";
  };

  setInterval(passTime, 1000); // increment timeWithoutDestruction every second
  return {
    // launch,
    totalPeaceTime: totalPeaceTime,
  };
};

const ohno = makeNuclearButton();
ohno.totalPeaceTime();

//  least privillage principle
//  The idea is to give functions and modules the minimum level of access necessary to perform their tasks.
//  In the makeNuclearButton example, the launch function is kept private and not exposed, adhering to the least privilege principle.
