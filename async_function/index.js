//  call stack
console.log("1");
console.log("2");
console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};
//  call stack
//  Recursion
function foo() {
  foo();
}
foo(); // continue runing and fill the heap memory or stack overflow and slow the browser and carsh the browser
//  call stack and aysnc programming
console.log("5");
setTimeout(() => console.log("6"), 2000);
console.log("6");
