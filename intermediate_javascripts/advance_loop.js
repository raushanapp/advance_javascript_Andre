//  Advance javascript loops
const basket = ["apples", "oranges", "grapes"];

//  1 for loop
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
// 2  forEach
basket.forEach((item) => {
  console.log("Items -->>", item);
});
//  for of
//  Iterating  of the arrays string
//  we are able go one by one each item
for (item of basket) {
  console.log(item);
}
for (item of "basket") {
  console.log(item);
}
// for in loop works in objects
//  for in loop allow us to see the object properties
//  we are doing somethings called enumerating
//  it's allow us to see the properties
//  enumerating - Objects
const detailedBasket = {
  apple: 5,
  oranges: 10,
  grapes: 1000,
};

for (item in detailedBasket) {
  console.log("Object", item);
}
for (item of detailedBasket) {
  // detailedBasket is not iterable at  --> typeError
  console.log("Object", item);
}
//  for in - properites
//  enumerating - objects
for (item in basket) {
  // we get index each item why this happen because javascript array at end have object
  console.log("Object", item);
  //  0,1,2,
}

//  for in loop over the object name of the properties
//  for of loop does not work with object and only works with arrays
