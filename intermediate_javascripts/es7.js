// ES7 features
// 1) includes()
const pet = ["cat", "dog", "bat", "parrot"];

console.log(pet.includes("dog")); // true
console.log(pet.includes("bird")); // false

// 2) exponentiation operator
const square = (x) => x ** 2;
const cube = (y) => y ** 3;

console.log(square(5)); // 25
console.log(cube(3)); // 27

// Example with math
const power = 2 ** 4;
console.log(power); // 16

// More readable than Math.pow(2, 4)
console.log(Math.pow(2, 4)); // 16
