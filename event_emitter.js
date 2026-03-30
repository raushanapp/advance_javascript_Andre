class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }
  emit(event, data) {
    if (this.events[event]) {
      //   console.log("Emit ===>>>", event, data);
      this.events[event].forEach((cb) => cb(data));
    }
    // console.log("THIS", this);
    return this;
  }
}
export class Logger {
  log(msg) {
    console.log(`[LOG]: ${msg}`);
  }
}
//  data process class
class DataProcessor {
  constructor(emitter, logger) {
    this.emitter = emitter;
    this.logger = logger;
    this.emitter.on("process", (data) => {
      this.logger.log(data.toUpperCase());
    });
  }
  process(data) {
    // console.log("DATA ===", data);
    this.emitter.emit("process", data);
  }
}
const emitter = new EventEmitter();
const logger = new Logger();
const processor = new DataProcessor(emitter, logger);
processor.process("hello world");
emitter.emit("process", "compostion rocks");
