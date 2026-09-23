# Hash Tables in JavaScript

A **hash table** stores data as key-value pairs. Given a key, a hash function converts that key into an array index called a **bucket address**. This lets us find values quickly without scanning every item.

In JavaScript, plain objects and `Map` are common hash-table-like data structures.

```mermaid
flowchart LR
    K[Key: grapes] --> H[Hash function]
    H --> I[Bucket index]
    I --> B[Bucket stores key and value]
    B --> V[Value: 1000]
```

## 1. Key-value pairs

A key identifies a value. In this object, `age`, `name`, `magic`, and `scream` are keys or properties.

```js
const user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream() {
    console.log("ahhhhhhh");
  },
};

user.age; // 54
user.spell = "abracadabra";
user.scream();
```

Reading and writing a known object property are usually described as average **O(1)** operations:

```js
user.name; // O(1) average lookup
user.name = "Maya"; // O(1) average write
```

`O(1)` means that the operation does not normally become slower as the number of stored items grows. It is an average case, not a guarantee for every implementation or workload.

## 2. How a hash table works

The process has several steps:

1. Start with a key such as `"grapes"`.
2. Pass the key to a hash function.
3. Convert the hash into a valid array index with modulo `%`.
4. Store the key and value in that bucket.
5. To read a value, hash the same key and inspect that bucket.

```mermaid
sequenceDiagram
    participant Caller
    participant HashTable
    participant HashFunction
    participant Bucket
    Caller->>HashTable: set key and value
    HashTable->>HashFunction: hash key
    HashFunction-->>HashTable: bucket index
    HashTable->>Bucket: store key and value
    Caller->>HashTable: get key
    HashTable->>HashFunction: hash same key
    HashFunction-->>HashTable: same bucket index
    HashTable->>Bucket: compare keys
    Bucket-->>Caller: return value
```

## 3. The hash function

A hash function turns a string into a number. The example from `app.js` uses each character's UTF-16 code unit and keeps the result inside the backing array with `%`.

```js
function hash(key, tableSize) {
  let hashValue = 0;

  for (let index = 0; index < key.length; index += 1) {
    hashValue = (hashValue + key.charCodeAt(index) * index) % tableSize;
  }

  return hashValue;
}

hash("grapes", 50); // an integer from 0 through 49
```

The modulo operation guarantees that the result is a valid index:

$$
\mathrm{bucketIndex} = \mathrm{hashValue} \bmod \mathrm{tableSize}
$$

A good hash function should be deterministic, reasonably fast, and distribute keys across buckets. The same key must always produce the same index for the same table size.

## 4. Collisions

A **collision** happens when different keys produce the same bucket index. Different keys cannot always be assigned different indexes because the number of possible keys is much larger than the number of buckets.

```mermaid
flowchart TD
    A[grapes] --> H1[Hash result: 4]
    B[apple] --> H2[Hash result: 4]
    H1 --> C[Bucket 4]
    H2 --> C
    C --> D[Multiple key-value pairs]
```

The usual solution is **separate chaining**: each bucket stores a small collection of key-value pairs. When reading, hash the key and then search only that bucket.

```text
bucket 4 -> [ ["grapes", 1000], ["apple", 100] ]
```

With collisions, a lookup can become **O(n / k)** in the simplified explanation from the source file, where `n` is the number of stored entries and `k` is the number of buckets. In a well-distributed table, each bucket stays small and average lookup remains close to O(1). A heavily overloaded or poorly distributed table can approach O(n).

## 5. A working hash table implementation

This implementation uses an array of buckets. Each bucket contains entries in the form `[key, value]`.

```js
class HashTable {
  constructor(size = 10) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hashValue = 0;

    for (let index = 0; index < key.length; index += 1) {
      hashValue =
        (hashValue + key.charCodeAt(index) * index) % this.data.length;
    }

    return hashValue;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    const bucket = this.data[address];
    const existingEntry = bucket.find((entry) => entry[0] === key);

    if (existingEntry) {
      existingEntry[1] = value;
    } else {
      bucket.push([key, value]);
    }

    return this;
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];

    if (!bucket) {
      return undefined;
    }

    const entry = bucket.find((item) => item[0] === key);
    return entry ? entry[1] : undefined;
  }

  keys() {
    const keys = [];

    for (const bucket of this.data) {
      if (bucket) {
        for (const [key] of bucket) {
          keys.push(key);
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (const bucket of this.data) {
      if (bucket) {
        for (const [, value] of bucket) {
          values.push(value);
        }
      }
    }

    return values;
  }
}

const table = new HashTable(20);

table.set("grapes", 1000);
table.set("apple", 100);
table.set("oranges", 50);
table.set("grapess", 54);

table.get("grapes"); // 1000
table.get("grapess"); // 54
table.keys(); // keys stored in occupied buckets
table.values(); // values stored in occupied buckets
```

### How `set` works

1. Hash the key to calculate `address`.
2. Create an empty bucket if the address has no bucket yet.
3. Search the bucket for the same key.
4. Update the old value if the key exists.
5. Otherwise, append a new `[key, value]` entry.

### How `get` works

1. Hash the key again.
2. Jump directly to the same address.
3. Search only that bucket.
4. Return the value for the matching key.
5. Return `undefined` when the key is missing.

### Current source implementation

The current `app.js` stores each key-value pair as a nested array:

```js
this.data[address].push([key, value]);
```

This matches the lookup code, which reads the key at position `0` and the value at position `1`:

```js
if (currentBucket[i][0] === key) {
  return currentBucket[i][1];
}
```

The current `keys()` and `values()` methods return the first pair from each occupied bucket:

```js
keysArray.push(this.data[i][0][0]);
valuesArrays.push(this.data[i][0][1]);
```

That is enough for a basic demonstration, but a complete collision-safe implementation should loop through every pair in every bucket, as shown in the working implementation above. It should also update an existing key instead of adding a duplicate pair when that behavior is required.

The `get` method is average **O(1)** when collisions are limited, but it can degrade to **O(n)** when many keys share one bucket.

## 6. JavaScript `Object`, `Map`, and `Set`

### Object

An object is convenient when keys are strings or symbols and the data represents named properties.

```js
const scores = {
  Maya: 95,
  Rohan: 88,
};

scores.Maya; // 95
```

Plain objects do not use arbitrary objects, arrays, or functions as distinct keys in the same way as `Map`. Object keys are generally strings or symbols. Objects also should not be chosen when you need a general-purpose insertion-ordered key-value collection.

### Map

`Map` is designed for key-value storage and allows keys of any data type, including objects, arrays, and functions. When a `Map` is iterated, entries appear in insertion order.

```js
const map = new Map();
const objectKey = { id: 1 };
const functionKey = () => "key";

map.set("name", "Maya");
map.set(objectKey, "object value");
map.set(functionKey, "function value");

map.get(objectKey); // "object value"
map.has("name"); // true
map.size; // 3

for (const [key, value] of map) {
  console.log(key, value); // follows insertion order
}
```

### Set

`Set` stores unique values rather than key-value pairs. Duplicate values are ignored, so it is useful for membership checks and removing duplicates.

```js
const uniqueNumbers = new Set([1, 2, 2, 3]);

uniqueNumbers.has(2); // true
uniqueNumbers.size; // 3

[...uniqueNumbers]; // [1, 2, 3]
```

```mermaid
flowchart LR
    O[Object] --> OP[String or symbol keys]
    M[Map] --> MK[Any value as a key]
    S[Set] --> SV[Unique values only]
```

## 7. Complexity summary

| Operation       | Average case | Collision-heavy case |
| --------------- | ------------ | -------------------- |
| Set or insert   | O(1)         | O(n) bucket search   |
| Get or lookup   | O(1)         | O(n) bucket search   |
| Delete          | O(1)         | O(n) bucket search   |
| Search all keys | O(n)         | O(n)                 |

The exact complexity depends on the hash function, number of buckets, load factor, and collision strategy.

## Hash table checklist

- What is the key and what is the value?
- Which hash function maps the key to an address?
- How are collisions handled?
- Does each bucket store complete `[key, value]` pairs?
- What happens when a key is missing?
- Does setting an existing key update or duplicate its value?
- Should this data use an object, `Map`, or `Set`?

## 8. Hash tables versus arrays

Choose the structure based on how the data will be accessed:

- Use an **array** when items are naturally ordered and you access them by numeric index.
- Use a **hash table** when you access values by a key such as a name or ID.

```mermaid
flowchart LR
    A[Array] --> AI[Numeric index]
    AI --> AF[Fast direct access]
    A --> AO[Ordered values]
    H[Hash table] --> HK[Key]
    HK --> HF[Hash function]
    HF --> HB[Bucket]
    H --> HC["Average O(1) lookup"]
```

### Time complexity comparison

Let `n` be the number of stored items. For a hash table, the average cases assume a good hash function and a reasonable load factor.

| Operation                           | Array          | Hash table average | Hash table worst case |
| ----------------------------------- | -------------- | ------------------ | --------------------- |
| Access by index or key              | O(1)           | O(1)               | O(n)                  |
| Search by value                     | O(n)           | O(n)               | O(n)                  |
| Insert at the end                   | O(1) amortized | O(1)               | O(n)                  |
| Insert at the beginning or middle   | O(n)           | O(1) average       | O(n)                  |
| Update a known item                 | O(1) by index  | O(1) average       | O(n)                  |
| Delete from the end                 | O(1)           | O(1) average       | O(n)                  |
| Delete from the beginning or middle | O(n)           | O(1) average       | O(n)                  |
| Iterate through all items           | O(n)           | O(n)               | O(n)                  |

### Array example

An array gives direct access when the numeric index is known. Inserting or deleting in the middle shifts later items, which makes that operation O(n).

```js
const users = ["Maya", "Rohan", "Sally"];

users[1]; // "Rohan" - O(1)
users.push("Tim"); // O(1) amortized
users.unshift("Ava"); // O(n), shifts existing items
users.includes("Sally"); // O(n), searches values
```

### Hash table example

A hash table gives average O(1) access when the key is known. It does not need to shift unrelated entries when a new key is added.

```js
const userAges = new Map([
  ["Maya", 29],
  ["Rohan", 32],
  ["Sally", 27],
]);

userAges.get("Rohan"); // 32 - O(1) average
userAges.set("Tim", 35); // O(1) average
userAges.has("Sally"); // O(1) average
userAges.delete("Maya"); // O(1) average
```

### Space complexity

Both structures use O(n) space for `n` stored items, but their memory layout is different:

| Structure  | Stored data                 | Space complexity | Extra memory                       |
| ---------- | --------------------------- | ---------------- | ---------------------------------- |
| Array      | Values in indexed positions | O(n)             | Small; may include unused capacity |
| Hash table | Key-value entries           | O(n)             | Bucket array and collision chains  |

If a hash table has `m` buckets and `n` entries, its total space can be described as:

$$
O(m + n)
$$

The bucket array contributes `O(m)`, and the stored key-value entries contribute `O(n)`. A larger bucket array can reduce collisions but uses more memory.

### Which one should you choose?

| Requirement                           | Better choice                        | Reason                                      |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| Preserve order and access by position | Array                                | Numeric indexes are direct and simple       |
| Find a value by a unique key          | Hash table or `Map`                  | Average O(1) key lookup                     |
| Search for a value without its key    | Array                                | Both require a scan, but arrays are simpler |
| Frequent insertions in the middle     | Hash table if key-based access works | Arrays must shift items                     |
| Store unique values only              | `Set`                                | Uniqueness is built in                      |

The important distinction is **index versus key**: arrays are optimized for positions, while hash tables are optimized for key-based lookup.

## 9. Hash table advantages and disadvantages

### Advantages

- Fast average key-value access.
- Fast average insertion and update.
- Works well with large datasets when keys are well distributed.
- Supports flexible keys, especially through `Map`.
- Uses direct lookup instead of scanning every stored item.
- Can handle large datasets when the load factor and collision rate are controlled.

### Disadvantages

- Collisions require a resolution strategy such as separate chaining.
- Poor hashing or too many entries can make operations approach O(n).
- Plain objects do not preserve data as a general-purpose ordered key-value collection.
- Iterating over all keys is O(n), unlike looking up one known key.
- A hash table uses extra bucket memory in addition to the stored entries.

The main tradeoff is speed versus memory: hash tables use extra space to make average key-based lookup and insertion fast.

## 10. Deterministic versus idempotent functions

The final comment in `app.js` describes a function that gives the same output for the same input. The precise term for that property is **deterministic** or **referentially transparent** when there are no side effects.

```js
function double(value) {
  return value * 2;
}

double(4); // 8
double(4); // 8 again: same input, same output
```

An **idempotent** operation gives the same final result when it is applied more than once. In mathematical form:

$$
f(f(x)) = f(x)
$$

For example, setting a map key to the same value is idempotent:

```js
const settings = new Map();

function enableFeature() {
  settings.set("featureEnabled", true);
}

enableFeature();
enableFeature();
settings.get("featureEnabled"); // true
```

`double` is deterministic, but it is not idempotent because `double(double(4))` is `16`, not `8`.

## 11. Deterministic hash functions

A hash function should be **deterministic**: the same input must produce the same output under the same conditions.

```js
function simpleHash(key, tableSize) {
  let hashValue = 0;

  for (let index = 0; index < key.length; index += 1) {
    hashValue = (hashValue + key.charCodeAt(index) * (index + 1)) % tableSize;
  }

  return hashValue;
}

simpleHash("grapes", 50) === simpleHash("grapes", 50); // true
```

For hash table use, this repeatability is more important than returning a different number every time. A random result would make it impossible to find a key later because the lookup could search a different bucket from the one used during insertion.

```mermaid
flowchart LR
    K[Same key] --> H1[Hash function]
    H1 --> A1[Same address]
    K --> H2[Hash function later]
    H2 --> A2[Same address]
    A1 --> B[Find the same bucket]
    A2 --> B
```

## 12. Interview problem: first recurring character

Given an array, return the first value that appears again while scanning from left to right. Return `undefined` when every value is unique.

```js
firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// 2

firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
// 1

firstRecurringCharacter([2, 3, 4, 5]);
// undefined
```

### Brute-force solution

Compare every item with every item after it. This is easy to understand, but the nested loops can repeat many comparisons.

```js
function firstRecurringCharacter(input) {
  for (let index = 0; index < input.length; index += 1) {
    for (let nextIndex = index + 1; nextIndex < input.length; nextIndex += 1) {
      if (input[index] === input[nextIndex]) {
        return input[index];
      }
    }
  }

  return undefined;
}
```

Complexity:

- Time: O(n²) in the worst case.
- Extra space: O(1), because no structure grows with the input.

### Hash table solution

Store each value as it is visited. Before storing a value, check whether it is already present. The first match is the first recurring character.

```js
function firstRecurringCharacterWithHash(input) {
  const seen = new Set();

  for (const value of input) {
    if (seen.has(value)) {
      return value;
    }

    seen.add(value);
  }

  return undefined;
}

firstRecurringCharacterWithHash([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// 2

firstRecurringCharacterWithHash([2, 3, 4, 5]);
// undefined
```

Complexity:

- Time: O(n) average, because `Set.has` and `Set.add` are average O(1).
- Extra space: O(n), because `seen` can store every input value.

```mermaid
flowchart TD
    A[Read value] --> B{Already in seen?}
    B -->|Yes| C[Return value]
    B -->|No| D[Add value to seen]
    D --> E{More values?}
    E -->|Yes| A
    E -->|No| F[Return undefined]
```

### Why the hash solution is better here

The hash-based approach trades memory for speed:

| Solution     | Time         | Extra space | Main idea                    |
| ------------ | ------------ | ----------- | ---------------------------- |
| Nested loops | O(n²)        | O(1)        | Compare pairs                |
| `Set` lookup | O(n) average | O(n)        | Remember values already seen |

This is a common data-structure decision: use additional space when it removes repeated work and improves the time complexity.

## Final revision checklist

- Can you explain how a key becomes a bucket index?
- Can you describe a collision and separate chaining?
- Can you explain why the same key must hash to the same address?
- Can you implement `set` and `get` using `[key, value]` bucket entries?
- Can you compare array indexing with hash-table key lookup?
- Can you solve first recurring character in O(n) average time with a `Set`?
- Can you state the time and space trade-off of the brute-force and hash solutions?
- Can you explain the difference between deterministic and idempotent behavior?
