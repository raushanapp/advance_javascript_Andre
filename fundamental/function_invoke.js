// function Expression
var canada = function () {
    console.log("Cold")
}
var italey = () => {
    console.log("Betuatifully Aritech");
}
//  function Decleartion
function india() {
    console.log("Warm");
}
// Function Invocation/Call/ Execution
//  simply calling
canada();
india()
//  arguments does not used druing development time if your using your prograam getting slow down of arguments

function marry(per1, per2) {
    console.log("Arguments", arguments);
    console.log(Array.from(arguments))
    return `${per1} to marry ${per2}`;
};

function marry2(...args) {
    console.log("Arguments", arguments);
    console.log(Array.from(arguments))
    return `${args[0]} to marry ${args[1]}`;
}

marry("vineet","ajay");
marry2("ajay", "neha");

let test = 1;
test = 2
  
let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
let newOb = {
    wheels: "2",
    fuelType: "Petrol",
    color:"Blue"
}
let newCar =  Object.create(newOb);
console.log(newCar);
newCar.wheels = "6";
console.log(newCar, "Creating a Object");

var sc="before Function"

function testScope() {
    sc = "Declear is Inside Function";
    console.log(sc);
}

if (true) {
    sc = "ReDeclear in Block Scope";
}

testScope()
console.log(sc);

//  Implemnt memoized function to cache

function memoizedAddtionTen() {
    let cache = {};
    return (value) => {
        if (value in cache) {
            return cache[value];
        } else {
            let result = value + 10;
            cache[value] = result;
            return result
        }
    }
}

let addbyTen = memoizedAddtionTen();
console.log(addbyTen(5));
console.log(addbyTen(20));
console.log(addbyTen(5));

Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

let customArray = ["a", "b", 12, 143];


let myAns = customArray.myMap((number, index, arr) => number);
console.log(Array.isArray(myAns)); // this is way to typeof array

