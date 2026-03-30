// create a function that takes an array as an argument and returns a new array with the elements in reverse order.
const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") return "Invalid input";
  const backward = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i]);
  }
  return backward.join("");
};

//  more clean solution;

function reverses2(str) {
  return str.split("").reverse().join("");
}

//  more clean solution without using reverse method
const reverse3 = (str) => [...str].reverse().join("");

let str = "nahsuar si eman yM iH";
const result = reverse(str);

console.log(reverse3(str));
// Time complexity is O(n) and space complexity is O(n) where n is the length of the input string.
