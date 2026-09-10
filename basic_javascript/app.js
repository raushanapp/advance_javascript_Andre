//  Javascript Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (new in ECMAScript 6)
// 7. Object

// Javascript Comparisons
//  !==
//  ===
//  >=
//  <=
//  >
//  <

//  Javascripts Variables
//  1. var
//  let (new in ECMAScript 6)
//  const  (new in ECMAScript 6)

//  Variable Rules
// 1. --> variable start with small case letter and end with numbers
// 2. --> you can not start with &percent  and number
// 3. --> some case you can start with _ underscore and $ dollar sign

//  Undefined --> undefined when we use nothing asign to the variable in this case we use undefined

var password; // it's means  here undefined

//  Control flow
//  Javascript Conditionals

// if
//  else
//  else if
//  ternary operator
// switch

var name = "Billay";
//  if first condtion is not match go to the other conditions
if (name === "Billay") {
  alert("Hi Billay");
} else if (name === "Susy") {
  alert("Hi Susy");
} else {
  alert("I dont know you");
}

// Javascripts logical operators
// <-- && -->
// <-- || -->
//  <-- ! -->

var name = "Ann";
if (name === "Billay" || name === "Ann") {
  // this means one of the condition stastified than you let you in but none of the conditions match than do not let you in
  console.log("Hi Billay and Ann");
}

if (name === "Billay" && name === "Ann") {
  // this means  both  of the condition stastified than you let you in but one of the conditions do not  match than do not let you in
  console.log("Hi Billay and Ann");
}
//  !true  ==> false
// !false ==> true
if (!(name === "Bob")) {
  console.log("Hi Bob");
}
