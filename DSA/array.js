//  generating subarray 

function printSubArrasy(arr) {
    let n = arr.length;
    for (let start = 0; start < n; start++){
        for (let end = start; end < n; end++){
            let subArrayPrint = [];
            for (let i = start; i <= end; i++){
               subArrayPrint.push(arr[i]);
            }
            console.log(subArrayPrint);
        }
    }
}

//  we can avoid the one for loop use slice method

function isSubArray(arr) {
    for (let start = 0; start < arr.length; start++){
        for (let end = start; end < arr.length; end++){
            var print = arr.slice(start, end + 1);
            console.log(print)
        }
    }
}

//  retun max sum 

function isMaxmumSubArraySum(arr) {
    let maxSum = -Infinity;
    for (let start = 0; start < arr.length; start++){
        for (let end = start; end < arr.length; end++){
            var print = arr.slice(start, end + 1);
            var max = print.reduce((acc, currentValue) => {
                return acc + currentValue;
            }, 0);
            if (max > maxSum) {
                maxSum = max;
            }
        }
    }
    return maxSum
}

function maxSubArraySum(numbers) {
  let maxSoFar = numbers[0];
  let currentMax = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    currentMax = Math.max(numbers[i], currentMax + numbers[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}

var arr = [9];
// printSubArrasy(arr);
// isSubArray(arr)
let anst = isMaxmumSubArraySum(arr);
// console.log(anst)
// TwoSum
function twoSum(arr, target) {
    let mapKeyValue = {};
    for (let i = 0; arr.length; i++){
        let isSubtract = target - arr[i];
        if (mapKeyValue.hasOwnProperty(isSubtract)) {
            return [mapKeyValue[isSubtract], i];
        }
        else {
            mapKeyValue[arr[i]] = i;
        }
    }

}
var arr = [-3, 4, 1, 2];
var target = -2;
const isTwoSum = twoSum(arr, target);
// console.log(isTwoSum);

// Balanced Brackets
function isBalanced(str) {
    var stack = [];
    let pairs = { ")": "(", "}": "{", "]": "[" };
    for (let char of str) {
        if (["(", "{", "["].includes(char)) {
            stack.push(char);
        }
        else if ([")", "}", "]"].includes(char)) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false
            }
        }
    }
    return stack.length === 0;
}

var str = "([)]";
const res = isBalanced(str);

//  FindDublicate in array;
const findDublicateValue = (nums,) => {
   let count = {};
    for (let i = 0; i < nums.length; i++) {
      
        if (count.hasOwnProperty(nums[i])) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
    };
    for (let key in count) {
        if (count[key] > 1) {
            return true;
        }
    }
    return false;
}
// findDublicateValue(nums);
//  Find Missing Number in Sequence
function findMissingNumberInSequence(numbers) {
    let n = numbers.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;
    for (let i = 0; i < n; i++){
        actualSum += numbers[i];
    }
    return expectedSum - actualSum;
}
let missingNumber = [1, 3, 0];
let ans = findMissingNumberInSequence(missingNumber);
// console.log(ans);
// Optimal Stock Trading
function optimalStockTradin(prices) {
    let minNumber = prices[0];
    let maxPrice = 0;
    for (let i = 1; i < prices.length; i++){
        var currentMaxPrice = prices[i] - minNumber;
        if (currentMaxPrice > maxPrice) {
            maxPrice = currentMaxPrice;
        }
        if (minNumber > prices[i]) {
            minNumber = prices[i];
        }
    }
    return maxPrice;
}
function optimalStockTradinOtherWay(prices) {
    let minNumber = prices[0];
    let maxPrice = 0;
    for (let i = 1; i < prices.length; i++){
        var currentMaxPrice = prices[i] - minNumber;
        maxPrice = Math.max(currentMaxPrice, maxPrice);
        minNumber = Math.min(minNumber, prices[i]);
    }
    return maxPrice;
}
let stockPrice = [4,3,2,1];
const result = optimalStockTradin(stockPrice);
const resultOther = optimalStockTradinOtherWay(stockPrice);
// console.log(resultOther);
// Array Product Excluding Current 
function arrayProductExcludingCurren(nums) {
    let n = nums.length;
    let result = new Array(n);
    for (let i = 0; i < n; i++){
        let multiply = 1;
        for (let j = 0; j < n; j++){
            if (j !== i) {
                multiply *= nums[j];
            }
        }
        result[i] = multiply;
    }

    return result;
}
//  arrayProductExcludingCurren Optimised way
function arrayProductExcludingCurrenOptimise(product) {
    let res = [];
    let left = 1;
    for (let i = 0; i < product.length; i++){
        res[i] = left;
        left *= product[i];
    }

    let right = 1;

    for (let j = product.length - 1; j >= 0; j--){
        res[j] *= right;
        right *= product[j];
    }
    return res
}
var products = [1,2,3];
var printsNewProp = arrayProductExcludingCurren(products);
var opt = arrayProductExcludingCurrenOptimise(products);
// console.log(printsNewProp,opt)