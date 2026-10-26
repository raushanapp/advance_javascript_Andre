// Given 2 arrays, create a function that
// let's a user know(true/false) whether these two arrays contain any common items.

// for  Example :
//  const array1=['a','b,'c','x']
//  const array2=['z', 'y','x']
//  should return false
// ---------
// const array1 =['a','b','c','x']
//  const array2=['z','y','x']
//  should return true

function containCommonCharaceters(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// containCommonCharaceters(['a', 'b', 'c', 'x'], ['z', 'y', 'x']);
containCommonCharaceters(["a", "b", "c", "x"], ["z", "y", "w"]);
