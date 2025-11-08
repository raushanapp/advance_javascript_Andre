class Source {
  constructor(initialValue) {
    this.value = initialValue;
    this.subscribes = new Set();
  }

  //  Add a subscriber (callback function)
  subscribe(callback) {
    console.log("Subscribe called", callback);
    this.subscribes.add(callback);
    // return an unsubscribe function
    return () => this.subscribes.delete(callback);
  }

  //  Remove a subscriber (callback function)
  unsubscribe(callback) {
    this.subscribes.delete(callback);
  }
  //  Notify all subscribers with the new value or // Send a new value to all subscribers
  next(newValue) {
    this.value = newValue;
    this.subscribes.forEach((callback) => callback(this.value));
  }
  // Get a list off all subscribers
  listofSubscribers() {
    return Array.from(this.subscribes);
  }
}

// Create an instance
const source = new Source(1);

function callback1(value) {
  console.log("Callback 1 received:", value);
}

function callback2(value) {
  console.log("Callback 2 received:", value);
}

// Subscribe both
source.subscribe(callback1);
source.subscribe(callback2);

// Notify subscribers
source.next(5);
// Output:
// Callback 1 received: 5
// Callback 2 received: 5

// Unsubscribe one callback directly
source.unsubscribe(callback2);

// Notify again
source.next(10);
// Output:
// Callback 1 received: 10

export default Source;
