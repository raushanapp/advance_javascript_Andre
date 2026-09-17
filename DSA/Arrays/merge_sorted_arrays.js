//  merge sorted arrays
//  [0,3,4,31] [4,6,30]
// result [0,3,4,4,6,30,31]
//  brute force
function mergeSortedArrayUsingBruteforec(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return arr1 || arr2;
  let length1 = arr1.length - 1;
  let length2 = arr2.length - 1;
  let mergeArrays = [];
  let temp = [];

  for (let i = 0; i <= length1; i++) {
    if (arr1[i] !== 0) {
      temp.push(arr1[i]);
    }
  }
  for (let j = 0; j <= length2; j++) {
    if (arr2[j] !== 0) {
      console.log(arr2[j]);
      temp.push(arr2[j]);
    }
  }
  let firstItem = temp[0];
  let secondIndex = 1;

  while (temp.length - 1 >= secondIndex) {
    if (firstItem < temp[secondIndex]) {
      mergeArrays.push(firstItem);
      firstItem = temp[secondIndex];
      secondIndex++;
    } else if (firstItem > temp[secondIndex]) {
      mergeArrays.push(temp[secondIndex]);
      secondIndex++;
    }
  }
  mergeArrays.push(firstItem);
  console.log(mergeArrays);
  return mergeArrays;
}

mergeSortedArrayUsingBruteforec([0, 3, 4, 31], [4, 6, 30]);
mergeSortedArrayUsingBruteforec([1, 2, 3, 0, 0, 0], [2, 5, 6]);

//  optimise version
function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  if (!arr1 && !arr2) return [];
  let mergeArrays = [];
  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;
  while (arrayItem1 !== undefined || arrayItem2 !== undefined) {
    if (arrayItem1 === 0) {
      // arrayItem1 = arr1[i];
      i++;
      continue;
    }
    if (arrayItem2 === 0) {
      // arrayItem2 = arr2[j];
      j++;
      continue;
    }
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      mergeArrays.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      mergeArrays.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }
  return mergeArrays;
}

//  other way

function mergeSpaceOptimise(arr1, arr2) {
  let i = arr1.length - 1; // last item in arr1
  let j = arr2.length - 1; //  last item in arr2;
  let k = arr1.length + arr2.length - 1; // last position in arr1

  while (j >= 0) {
    if (i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }
  return arr1;
}
mergeSpaceOptimise([0, 3, 4, 31], [4, 6, 30]);
mergeSpaceOptimise([1, 2, 3, 0, 0, 0], [2, 5, 6]);

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
mergeSortedArrays([1, 2, 3, 0, 0, 0], [2, 5, 6]);
