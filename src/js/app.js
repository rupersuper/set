export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Такой игрок уже существует");
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (this.members.has(character)) {
        throw new Error("Такой игрок уже существует");
      }
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
