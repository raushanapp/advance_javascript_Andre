// Function scope
//  vs
// Block scope

// Function scope means that variables declared within a function are only accessible within that function.
function example() {
  var a = 10; // 'a' is function scoped
  console.log(a);
}
example();
// console.log(a); // This would throw an error because 'a' is not accessible outside the function.

// Block scope means that variables declared within a block (e.g., inside curly braces {}) are only accessible within that block.
if (true) {
  let b = 20; // 'b' is block scoped
  console.log(b);
}
// console.log(b); // This would throw an error because 'b' is not accessible outside the block.

if (5 > 4) {
  var secret = 30;
}

console.log(secret); // This will work because 'var' is function scoped, not block scoped.

// exercise

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // 'i' is function scoped because it is declared with 'var'
  }
  console.log("Outside the loop, i is:", i); // 'i' is still accessible here because it is function scoped
}
loop(); // Invoking the loop function to demonstrate function scope of 'i'
//  solve this issue

function loopFixed() {
  for (let i = 1; i < 5; i++) {
    console.log(i); // 'i' is block scoped because it is declared with 'let'
  }
  console.log(
    "Outside the loop, i is not accessible here because it is block scoped",
  );
}
loopFixed(); // Invoking the loopFixed function to demonstrate block scope of 'i'

//
// Demonstrating that 'var' is function scoped and 'let' is block scoped within loops
function demoVar() {
  for (var i = 0; i < 3; i++) {
    console.log(i); // 'i' is function scoped
  }
  console.log("Outside the loop, i is:", i); // 'i' is still accessible here
}

function demoLet() {
  for (let j = 0; j < 3; j++) {
    console.log(j); // 'j' is block scoped
  }
  // console.log("Outside the loop, j is:", j); // This would throw an error
}

demoVar();
demoLet();

// summary
// 'var' is function scoped, meaning it is accessible throughout the function it is declared in.
// 'let' is block scoped, meaning it is only accessible within the block it is declared in.
// Use 'let' (or 'const') to avoid unintentional access to variables outside their intended scope.
// Prefer 'const' when the variable should not be reassigned, and 'let' when reassignment is needed.
