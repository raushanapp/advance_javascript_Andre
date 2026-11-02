class Character {
  #name;
  #attackCount = 0;

  constructor(name, weapon) {
    this.#name = name;
    this.weapon = weapon;
  }

  get name() {
    return this.#name;
  }

  get attackCount() {
    return this.#attackCount;
  }

  attack() {
    this.#attackCount += 1;
    return this.#performAttack();
  }

  #performAttack() {
    return `${this.#name} attacks with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const elf = new Elf("Legolas", "bow", "woodland elf");

console.log(elf.name); // Legolas (read through the public getter)
console.log(elf.weapon); // bow (public property)
console.log(elf.type); // woodland elf (public property)
console.log(elf.attack()); // Legolas attacks with bow
console.log(elf.attackCount); // 1 (read through the public getter)
console.log(Object.keys(elf)); // ["weapon", "type"]; private fields are not public keys
