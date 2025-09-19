// this keyword
//  this is object that the function is a property of
//  gives method acces to thier Object
// execute same code for multiple object

// function keywordThis() {
//     console.log(this)
// }

// keywordThis()

// const obj = {
//     name: "Vineet",
//     sign() {
//         return "la la" + this.name;
//     },
//     signAgain() {
//         return this.sign()+"!"
//     }
// }

// obj.sign()

function importantPerson() {
    console.log(this.name);
}

const name = "Ajay";
importantPerson();


const obje2 = {
    name: "Aashish",
    importantPerson: importantPerson,
}

const obje3 = {
    name: "Anand",
    importantPerson: importantPerson,
}
obje2.importantPerson()

// console.log(importantPerson())

const objGlobal = {
    name: "Bittu",
    sign() {
        console.log("A", this);
        const callMeAgain = function () {
            console.log("B",this) // result should window object because this and this means not matter where it runs it reference should global referene should issue can use arrow function because funtion has lexically scope
        }
        //    because this keyword not lexical scope and does't matter where it's run it matter how the function called
        callMeAgain()
        //  we can also this keyword using bind method  to solve this problem 
           
        // return callMeAgain.bind(this);
    }
}

objGlobal.sign()

//  another way to solve this 
const objGlobal2 = {
    name: "Deepak",
    sign() {
        console.log("C", this);
        const callMeAgain = () => {
            console.log("D", this);
        }
        callMeAgain()
    }
}
objGlobal2.sign()

//  another way to handle 

const objGlobal3 = {
    name: "Golu",
    sing() {
        console.log("AN other way", this);
        var self = this;
        const callMeAgain = function () {
            console.log("======", self);
        }
        callMeAgain();
    }
};

objGlobal3.sing()