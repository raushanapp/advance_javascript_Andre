// ECMAScript 2023 features in JavaScript
// This release added several useful immutable array helpers and last-element search methods.

const ztmMonsters = [
  { id: 1, monster: "Mr. Mouse", level: 1 },
  { id: 2, monster: "Mac", level: 30 },
  { id: 3, monster: "Denodude", level: 17 },
  { id: 4, monster: "Pye", level: 5 },
];

// 1) findLast() and findLastIndex()
// These search from the end of the array.

const lastStrongMonster = ztmMonsters.findLast((item) => item.level > 15);
console.log(lastStrongMonster); // { id: 3, monster: 'Denodude', level: 17 }

const lastStrongMonsterIndex = ztmMonsters.findLastIndex(
  (item) => item.level > 15,
);
console.log(lastStrongMonsterIndex); // 2

// 2) toReversed(), toSorted(), toSpliced(), with()
// These methods keep the original array unchanged (immutable style).

const ztmMonsterList = ["Mr. Mouse", "Mac", "Dendude", "Pye"];

// Regular array methods mutate the original array:
const mutated = [...ztmMonsterList];
mutated.reverse();
console.log(mutated); // [ 'Pye', 'Dendude', 'Mac', 'Mr. Mouse' ]

// Immutable counterparts:
console.log(ztmMonsterList.toReversed()); // [ 'Pye', 'Dendude', 'Mac', 'Mr. Mouse' ]
console.log(ztmMonsterList.toSorted()); // alphabetical order
console.log(ztmMonsterList.toSpliced(2, 1)); // removes one item from index 2
console.log(ztmMonsterList.with(1, "Testing")); // replaces index 1

// 3) Example of immutability
// The original array stays unchanged:
console.log(ztmMonsterList); // [ 'Mr. Mouse', 'Mac', 'Dendude', 'Pye' ]

// Summary:
// ES2023 makes array operations easier to read and safer by adding end-of-array search
// helpers and immutable array methods that do not mutate the original data.
