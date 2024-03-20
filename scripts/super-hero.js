class SuperHero {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    newName = newName.trim();

    if (newName === '') {
      throw new Error('The name cannot be empty');
    }

    this._name = newName;
  }
}

module.exports = SuperHero;
