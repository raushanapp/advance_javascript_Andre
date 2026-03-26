// find the two sum in array given target value and return the index of the two sum
//  write the edge case
//  let  if not finding  anything simple return null
//  let if array is empty return null
//  let if array has one element and matched to the target value then also return null beacuse we need two indices value
//  let if array has two elements and matched to the target value then return the indices

// first using brute force approach
const findTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const findValue = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === findValue) {
        return [i, j];
      }
    }
  }
  return null;
};
// let nums = [9, 2];
// let nums = [1,3,7,9, 2];
let nums = [];
let target = 11;
const result = findTwoSum(nums, target);
//  Time complexity is O(n^2) and space complexity is O(1)
// another approach

function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

hasPairWithSum([1, 2, 3, 4, 5], 9);

//  Better  approch

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
    console.log("Sum", mySet);
  }
  return false;
}

hasPairWithSum2([1, 2, 3, 4, 5], 9);
