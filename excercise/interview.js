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
