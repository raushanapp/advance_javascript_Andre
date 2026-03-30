let strings = ["a", "b", "c", "d"];

//  4*4 = 16 bytes of storage, each string takes 4 bytes of storage

//  push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//  ['x', 'a', 'b', 'c', 'd' ]
//    0    1    2    3    4.   here shift all the elements to right side that  is why O(n)  time complexity to doing this operations

// unshift
strings.unshift("x"); // O(n)

//  splice
strings.splice(2, 0, "y"); // O(n/2) average case O(n)

//  two types of array
// Static array and Dynnamic array

//  How to Build one
//  How to use it
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getMethod(index) {
    return this.date[index];
  }
  pushMehtod(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  popMethod() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteMethod(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      // this.data[this.length-1] beacuse we not touch the last element because we are shifting all the elements to left side and deleting the last element
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.pushMehtod("hi");
newArray.pushMehtod("you");
newArray.pushMehtod("!");
newArray.popMethod();
newArray.popMethod();
newArray.deleteMethod(1);
console.log("====================================");
console.log(newArray);
console.log("====================================");
