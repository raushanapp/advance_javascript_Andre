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

const target = { name: "John", age: 30 };
const handler = {
  get(obj, prop) {
    if (prop in obj) {
      console.log("Props", prop, "OBJECT ", obj);
      return `[${obj[prop]}]`;
    }
    return `missing ${prop}`;
  },
  set(obj, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    obj[prop] = value.toUpperCase();
    return true;
  },
};
// this is used to create poxy object and used to be log the value while getting and setting
const proxy = new Proxy(target, handler);
proxy.city = "New York";
// console.log(proxy.name); // [John]
// console.log(proxy.city); // [30]
// console.log(proxy.country); // missing country

//  User

const user = {
  profile: {
    settings: {
      theme: "dark",
    },
  },
};

const getTheme = (obj) => obj?.profile?.settings?.theme ?? "light";
const getLanguage = (obj) => obj?.profile?.settings?.language ?? "en";
const getNotifications = (obj) => obj?.profile?.settings?.notifications ?? true;

//  log the values
// console.log("Theme:", getTheme(user));
// console.log("Language:", getLanguage(user));
// console.log("Notifications:", getNotifications(user));
// console.log("Notifications:", getTheme(null));

// Quiz

const moduleMap = new Map();

async function loadModule(name) {
  if (moduleMap.has(name)) {
    return moduleMap.get(name);
  }
  const module = await Promise.resolve({
    default: () => `Module ${name} loaded`,
    version: "1.0.0",
  });

  moduleMap.set(name, module);
  return module;
}

// loadModule("auth").then((m) => console.log(m.default()));
// loadModule("auth").then((m) => console.log(m.version));
// loadModule("db").then((m) => console.log(m.default()));

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter2.increment();

// console.log("Counter 1 Value:", counter1.getValue()); // 2
// console.log("Counter 2 Value:", counter2.getValue()); // 2
// counter1.decrement();
// console.log("Counter 1 Value after decrement:", counter1.getValue()); // 1
// console.log("Counter 2 Value remains:", counter2.getValue()); // 2

//  WeakMap javascript
const wm = new WeakMap();
let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };
let obj3 = obj1;
wm.set(obj1, "Values1");
wm.set(obj2, "Values2");
wm.set(obj3, "Values3");

// console.log(wm.get(obj1)); // Values1
// console.log(wm.get(obj2)); // Values2
// console.log(wm.get(obj3)); // Values3
// console.log(wm.has(obj1)); // true
// console.log(wm.size);

// Custom Error

class CustomError extends Error {
  constructor(message) {
    super(message);
    // this.name = "CustomError";
    this.name = message;
  }
}

try {
  throw new CustomError("Something went wrong!");
} catch (e) {
  console.log(e.name); // CustomError
  console.log(e instanceof Error);
  console.log(e instanceof CustomError);
  console.log(e.constructor.name);
}
