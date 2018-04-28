const { createDeck } = require('../utils/deck');
const { shuffle } = require('../utils/index');

class Game {
  constructor() {
    this.status = GAME_STATUS.waiting;
    this.players = [];
    this.deck = shuffle(createDeck());
    this.activePlayerId = null;
    this.cardStack = null;
  }

  getCardsFromDeck(amount) {
    const cards = this.deck.slice(0, amount);
    this.deck = this.deck.slice(amount);
    return cards;
  }

  addPlayer(player) {
    const playerCards = this.getCardsFromDeck(5);
    this.players.push(player);
    player.cards = playerCards;

    if (this.activePlayerId === null) {
      this.activePlayerId = player.id;
    }
  }
}

const GAME_STATUS = {
  waiting: 'waiting',
  inProgress: 'inProgress',
  finished: 'finished'
};

const game = new Game();

module.exports = { game };
