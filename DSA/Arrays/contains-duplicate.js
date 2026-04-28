/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.
Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
let arr = [1, 2, 3, 1];
let arr1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function containsDuplicate(nums) {
  if (!nums || nums.length <= 1) {
    return false;
  }
  let items = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (items.has(nums[i])) {
      return true;
    }
    items.add(nums[i]);
  }
  return false;
}

function containsDuplicate1(nums) {
  if (!nums || nums.length <= 1) {
    return false;
  }
  let items = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (items.has(nums[i])) {
      return true;
    }
    items.set(nums[i], true);
  }
  return false;
}

let ans = containsDuplicate(arr);
let ans1 = containsDuplicate1(arr1);
// console.log("====================================");
// console.log("A!", ans, "A2", ans1);
// console.log("====================================");
