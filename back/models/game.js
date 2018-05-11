const { isEqual } = require('lodash');
const { createDeck } = require('../utils/deck');
const { shuffle } = require('../utils/index');

class Game {
  constructor() {
    this.status = GAME_STATUS.waiting;
    this.players = [];
    this.deck = shuffle(createDeck());
    this.activePlayerId = null;
    this.cardStack = [];
  }

  getPlayerById(playerId) {
    const player = this.players.find(player => player.id === playerId);
    return player;
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


  playCard(playerId, card) {
    const player = this.players.find(player => player.id === playerId);
    player.cards = player.cards.filter(
      (playerCard) => !isEqual(playerCard, card)
    );
    this.cardStack.push(card);
    this.status = GAME_STATUS.inProgress;
  }
}

const GAME_STATUS = {
  waiting: 'waiting',
  inProgress: 'inProgress',
  finished: 'finished'
};

const game = new Game();

module.exports = { game };
