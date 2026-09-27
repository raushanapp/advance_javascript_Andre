//  Stacks And Queues
// There are both calling linear data structures allow us to tarverse that is go through data elements in a squencelly one by one.
// which data element can be direclty reached
//  stacks and queues only one difference between them how data get removed from the structure.
//  In stacks and queues there is no random access to elements.

// Stack follows LIFO (Last In First Out) principl

// Lookup O(n)
//  Pop O(1)
//  Push O(1)
//  Peek O(1)

//   Stacks
// think about browser
//  first visit  google
//  youtube
//  udemy.com

//  udemy.com
//  youtube
//  google

//  We can build using these data structure used
//  Arrays
//  arrays allow us  cache locallity it's make them faster because elements are stored contiguously in memory.

//  Linked Lists
//  linked lists allow us to efficiently insert and remove elements from any position in the list, but they do not provide cache locality like arrays.
//  linked list have dynamic memory allocation, which allows them to grow and shrink in size as needed.

// 1. stacks are usefull to keep track browser history because the most recently visited page is the first one to be removed when navigating back.
// 2. stacks are also used in undo mechanisms in text editors, where the most recent action is the first one to be undone.
// 3. stacks are used in expression evaluation and syntax parsing in compilers.
// 4. stacks are used in depth-first search algorithms in graph traversal.
// 5. stacks are used in function call management in programming languages, where the call stack keeps track of active function calls.

// Queue follows FIFO (First In First Out) principle
//  creating queue using array is not good because shifting elements during dequeue operation is costly (O(n))
// Lookup O(n)
//  Enqueue O(1)
//  Dequeue O(1)
//  Peek O(1)
// 1. queues are useful in scheduling tasks in operating systems, where the first task to arrive is the first one to be executed.
// 2. queues are used in breadth-first search algorithms in graph traversal.
// 3. queues are used in handling requests in web servers, where the first request to arrive is the first one to be processed.
// 4. queues are used in print spooling, where print jobs are processed in the order they are received.
// 5. queues are used in buffering data streams, where data is processed in the order it is received.

//   Queues

//  Matt -- > Joy --> samir --> pavel
//  First in: Matt
//  Second in: Joy
//  Third in: Samir
//  Fourth in: Pavel

//  First out: Matt
//  Second out: Joy
//  Third out: Samir
//  Fourth out: Pavel

//  Arrays ---> never want to build with array
//  Linked Lists ---> preferred choice for implementing queues because they allow efficient insertion and removal from both ends.

//  Stack Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this; // returning the stack itself for potential chaining
  }
  pop() {
    if (!this.top) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    // if (this.length === 0) {
    //   this.bottom = null;
    // }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    return poppedNode;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push("Matt");
myStack.push("Joy");
myStack.push("Samir");
myStack.push("Pavel");
myStack.peek();
myStack.pop();

//  Stack data structue to use array

class ArrayStack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this; // returning the stack itself for potential chaining
  }
  pop() {
    return this.array.pop();
  }
  isEmpty() {
    return this.array.length === 0;
  }
}

const myArrayStack = new ArrayStack();

myArrayStack.push("Matt");
myArrayStack.push("Joy");
myArrayStack.push("Samir");
myArrayStack.push("Pavel");
myArrayStack.peek();
myArrayStack.pop();

//  Queue Implementation using Linked List

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this; // returning the queue itself for potential chaining
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;

    // if (this.length === 0) {
    //   this.last = null;
    // }
    return holdingPointer;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue("Matt");
myQueue.enqueue("Joy");
myQueue.enqueue("Samir");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
