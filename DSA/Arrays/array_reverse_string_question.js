// Create a function that reverses a string:
//  "Hi My name is Raushan" should be : nahsuar si eman yM iH

function reverse(str) {
  //  check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmmm that is not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}
reverse("Hi My name is Raushan");

function reverse2(str) {
  //  check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmmm that is not good";
  }
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");
const reverse4 = (str) => [...str].reverse().join("");

// reverse2("Hi My name is Raushan");
reverse4("Hi My name is Raushan");
