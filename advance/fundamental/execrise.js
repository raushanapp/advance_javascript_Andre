"use strict";
function wird() {
  var h = 50;
  return h;
}
wird(); // it will return 50 because javascript will create a global variable h but if i use use strict it will throw an error

//  call aplly

let arr = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log("====================================");
console.log(getMaxNumber(arr));
console.log("====================================");
