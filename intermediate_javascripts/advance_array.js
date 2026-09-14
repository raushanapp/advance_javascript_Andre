// Advance Arrays
var array = [1, 2, 10, 16];
//  let see multiply every each elements
//  because forEach not return value  only loop each item
//  over collection on element
let double = [];
array.forEach((num) => {
  double.push(num * 2);
});

// console.log(newArray); // undefined []
console.log(double); //  [2,4,20,32]

//  map filter,reduce

//  map --> create new array and return the new array
// here we are not changing to array, what we are doing here simply create a new copy of array
const myArray = array.map((m) => {
  return m * 2;
});

console.log(myArray);
// filer
//
const filterArray = array.filter((n) => n > 5);
console.log(filterArray);
// reduce

const reduceArray = array.reduce((accumulator, num) => {
  //  accumulator  second parameter we have put something what we have to start with right now starting with zero
  //  accumulator remember to previous value
  return accumulator + num;
}, 10);
