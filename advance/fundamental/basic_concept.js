//  Basic javascripts concepts
//  javascript have seven types
//  number,string, boolean, null, undefined, object,symbol
// ==>
//  how programs are remembered that
//  variables and functions are stored in memory before the code is executed
// variables and function is ways to remember values and code blocks
// variables have flew rules start with a letter, underscore, or dollar sign can end with number

//  variable can hold  any types of  javascripts
//  in javascripts semicolon is called   expression end of programs

//  ===> undefined means the variable is declared but no value is assigned to it
//  undefined used when a define  but value not assign to the variable
//  example
var a; // it mean javacripts understand the variable but value is not assign to the variable
var firstName = "Jhon"; // this called camelCase
var last_name = "Doe"; // this called snake_case

//  number
var age = 30; // this is a number in javasripts
var str = "Raushan"; // this is a string in javascripts
var isAge = false; // this is a boolean types in javascripts

//  conditional statements in javascripts

var name = "Billay";
if (name === "Billay") {
  console.log("Hello, Billay!");
} else if (name === "Allicy") {
  console.log("Hello, Allicy!");
} else {
  // if both of the above comparisons are failed then this condition will be excuted
  console.log("Hello, stranger!");
}

//  Javascripts logical operators

if (name === "Billay" || name === "Allicy") {
  // this logical OR operator checks if either condition is true
  console.log("Hello, " + name + "!");
}
