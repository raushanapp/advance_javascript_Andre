// In Javascript Hash table called as object
let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhhh");
  },
};

user.age; // O(1);
user.spell = "abr kadabra"; // O(1)
user.scream();

//  Hash table have main problem
//  Hash collisions
//  --> when have hash collisions slow down reading and writing with hash table  O(n/k)

//  there two way to solve this collisions
//  1. linkedlist
//  2. sperate chaining
//  in a object only we can save key as string
// with  in object there is no order maintain
//  in Javascript
// Map --> Map allow you to any data type to save as key
// with allow us to array ,functions save as key
//  another benifit of Map it's allow us to insertion in order
//  In Map case when loop through the data, the insertion order is maintained
const a = new Map();

// Set
// Set are verify similar to Map
//  Set only store unique values, no duplicates allowed
//  Set only store key not a value
const b = new Set();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    //   [["grapes",1000],["apple",5]]
  }
  // _hash => which say this private property but we can access still
  //  just telling other developer this private properties, so should't access this properties
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      //  charCodeAt(i) this method returning ==> simple given   integer code 0 to 65535 in between
      //    representing the UTF-16 code unit at the given index

      //  what we here doing charCode(i)*i this mean's give me unqie  number and this.data.length
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
    console.log("Current", currentBucket);
  } // O(1) --> if not collision occur then most of time O(1) otherwise if have collisions it can degrade to O(n)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // keysArray.push(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArrays = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArrays.push(this.data[i][0][1]);
      }
    }
    return valuesArrays;
  }
}

const myHashTable = new HashTable(20);
//  exam _hash working
// let has = myHashTable._hash("grapes");
// console.log(has);
myHashTable.set("grapes", 1000);
myHashTable.set("apple", 100);
myHashTable.set("oranges", 50);
myHashTable.set("grapess", 54);

//  down side of hash table
myHashTable.keys();
myHashTable.values();

//  Comparision with hash table and arrays

//  pros
//  Fast key/value access
//  Efficient memory usage
//  Can handle large datasets
//  fast lookups
//  fast inserts
//  flexible key

// cons
//  Good collision resoluation needed
//  Unorder structure
//  Slow key iteration

//  Idempotent -->  a function given input always given same output

//
