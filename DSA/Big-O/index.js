// Readable code
//  Scable code => BIG O Notation

let name = ["nemo"];
let large = new Array(10000000).fill("nemo");
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < large.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  let t1 = performance.now();
  console.log(`Time taken: ${t1 - t0} ms`);
}

findNemo(large); //  time take linear O(n)
//  BIG O Notation
// O(1) constant time
