//  Javascripts Engine
const isHappy = true;
//  js Engine
function jsEngine(code) {
  return code.split(/\s+/);
}
let ans = jsEngine("var a = 5");
console.log(ans);

// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}
const userData = {
  firstName: "Vineet",
  lastName: "Jain",
};
findUser(userData); // if calling every time then what happen javascript compalir does just cache data like this Found Vineet Jain and returing everytime to you because the does only return findUser nothing else

// hidden classes comes into compiler
//  Dynamically type added and removed and change object properties
// Define a simple constructor function  for example
const employee = function (salary, position) {
  this.salary = salary;
  this.position = position;
};
//  Instantiate for new employee
const newHire = new employee(5000, "sales");
const ceoEmployee = new employee(100000, "ceo");
// add two new properties to saleEmployee
newHire.payDay = "payDay";
newHire.phoneNumber = 7329292984;

// add the same two properties to ceoEmployee but in a different order
ceoEmployee.phoneNumber = 9087654;
ceoEmployee.payDay = "Monday";

// store data
// internal Hood of javascripts
const hashTable = {
  objects: {
    employee: {
      employeeInstance1: {
        memoryStart: 0,
        properties: {
          salary_offset: 4,
          position_offset: 5,
        },
      },
      employeeInstance2: {
        memoryStart: 12,
        properties: {
          salary_offset: 8,
          position_offset: 12,
        },
      },
    },
  },
};

const hashTable1 = {
  objects: {
    employee: {
      employeeInstance1: {
        memoryStart: 0,
        properties: {
          payDay_offset: 19, // added property and offset
          salary_offset: 4,
          position_offset: 5,
        },
      },
      employeeInstance2: {
        memoryStart: 12,
        properties: {
          salary_offset: 8,
          position_offset: 12,
        },
      },
    },
  },
};

//  what is javascripts
// javascript is interpeter language to build client side  application  and Brendan Eich  created by years 1995  and sever side application using node js
// javascript is a  dynamicall type programming  language that support math calualtion and dynamical, it is allows you to  dynamically add HTML contents to the DOM and fetching a data dynamically
// creates dynamic style declarations, fetches contents from another website,
// JavaScript is primarily the programming language for the web.
// It allows you to implement complex features on web pages, transforming static HTML and CSS into dynamic, interactive experiences. Every time you see timely content updates, interactive maps, animated graphics, or scrolling video elements on a website, JavaScript is likely involved

//  javascripts  quizes question have

const user = {
  name: "Vineet",
  age: 24,
  city: "Pune",
};

const keys = Object.keys(user);
const values = Object.values(user);
const entires = Object.entries(user);
const result = entires.map(([key, value]) => {
  return typeof value === "string" ? key.toUpperCase() : value * 2;
});

console.log(result); // ['name', 'age', 'city']
