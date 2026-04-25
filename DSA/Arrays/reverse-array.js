/*
Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.
Input: arr[] = [1, 4, 3, 2, 6, 5]  
Output:  [5, 6, 2, 3, 4, 1]
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

Input: arr[] = [4, 5, 1, 2]
Output: [2, 1, 5, 4]
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on
*/

let arr = [4, 5, 1, 2];
function reverseArray(arr) {
  if (arr.length === 0) return "Invalid input";

  let tempArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArray.push(arr[i]);
  }

  return tempArray;
}

reverseArray(arr);

/*
Maximum and minimum of an array using minimum number of comparisons
Last Updated : 25 Oct, 2025

Given an array of integers arr[], the task is to find the maximum and minimum elements in the array using the minimum number of comparisons.

Examples:

    Input: arr[] = [3, 5, 4, 1, 9]
    Output: [1, 9]
    Explanation: The minimum element is 1, and the maximum element is 9.

    Input: arr[] = [22, 14, 8, 17, 35, 3]
    Output: [3, 35] 
    Explanation: The minimum element is 3, and the maximum element is 35.
*/

//  first approach is sort the array and return the first and last elements but time complexity is O(nlog n)
//  second approach is to compare elements in pairs and update max and min accordinbly
//
let arr2 = [3, 5, -44, -1, 9, 0];

function findMinMax(itemlist) {
  let min = itemlist[0];
  let max = itemlist[0];

  if (itemlist.length === 0) return "Invalid input";

  for (let i = 0; i < itemlist.length; i++) {
    if (itemlist[i] < min) min = itemlist[i];
    if (itemlist[i] > max) max = itemlist[i];
  }
  return [min, max];
}

console.log(findMinMax(arr2));

/* 
Given an integer array arr[] and an integer k, your task is to find and return the kth smallest element in the given array.
Note: The kth smallest element is determined based on the sorted order of the array.
Examples :
Input: arr[] = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10], k = 4
Output: 5
Explanation: 4th smallest element in the given array is 5.

Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
Output: 7
Explanation: 3rd smallest element in the given array is 7.

Constraints:
1 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105
1 ≤ k ≤  arr.size()
*/

let input = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10];
let k = 4;

function findKthSmallest(arr, k) {
  if (!arr || k <= 0 || k > arr.length) {
    return "Invalid input";
  }
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

console.log(findKthSmallest(input, k));
//  time complexity: O(n log n)

//  different approach: use a modified version of quickselect for better performance
