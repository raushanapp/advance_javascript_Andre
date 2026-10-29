//  This keyword
var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "Jay",
  say() {
    let self = this;
    return function () {
      console.log(self);
    };
  },
};

var e = {
  name: "Jay",
  say() {
    return () => console.log(this);
  },
};

b.say();
