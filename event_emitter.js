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
    }
  }
}
