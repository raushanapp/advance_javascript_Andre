//  Google Question
//  Given an array =[2,5,1,2,3,5,1,2,4];
//  It should return 2;
//

//  Given an array =[2,1,1,2,3,5,1,2,4];
//  It should return 1;

//  given an array =[2,3,4,5];
// It should return undefined;

function firstRecurringCharacter(arr) {
  if (arr.length === 0) return undefined;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined;
} // O(n^2 ) or space complexity O(1)

function firstRecurringCharacterHash(input) {
  if (input.length === 0) return undefined;
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // O(n) or space complexity O(n)

console.log(firstRecurringCharacterHash([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterHash([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterHash([2, 3, 4, 5]));

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
