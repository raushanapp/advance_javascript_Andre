// Readable code
//  Scable code => BIG O Notation

let name = ["nemo"];
let large = new Array(10000000).fill("nemo");
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < large.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      //  if find the nemo just break out of loop
      break;
    }
  }
  let t1 = performance.now();
  console.log(`Time taken: ${t1 - t0} ms`);
}

// findNemo(large); //  time take linear O(n)
//  BIG O Notation
// O(1) constant time

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1) constant time
  console.log(boxes[1]); // O(1) constant time
}

logFirstTwoBoxes(boxes); // O(2)  operation it is constant time

//  what is the Big O of below function ?(Hint, you may want  to go  line by line)

function funChallenge(input) {
  let a = 10; // O(1)  constant time;
  a = 50 + 3; // O(1) constant timme;

  for (let i = 0; i < input.length; i++) {
    // O(n) - linear time
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // o(n)
  }
  return a; // O(1) - constant time
}

// funChallenge([1, 2, 3, 4, 5]); // O(n) - linear time
let res = funChallenge(10); // O(n) - linear time
// console.log(res);
//  calculate the time complexity
// BIG O(3 + 4n )

function anotherFunChallenge1(input) {
  let a = 5; // O(1)- constant time
  let b = 10; // O(1)- constant time
  let c = 50; // O(1)- constant time

  for (let i = 0; i < input; i++) {
    let x = i + 1; //  O(n)
    let y = i + 2; //  O(n)
    let z = i + 3; //  O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O (n)
    let q = j * 2; // O (n)
  }
  let whoAmI = "I don't know"; // O(1)- constant time
}

//  Big O = 4 + 7n= O(n)

//  remove constant Rule number two. using this example
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2); // O(1)
  var index = 0; // O(1)

  while (index < middleIndex) {
    // O(n/2) => O(n)
    console.log(items[index]); // O(n/2) => O(n)
    index++; // O(n/2) => O(n)
  }

  for (var i = 0; i < 100; i++) {
    //
    console.log("hi");
  }
}

//  drop the constant
// (n/2 + 100) ==> O(n) we drop the constant

let n = 0;
let x = 0;
while (n < 3) {
  console.log(n);
  n++;
  x += n;
}

// console.log(x);
//  3 different  terms for inputs size
function compressBoxesTwice(boxes, boxes2) {
  //  boxes one and boxes have different inputs,so depends of the input size
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
  boxes2.forEach(function (boxes2) {
    console.log(boxes2);
  });
}

//  O(a+b) one after another
//  O(a*b) one inside another

//  Log all pairs of array
const box = [1, 2, 3, 4, 5];

function logAllPairsOfArray(arrys) {
  for (let i = 0; i < arrys.length; i++) {
    for (let j = 0; j < arrys.length; j++) {
      console.log("All Pair", arrys[i], arrys[j]);
    }
  }
}

logAllPairsOfArray(box);
//
