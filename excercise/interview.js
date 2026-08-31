//  we have addTwo(2)(6)(2)(8)()

function addTwo(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return (e) => {
          return () => {
            return a + b + c + d + e;
          };
        };
      };
    };
  };
}

addTwo(4)(6)(2)(8)(9)();

//  we can use closure and curring and recursion

function improved(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }
    return improved(a + b);
  };
}
improved(4)(6)(2)(8)(9)();

//  Amazon  shopping

const user = {
  name: "Rohan",
  active: true,
  cart: [],
  purchases: [],
};

//  Implement a cart feature
// 1 add item to cart
// 2  add 3% tax to item in cart
// 3 Buy item: cart ---> purchases
// 4 Empty cart

//  Bouns
//  accept refunds.
//  Track user history.

// Pure Functions
//  No side effect
//  input ---> output

const array = [1, 2, 3, 4];

function mutateArray(arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach((element) => {
    arr.push(1);
  });
}

mutateArray(array);
mutateArray2(array);

console.log(array); // [1,2,3] here my array modifiy this called side effect because array getting modify out side

//  do not modify
//  this function does not effect outside world or there is no side effect here
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyByTwo(arr) {
  return arr.map((i) => i * 2);
}

const array2 = removeLastItem(array);
const array3 = multiplyByTwo(array);
console.log(array2);
console.log(array3);

//  Referential Transparency

function j(num1, num2) {
  return num1 * num2;
}

function f(num) {
  return num * 2;
}

j(3, 4);
f(7);
f(j(3, 4));
