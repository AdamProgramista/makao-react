let counter = 1;

class User {
  constructor(name) {
    this.userId = counter++;
    this.name = name;
  }
}

module.exports = { User };
