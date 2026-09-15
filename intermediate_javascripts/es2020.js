// ES2020 features in JavaScript
// This version added several important safety and data-handling features.

// 1) BigInt
// JavaScript numbers are safe only up to 2^53 - 1.
// BigInt is used for very large integers beyond that limit.

const maxSafeInteger = 9007199254740991;
console.log(maxSafeInteger);

const hugeNumber = 9007199254740991n + 2n;
console.log(hugeNumber); // 9007199254740993n
console.log(typeof hugeNumber); // bigint

// 2) Nullish Coalescing Operator ??
// This is used when we want to fall back only for null or undefined.
// Unlike ||, it does NOT treat 0, false, or empty string as missing.

const pokemonPower = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 39,
    power: "lightning",
  },
};

const power = pokemonPower.raichu?.power ?? "no power";
console.log(power); // lightning

const userScore = 0;
const safeScore = userScore ?? 10;
console.log(safeScore); // 0

const fallback = "" ?? "default";
console.log(fallback); // ""

// 3) Optional Chaining ?.
// It prevents TypeError when a property is missing.

const willPokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
  },
};

const andreiPokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 39,
    power: "lightning",
  },
};

// Old way (dangerous):
// const weight = willPokemon.pikachu.weight; // TypeError

// Safe way:
const safeWeight = willPokemon?.pikachu?.weight ?? "no weight found";
console.log(safeWeight); // 6

const missingWeight = andreiPokemon?.pikachu?.weight ?? "no weight found";
console.log(missingWeight); // no weight found

// 4) Promise.allSettled()
// Resolves even if one promise rejects, so we can inspect results of all promises.

const promise1 = Promise.resolve("bulbasaur");
const promise2 = Promise.reject("Some error");
const promise3 = Promise.resolve("pikachu");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});

// 5) globalThis
// One universal way to access the global object in browsers, Node, workers, etc.
console.log(globalThis.location ?? "No browser window available");

// Summary:
// ES2020 makes JS safer and more expressive by adding BigInt, nullish fallback,
// optional chaining, allSettled, and a global object reference that works everywhere.
