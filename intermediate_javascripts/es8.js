// ES8 features

// 1) padStart() and padEnd()
let s = "Turtle";
console.log(s.padStart(10, "*")); // ******Turtle
console.log(s.padEnd(10, "-")); // Turtle----

// 2) trailing comma in function parameters
const fun = (a, b, c, d) => {
  console.log(a + b + c + d);
};

fun(1, 2, 3, 4); // 10

// 3) Object methods
Object.values();
Object.entries();
Object.keys();

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr Grinch",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log("value:", value);
});

Object.entries(obj).forEach((entry) => {
  console.log("Entries:", entry);
});

const formattedNames = Object.entries(obj).map(([key, value]) => {
  return value + key.replace("username", "");
});

console.log(formattedNames);

// the older version using v[0] and v[1] is also valid:
const olderWay = Object.entries(obj).map((v) => {
  return v[1] + v[0].replace("username", "");
});

console.log(olderWay);
