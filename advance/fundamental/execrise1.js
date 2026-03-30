var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "jay 1",
  say() {
    return function () {
      console.log(this);
    };
  },
};

var c = {
  name: "jay 2",
  say() {
    return () => console.log(this);
  },
};

c.say()();
// this refers to lexical bind when using arrow function this not care about where it's run

//  example

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};

const giveMeTheCharacterNow = character.getCharacter.bind(character); // this is solution

console.log("====================================");
console.log(giveMeTheCharacterNow());
console.log("====================================");

//  context vs scrope
