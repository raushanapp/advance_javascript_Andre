import Source from "./rxjs.js";

class MappedSource extends Source {
  constructor(source, transform) {
    super(transform(source.value));
    this.source = source;
    this.transform = transform;
    this.unsubscribe = this.source.subscribe((value) => {
      this.next(this.transform(value));
    });
  }
  stop() {
    this.unsubscribe();
  }
}

const source = new Source(2);
const doubled = new MappedSource(source, (x) => x * 2);

doubled.subscribe((v) => console.log("Doubled:", v));

source.next(3); // Doubled: 6
source.next(5); // Doubled: 10

doubled.stop(); // stop listening to source updates
source.next(10); // (no output now)
