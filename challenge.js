const obj = { count: 0 };
const array = [obj, obj, obj];

function increment(item) {
  item.count++;
  return item;
}

const results = array.map(increment);
// console.log(obj.count);
// console.log(results[0] === results[1]);
// console.log(results.length);
// console.log(array[0].count);

const wm = new WeakMap(); // TypeError: wm is not iterable if just Map them work
const m = new Map();
const obj1 = { name: "first" };
const obj2 = { name: "second" };
m.set(obj1, "first object");
m.set(obj2, "second object");

let keys = [];
for (let key of m) {
  // here i removed wm and used m  because we can not used weakMap for itertable
  keys.push(key);
}

// console.log(keys.length);
// console.log(wm.has(obj1)); // error
// console.log(wm.has(obj1)); // error not iteratble
// console.log(m.has(obj1));
// console.log(m.get(obj2));

//  interview question
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

queueMicrotask(() => console.log("4"));

setTimeout(() => {
  console.log("5");
  Promise.resolve().then(() => console.log("6"));
}, 0);

console.log("7");
