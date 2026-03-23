// Space complexity

function tooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("Tooo!");
  }
}

tooo([1, 2, 3, 4, 5]); // O(1) space complexity

function arrayH(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = "HEllo";
  }
  return arr;
}

let result = arrayH(7);
console.log(result);

//  Exercise
//  Find 1st , find Nth...
