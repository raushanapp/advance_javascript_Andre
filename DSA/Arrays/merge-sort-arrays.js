//  merge sort arrays
function mergeSortArrays(arr1, arr2) {
  const mergedArrays = [];
  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;
  //  if array items first then return that second array same goes array item 2
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  while (arrayItem1 || arrayItem2) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      mergedArrays.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      mergedArrays.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }
  return mergedArrays;
}

// let result = mergeSortArrays([1, 3, 5], [2, 4, 6]);
let result = mergeSortArrays([-1, 3, 5, 7], [1, 2, 4, 6]);
console.log("====================================");
console.log(result);
console.log("====================================");
