try {
  const obj = null;
  obj.property = "value";
} catch (error) {
  console.log(error.name);
}

try {
  undeclearedVvariable;
} catch (error) {
  console.log(error.name);
}

try {
  JSON.parse("{ invalidJson: }");
} catch (error) {
  console.log(error.name);
}

//  map RJX Implemenatation basic structure
const source = {
  value: 1,
  subscribes: new Set(),
  subscribe(fun) {
    this.subscribes.add(fun);
    // return an unsubscribe function
    return () => this.subscribes.delete(fun);
  },

  unsubscribe(fun) {
    this.subscribes.delete(fun);
  },

  listOfSubscribers() {
    return Array.from(this.subscribes);
  },
  next(newValue) {
    this.value = newValue;
    this.subscribes.forEach((fun) => fun(this.value));
  },
};

const mapped = {
  value: undefined,
  source,
  transform: (x) => x * 2,
  init() {
    this.unsubscribe = this.source.subscribe((value) => {
      this.value = this.transform(value);
      console.log(`Mappped Value :${this.value}`);
    });
  },
  stop() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
};

mapped.init();
source.next(2);
source.next(3);
source.next(5);
console.log("Final Mapped Value:", mapped.value);

function callback(value) {
  console.log("Callback received value:", value);
}
const unsub = source.subscribe(callback);
// console.log("Unsubscribe function:", unsub());

//  directly unsubscribe
// source.unsubscribe(callback);
mapped.stop();
source.next(2);

unsub();
