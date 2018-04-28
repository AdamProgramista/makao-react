class Player {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.cards = [];
  }
}

module.exports = { Player };
