// Apply Call and Bind

//  apply
const wizard = {
    name: "Merlin",
    health: 50,
    heal(num1,num2) {
        return this.health += num1 + num2;
    }
};

const archer = {
    name: "Robin Hood",
    health:30
}

console.log("Before", archer);

wizard.heal.call(archer,50,20);
wizard.heal.apply(archer, [50, 30]);

let letterCall= wizard.heal.bind(archer,20,10)

console.log("after", archer);
console.log("after", letterCall());

//  currying function
function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(5));

//  Exercise

const b = {
    name: "Vineet",
    say() {
        console.log(this);
    }
}

const c = {
    name: "Ajay",
    say(){return function(){console.log(this)}}
}

const d = {
    name: "Anand",
    say(){return ()=>console.log(this)} // this keyword lexical bind with inside of arrow function and he does no care about where it call's
}


