// ECMAScript 2024 features in JavaScript
// ES2024 adds useful data-grouping helpers and modern object utilities.

const pokemons = [
  { name: "bulbasaur", type: "grass" },
  { name: "blastoise", type: "water" },
  { name: "charmander", type: "fire" },
  { name: "ivysaur", type: "grass" },
  { name: "charmeleon", type: "fire" },
  { name: "charizard", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "venusaur", type: "grass" },
  { name: "wartortle", type: "water" },
  { name: "pikachu", type: "electric" },
];

// 1) Object.groupBy()
// Groups items by a key computed from each element.

const groupedByType = Object.groupBy(pokemons, (pokemon) => pokemon.type);
console.log(groupedByType);

const groupedByName = Object.groupBy(pokemons, (pokemon) => pokemon.name);
console.log(groupedByName);

// Example output shape:
// {
//   grass: [ { name: 'bulbasaur', type: 'grass' }, ... ],
//   water: [ ... ],
//   fire: [ ... ],
//   electric: [ { name: 'pikachu', type: 'electric' } ]
// }

// 2) Map.groupBy()
// Similar idea, but returns a Map instead of a plain object.

const groupedMap = Map.groupBy(pokemons, (pokemon) => pokemon.type);
console.log(groupedMap.get("fire"));

// Summary:
// ES2024 provides convenient grouping APIs that help organize array data by category
// without writing custom reduce logic for simple grouping tasks.
