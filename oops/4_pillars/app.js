// The four OOP pillars: encapsulation, abstraction, inheritance, and polymorphism.

class Character {
  #health;

  constructor(name, weapon, health) {
    if (new.target === Character) {
      throw new TypeError("Character is an abstract base class");
    }

    this.name = name;
    this.weapon = weapon;
    this.#health = health;
  }

  get health() {
    return this.#health;
  }

  takeDamage(amount) {
    if (!Number.isFinite(amount) || amount < 0) {
      throw new RangeError("Damage must be a non-negative number");
    }

    this.#health = Math.max(0, this.#health - amount);
    return this.#health;
  }

  attack() {
    throw new Error("Subclasses must implement attack()");
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon, 100);
    this.type = type;
  }

  attack() {
    return `${this.name} the ${this.type} attacks with a ${this.weapon}`;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon, 150);
    this.color = color;
  }

  attack() {
    return `${this.name} swings a ${this.weapon}`;
  }

  makeFort() {
    return `${this.name} builds a strong fort`;
  }
}

const dolby = new Elf("Dolby", "bow", "forest elf");
const shrek = new Ogre("Shrek", "club", "green");

// Polymorphism: the same method call uses each object's own attack() override.
for (const character of [dolby, shrek]) {
  console.log(character.attack());
}

console.log(dolby.health); // 100
console.log(dolby.takeDamage(25)); // 75
console.log(shrek.makeFort()); // Shrek builds a strong fort
