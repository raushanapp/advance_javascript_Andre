//  Immutability : --->> In Functional Programming
//  Immutability refers to the concept of not modifying existing data, but instead creating new data structures when changes are needed.
//  This helps in avoiding side effects and makes the code more predictable and easier to reason about.
//  Immutability ---> mean's not change the data or state  directly, instead create new data when needed.

//

const obj = { name: "Raushan" };

function clone(obj) {
  return { ...obj }; // this is pure
}

function updateName(obj) {
  const newObj = clone(obj);
  newObj.name = "kumar";
  return newObj;
}

// obj.name = "kumar"; // here i am direct modifying the original object, which is not immutable
//  Immutability mean's you not modify the global object directly, instead create a new object when needed.
const newObj = updateName(obj);
console.log(newObj);
console.log(obj);
console.log(obj); // original object remains unchanged due to immutability
console.log(newObj); // new object with updated name

//  some called structural sharing, where new objects share parts of the old objects to optimize memory usage.
