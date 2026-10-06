//  BIG O NOTATION IN JAVASCRIPT
//  Big O notation is used to describe the performance or complexity of an algorithm.
//  It provides an upper bound on the time or space complexity, helping to analyze the efficiency of algorithms.
//  Common Big O notations include O(1) for constant time, O(n) for linear time, O(n^2) for quadratic time, etc.
//  Example:
//  O(1) - Accessing an element in an array by index
//  O(n) - Iterating through an array
//  O(n^2) - Nested loops over an array
//  O(log n) - Binary search in a sorted array

//  O(n log n) - Efficient sorting algorithms like merge sort and quicksort
//  O(2^n) - Algorithms with exponential growth, such as the recursive solution to the Fibonacci sequence
//  O(n!) - Algorithms with factorial growth, such as generating all permutations of a set

//  Summary:
//  Big O notation helps in understanding the scalability and efficiency of algorithms.
//  It allows developers to make informed decisions about which algorithms to use based on their performance characteristics.

// Waht is Godd Code
// 1. Readable
// 2. Scalable (BIG O)

//  example
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const largeArray = new Array(100000).fill("nemo");
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      // make more efficient by breaking the loop once Nemo is found
      break;
    }
  }
  let t1 = performance.now();
  console.log("Call to findNemo took " + (t1 - t0) + " milliseconds.");
}

findNemo(largeArray); // O(n) --> Linear Time to take find Nemo

// Comparison algorithm performance
findNemo(nemo); // O(1) --> Constant Time to take find Nemo
findNemo(everyone); // O(n) --> Linear Time to take find Nemo

//  comparison
const firstCompression = (array) => {
  console.log(array[0]);
};
firstCompression(largeArray); // O(1) --> Constant Time to access the first element
firstCompression(nemo); // O(1) --> Constant Time to access the first element
firstCompression(everyone); // O(1) --> Constant Time to access the first element

const boxes = [1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes); // O(2) --> Constant Time to access the first two elements we do not care about constant value  O(100) -> O(1)

// Exercise
function funChallenge(array) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)
  //O(n) --> depending upon inputs
  for (let i = 0; i < array.length; i++) {
    anotherFunction(); //O(n) it's depending upon the input array length
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge(); // O(1) + steps
// 3+ n+ n+ n
// O(3 +3n) --> O(n)

// Anothe questions
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1) --> Constant Time to access the first element

  var middleIndex = Math.floor(items.length / 2); // O(1) --> Constant Time to calculate the middle index
  var index = 0; // O(1) --> Constant Time to initialize the index variable

  while (index < middleIndex) {
    // O(n/2) --> It take of items up to the middle index
    console.log(items[index]); // O(n/2)
    index++; // O(n/2)
  }

  for (var i = 0; i < 100; i++) {
    // O(100) --> Constant Time to print "hi" 100 times
    console.log("hi"); // O(100)
  }
}

// Big O Analysis
// 3 + 3(n/2) + 2(100) --> we remove all const value
// O(3 + 3(n/2) + 2(100)) --> O(n)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input.length; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }

  for (let j = 0; j < input.length; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I am a mysterious variable"; // O(1)
}

// BIG O(4 + 5n) --> O(n)

// Simplifying
// BIG O Rule
// 1. Wrost case --> Consider the scenario where the input is the largest possible or worst-case scenario for the algorithm
// 2. Removed constants
