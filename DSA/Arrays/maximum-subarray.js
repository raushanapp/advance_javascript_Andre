// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//  brute force approach
function maxSubArray(nums) {
  if (!nums || nums.length === 0) return 0;
  let maxSum=0;

  for (let i = 0; i < nums.length; i++) {
    let subarry = [];
    for (let j = i; j < nums.length; j++) {
      subarry.push(nums[j]);
      let sum=0;
      for(let k=0;k<subarry.length;k++){
        sum +=subarry[k];
      }

      if(sum>maxSum){
        maxSum=sum;
      }
      
    }
  }

  return maxSum;
}

let result = maxSubArray(arr);
console.log("SUM",result)


