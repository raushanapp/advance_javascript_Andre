// String Anagram

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let mapStr1 = {};
    let mapStr2 = {};
    for (let i = 0; i < str1.length; i++){
        if (mapStr1.hasOwnProperty(str1[i])) {
            mapStr1[str1[i]] += 1;
        }
        else {
            mapStr1[str1[i]]=1;
        }
    }
    for (let i = 0; i < str2.length; i++){
        if (mapStr2.hasOwnProperty(str2[i])) {
            mapStr2[str2[i]] += 1;
        }
        else {
            mapStr2[str2[i]] = 1;
        }
    }
    for (let key in mapStr1) {
        if (mapStr1[key] !== mapStr2[key]) {
            return false;
        }
    }
    return true;
}

let str1 = "mixxtfz";
let str2 = "xzfxtim";
var ans = isAnagram(str1, str2);
// console.log(ans)
// String Palindrome

function isPlindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    var left = 0;
    var right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var palindromeStr = "tab a cat";
var palinAns = isPlindrome(palindromeStr);
console.log(palinAns);