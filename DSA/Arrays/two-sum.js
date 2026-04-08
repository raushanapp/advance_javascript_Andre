// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109

let inputs = [2, 7, 11, 15];
let target = 9;
let inputs2 = [3, 2, 4];
let target2 = 6;
let inputs3 = [3, 3];
let target3 = 6;

//  this brute force approach

function findTwoSum(arr, target) {
  let leng = arr.length - 1;
  console.log(leng, arr);
  if (!arr || arr.length < 2) {
    return "Invalid Input";
  }

  for (let i = 0; i <= leng; i++) {
    let find_target_value = target - arr[i];
    for (let j = i + 1; j <= leng; j++) {
      if (arr[j] === find_target_value) return [i, j];
    }
  }

  return [];
}

// let result = findTwoSum(inputs, target);
let result = findTwoSum([], target);
let result2 = findTwoSum(inputs2, target2);
let result3 = findTwoSum(inputs3, target3);
console.log(result);
// console.log(result2);
// console.log(result3);
