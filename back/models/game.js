const { createDeck } = require('../utils/deck');
const { shuffle } = require('../utils/index');

class Game {
  constructor(status, players, deck, activePlayerId, cardStack) {
    this.status = GAME_STATUS.waiting;
    this.players = [];
    this.deck = shuffle(createDeck());
    this.activePlayerId = null;
    this.cardStack = null;
  }
}

const GAME_STATUS = {
  waiting: 'waiting',
  inProgress: 'inProgress',
  finished: 'finished'
}
