// Array
// lookup  --> O(1) <== time complexity
// push.   --> O(1)  <== time complexity
// insert.  --> O(n)  <== time complexity
//  delete  --> O(n)  <== time complexity

const strings = ["a", "b", "c", "d", "e"];
// 5*4 = 20  each character take four bits to store the character

// Push
strings.push("f"); // O(1)

//  Pop

string.pop();
string.pop(); // O(1)
// Being of array list
//  unshift
["a", "b", "c", "d", "e"];
// 0,1,2,3,4 => move to  0,1,2,3,4,5 here shifting to x to zero index to the other index
strings.unshift("x"); // O(n) depending of the size of array

//   splice
strings.splice(2, 0, "alien"); // O(n/2) we romved the constant at end means worst case O(n)

// Two type of array static and dynamic
//  1. static array  ==> fixed the size  so we need to allocate the size
//  2. dynamic array  ==> dynamic array allow us copy the array list
//  but in javascripts case automatic allocate the memory

// once in while encoutering the push method O(n) time complexity it's means liner time

//  Build own array method

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
console.log(newArr.push("hello"));
console.log(newArr.push("You"));
console.log(newArr.push("!"));
console.log(newArr.push("are"));

// console.log(newArr.pop());
newArr.delete(1);

console.log(newArr);
