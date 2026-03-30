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
