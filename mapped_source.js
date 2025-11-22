import Source from "./rxjs.js";
class MappedSource extends Source {
  constructor(source, transform) {
    super(transform(source.value));
    this.source = source;
    this.transform = transform;
    // Will hold the unsubscribe function for the upstream source when we subscribe lazily
    this._sourceUnsub = null;
  }
  // Subscribe only subscribes to upstream when the first downstream subscriber appears.
  subscribe(callback) {
    const unsub = super.subscribe(callback);

    // If this is the first subscriber, subscribe to the upstream source lazily
    if (this.listOfSubscribers().length === 1 && !this._sourceUnsub) {
      this._sourceUnsub = this.source.subscribe((value) => {
        this.next(this.transform(value));
      });
    }

    // Return an unsubscribe wrapper that will also tear down the upstream
    return () => {
      unsub();
      // When no more downstream subscribers exist, unsubscribe from upstream
      if (this.listOfSubscribers().length === 0 && this._sourceUnsub) {
        this._sourceUnsub();
        this._sourceUnsub = null;
      }
    };
  }

  // Stop listening to upstream immediately (idempotent)
  stop() {
    if (this._sourceUnsub) {
      this._sourceUnsub();
      this._sourceUnsub = null;
    }
  }
}

const source = new Source(2);
const doubled = new MappedSource(source, (x) => x * 2);

doubled.subscribe((v) => console.log("Doubled:", v));

source.next(3); // Doubled: 6
source.next(5); // Doubled: 10

doubled.stop(); // stop listening to source updates
source.next(10); // (no output now)
