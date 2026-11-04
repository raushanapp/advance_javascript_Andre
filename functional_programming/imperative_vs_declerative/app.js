//  Imperative Vs Declerative
//  Imperative programming focuses on how to achieve a task, specifying the steps to perform.
//  Declarative programming focuses on what the outcome should be, without specifying the exact steps.
//  Example of Imperative approach:

for (let i = 0; i < 1000; i++) {
  console.log(i); //  Imperative approach: explicitly specifying the steps to print numbers from 0 to 999
}

//  Example of Declarative approach:
Array.from({ length: 1000 }, (_, i) => i).forEach((i) => console.log(i)); //  Declarative approach: specifying what to do with the numbers, not how to iterate over them
