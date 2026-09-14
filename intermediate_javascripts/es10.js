// ES10 2019
// flat() a method we can use in array

const arr = [1, [2, 3], [4, 5]];
const array = [1, 2, [3, 4, [5]]];

arr.flat();
array.flat();

const jurassicPark = [
  ["🦖", "🦎"],
  "🦕",
  "🦕",
  ["🦖", "🦖"],
  [[[["🦖"]]], "🦖"],
  ["🦖", "🦖"],
];
jurassicPark.flat(50);

const entries = ["bob", "sally", , , , , , "cinday"];
entries.flat();

//  FlatMap()
// flat map use us map feature and allow us to map the depth of one
const jurassicParkChaos = jurassicPark.flatMap((creature) => creature + "🦖");

//

const userEmail = "     eddytheeagle@gmail.com";
const userEmail2 = "eddytheeagle@gmail.com    ";

userEmail.trimStart();
userEmail2.trimEnd();

//  Form Entries

const userProfiles = [
  ["commanderTom", 23],
  ["derekZlander", 40],
  ["hansel", 10],
];

const ob = Object.fromEntries(userProfiles);
Object.entries(userProfiles);

// try catch

try {
  4 + 5;
  true + hi;
  bob + "hi"; // throw because this bob variable
} catch {
  console.log("you messed up");
}

try {
  4 + 5;
  true + hi;
  bob + "hi"; // throw because this bob variable
} catch (error) {
  console.log("you messed up" + error);
}
