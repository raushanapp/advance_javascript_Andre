// Given 2 arrays, create a function that  let's a user know (true/false) whethere these two arrays
//  contain any common items
//  for Example :
//  const array1=['a','b','c','x];
//  const array2=['z','y','i'];
//  should return false
// ------------
// const array1=['a','b','c','x];
// const array2=['z','y','x'];
//  should return true

//  2 parameters  - arrays - no size limit;
//  return  true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// }
// //  time complexity: O(a*b) or O(n^2)
// let result = containsCommonItem(array1, array2);
// console.log(result);

//  array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }

//  array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  //  loop through first array and create  object where properties === items in the array
  //  can we assume always 2 params ?
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop throgh second array and  check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
//  O(a+b) time complexity and space complexity O(a)
containsCommonItem2(array1, array2);

//  clean and readable

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem3(array1, array2);
