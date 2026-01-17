const { Logger } = require("./event_emitter.js");
class Emitter {
  constructor() {
    this.events = new Map();
  }
  on(event, cb) {
    if (typeof cb !== "function")
      throw new TypeError("Listener must be a function");

    let set = this.events.get(event);
    if (!set) {
      set = new Set();
      this.events.set(event, set);
    }
    set.add(cb);
    //    return unsubscribe
    return () => set.delete(cb);
  }
  off(event, cb) {
    const set = this.events.get(event);
    if (!set) return;
    set.delete(cb);
    if (set.size === 0) this.events.delete(event);
  }
  once(event, cb) {
    const unsub = this.on(event, (data) => {
      try {
        cb(data);
      } finally {
        unsub();
      }
    });
    return unsub;
  }
  emit(event, data) {
    const set = this.events.get(event);
    if (!set) return false;
    //   iterate over snapshot so muatations during emit don't affect this emission
    const snapshot = Array.from(set);
    for (const listener of snapshot) {
      try {
        listener(data);
      } catch (error) {
        //   don't stop ohter listeners : surface the error asynchronously
        setTimeout(() => {
          throw error;
        }, 0);
      }
    }
    return true;
  }
}
//  example and used
const emitter = new Emitter();
const logger = new Logger();
const unsub = emitter.on("process", (data) => logger.log(data.toUpperCase()));
emitter.emit("process", "hello");
//  when you no logger need the listener
unsub();
