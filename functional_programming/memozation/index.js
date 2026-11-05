//  Memoization in Javascript
//  Caching  to understand  the dynamic programming concept and improve performance by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
// Cache --> is think like a backup storage where we keep the results of previous computations so that we can reuse them instead of recalculating.

function addTo80(n) {
  console.log("Take a long time to compute");
  return n + 80;
}

addTo80(5); // 85
addTo80(10); // 90

//  Improve version using memoization

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("Computing and caching result...");
    cache[n] = addTo80(n);
    return cache[n];
  }
}

memoizedAddTo80(5); // 85
memoizedAddTo80(10); // 90

//  Improved version

function memoize() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Computing and caching result...");
      cache[n] = addTo80(n);
      return cache[n];
    }
  };
}
const memoized = memoize();
memoized(5); // 85
memoized(10); // 90
