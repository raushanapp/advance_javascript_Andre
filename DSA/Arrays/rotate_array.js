/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:
    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105

Follow up:
    Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
    Could you do it in-place with O(1) extra space?


*/

let nums=[1,2,3,4,5,6,7];
let k=3;

// function rotateRightArray(arr,k){
// 	 const n = nums.length;
//     k = k % n;

//     let count = 0;

//     for (let start = 0; count < n; start++) {
//         let current = start;
//         let prev = nums[start];

//         do {
//             let next = (current + k) % n;
//             [nums[next], prev] = [prev, nums[next]];
//             current = next;
//             count++;
//         } while (start !== current);
//     }
//     return nums

// }

// //  second approach 

// function rotateArrayRight(arr,k){

// 	let n= arr.length; 
// 	let start=0;
// 	for(let i=arr.length-1;i>=0;i--){
// 		console.log(i,arr[i])
//        arr[start]=arr[i];
//        arr[i]=arr[start]
//        start++;
// 	}

// 	return arr
// }

//  third approach

function reverse(arr, start, end) {
	
	while (start < end) {
		var temp = arr[start]
		arr[start] = arr[end]
		arr[end] = temp
		start++
		end--
	}
  

}

reverse(nums, 0, nums.length-1)
reverse(nums, 0, k-1)
 reverse(nums, k, nums.length-1 )



// rotateRightArray(nums,roundRotate);
//  let ans=rotateArrayRight(nums,roundRotate)
console.log(nums)

