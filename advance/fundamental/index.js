//  Call stack + memory heap
const number = 500; // allocate memory for the number;
const string = "hellp"; //  allocate memory for  a string;
const human = {
  // allocate memory for an object
  name: "Raushan",
  last: "Kumar",
};

//  call stack

function subtracts(nums) {
  return nums - 4;
}

function calculate() {
  let a = 12;
  let b = 5;
  const subTotals = a + b;
  return subtracts(subTotals);
}

//  memory leak  this code of piece creating a memory leack if your pasting in the browser than brower get crashed

// let a = [];
// for (let i = 5; i > 1; i++) {
//   a.push(i - 1);
// }

//  reason  for memory leack  to creating global variables
//  anothere reason is event listeners not removed properly
//

var a = 1;
var b = 2;
var c = 3;

//  event listeners

var element = document.getElementById("myButton");
element.addEventListener("click", function () {});

// setInterval
// setInterval(() = {}, 0);
//  fill array with 60000 elements

const list = new Array(60000).join("1.1").split(".");

function removeItemsfromList() {
  var item = list.pop();
  console.log("Item removed: " + item);
  if (item) {
    setTimeout(removeItemsfromList, 0); // because this asyncronous call here using settimeout this should goes to web api than back to call back queue and event loop see stack is empty if it than push into stack doing thing again
    // removeItemsfromList();
  } else {
    console.log("====================================");
    console.log("End =" + list.length);
    console.log("====================================");
  }
}

removeItemsfromList();

console.log("End == " + list.length);
