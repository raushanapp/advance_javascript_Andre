class Character {
  #nameFirst;
  #attackCount = 0;

  constructor(name, weapon) {
    this.#nameFirst = name;
    this.weapon = weapon;
  }

  get name() {
    return this.#nameFirst;
  }

  get attackCount() {
    return this.#attackCount;
  }

  attack() {
    this.#attackCount += 1;
    return this.#performAttack();
  }

  #performAttack() {
    return `${this.#nameFirst} attacks with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(nameFirst, weapon, type) {
    super(nameFirst, weapon);
    console.log(nameFirst);
    this.type = type;
  }
}

const elf = new Elf("Legolas", "bow", "woodland elf");
console.log(elf.nameFirst);

const firstName = new Character("Legolas", "bow"); // Legolas (read through the public getter)

console.log(elf.name); // Legolas (read through the public getter)
console.log(elf.weapon); // bow (public property)
console.log(elf.type); // woodland elf (public property)
console.log(elf.attack()); // Legolas attacks with bow
console.log(elf.attackCount); // 1 (read through the public getter)
console.log(Object.keys(elf)); // ["weapon", "type"]; private fields are not public keys
