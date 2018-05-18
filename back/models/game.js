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

  setNextPlayer() {
    const activePlayerIndex = this.players.findIndex((player) => {
      return player.id === this.activePlayerId;
    })
    const nextPlayerIndex = (activePlayerIndex + 1) % this.players.length;
    this.activePlayerId = this.players[nextPlayerIndex].id;
  }

  validatePlayerTurn(playerId, card = null) {
    const player = this.getPlayerById(playerId);
    const cardStackCount = this.cardStack.length;
    const lastCard = this.cardStack[cardStackCount - 1];
    if (player.id !== this.activePlayerId) {
      return false;
    }
    if (!card) {
      return true;
    }
    if (!player.cards.find(cardOnHand => isEqual(card, cardOnHand))) {
      return false;
    }
    if (cardStackCount > 0 && 
        (card.figure !== lastCard.figure || card.color !== lastCard.color)) {
      return false;
    }
    return true;
  }
  

  addPlayer(player) {
    const playerCards = this.getCardsFromDeck(5);
    this.players.push(player);
    player.cards = playerCards;

    if (this.activePlayerId === null) {
      this.activePlayerId = player.id;
    }
  }

  pullCard(playerId) {
    const player = this.getPlayerById(playerId);
    const card = this.getCardsFromDeck(1)[0];
    player.cards.push(card);
    this.setNextPlayer();
    this.status = GAME_STATUS.inProgress;
  }

  putCard(playerId, card) {
    const player = this.players.find(player => player.id === playerId);
    player.cards = player.cards.filter(
      (playerCard) => !isEqual(playerCard, card)
    );
    this.cardStack.push(card);
    this.setNextPlayer();
    this.status = GAME_STATUS.inProgress;
  }
}

const GAME_STATUS = {
  waiting: 'waiting',
  inProgress: 'inProgress',
  finished: 'finished'
};

const game = new Game();

module.exports = { game, GAME_STATUS };
