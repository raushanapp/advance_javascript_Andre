function printName() {
    return "Vineet Jain"
}

function findName() {
    return printName();
}

function sayMyName() {
    return findName();
}

sayMyName();

//  as soon as file create in the browser create global excution context in the global excution this keyword and window both are same
// this === window;  true 
//  function it self have excution context during the runtime
// emplty file of html and js empty file it means in the browser global excution context  created 
//  global object and this keyword both are and global object in the browser called window and this keyword are same 
//  when global excution created that called creation phase when run your code that is excution 
//  when global created in browser and push into stack and sayMyName also create a own context 
// https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context
// https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno

const getHired = async () => {
    fetch("https://workwithus.lucioai.com/get-started", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Raushan Kumar",
            email: "sraushan890@gmail.com"
        }),
    }).then((res) => res.json())
        .then((resp)=>getBouncer(resp.token))
        .catch((err) => console.log(err));
    
}
// getHired()


const getBouncer = async (token) => {
    console.log(token)
    try {
        const response = await fetch("https://workwithus.lucioai.com/bouncer", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // 👈 attach toke
            }
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

let nums = [10, 7, 0, 0, 9];

//  two sum 

function twoSum(nums, target) {
    let mapSum = {};
    for (let i = 0; i < nums.length; i++){
        const isAvialble = target - nums[i];
        if (mapSum.hasOwnProperty(isAvialble)) {
            return [mapSum[isAvialble], i];
        }
        else {
            mapSum[nums[i]] = i;
        }
    }
}
let twoPair = [0,7,1,9];
var target = 7;
var twoAns = twoSum(twoPair, target)
// console.log(twoAns)

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


  for(let key in count ){
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
    console.log(stack)
    return stack.length === 0;
}

var str = "([)]";
const res = isBalanced(str);
console.log(res);



