class Source {
  constructor(initialValue) {
    this.value = initialValue;
    // store subscribers in a Set for O(1) add/remove
    this.subscribers = new Set();
  }

  // Add a subscriber (callback function).
  // Returns an unsubscribe function.
  // Optional second parameter: { emitCurrent: boolean } to immediately invoke
  // the callback with the current value on subscribe.
  subscribe(callback, { emitCurrent = false } = {}) {
    if (typeof callback !== "function") {
      throw new TypeError("subscribe callback must be a function");
    }

    this.subscribers.add(callback);

    if (emitCurrent) callback(this.value);

    return () => this.subscribers.delete(callback);
  }

  // Remove a subscriber directly
  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }

  // Publish a new value to all subscribers. Uses a snapshot of subscribers
  // to avoid problems when subscribers add/remove in their callbacks.
  // Returns the new value.
  next(newValue) {
    this.value = newValue;
    const snapshot = Array.from(this.subscribers);
    for (const cb of snapshot) {
      try {
        cb(this.value);
      } catch (err) {
        // Don't block the loop on a subscriber exception.
        // Re-throw async so errors surface but don't stop notification.
        setTimeout(() => {
          throw err;
        }, 0);
      }
    }
    return this.value;
  }

  // Return a shallow list of current subscribers (mainly for debugging)
  listOfSubscribers() {
    return Array.from(this.subscribers);
  }
}

export default Source;
