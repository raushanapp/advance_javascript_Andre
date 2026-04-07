// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

// BONUS: Make a program that can subtract, multiply, and also divide!

function calculator(sign, num1, num2) {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// var add_two_number = calculator("+", 5, 3);
// console.log(add_two_number);
// var subtract_two_numbers = calculator("-", 5, 3);
// console.log(subtract_two_numbers);
// var multiply_two_numbers = calculator("*", 5, 3);
// console.log(multiply_two_numbers);
// var divide_two_numbers = calculator("/", 5, 3);
// console.log(divide_two_numbers);
