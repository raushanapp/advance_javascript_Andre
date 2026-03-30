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
}
//  Instantiate for new employee
const newHire = new employee(5000, "sales");
const ceoEmployee = new employee(100000, "ceo");
// add two new properties to saleEmployee
newHire.payDay = "payDay";
newHire.phoneNumber = 7329292984;

// add the same two properties to ceoEmployee but in a different order
ceoEmployee.phoneNumber = 9087654;
ceoEmployee.payDay = 'Monday'

// store data
// internal Hood of javascripts
const hashTable = {
  objects: {
    employee: {
      employeeInstance1: {
        memoryStart: 0,
        properties: {
          salary_offset: 4,
          position_offset: 5
        }
      },
      employeeInstance2: {
        memoryStart: 12,
        properties: {
          salary_offset: 8,
          position_offset: 12
        }
      }
    }
  } 
}

const hashTable1 = {
  objects: {
    employee: {
      employeeInstance1: {
        memoryStart: 0,
        properties: {
          payDay_offset: 19, // added property and offset
          salary_offset: 4,
          position_offset: 5
        }
      },
      employeeInstance2: {
        memoryStart: 12,
        properties: {
          salary_offset: 8,
          position_offset: 12
        }
      }
    }
  } 
}

