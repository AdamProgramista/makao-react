const { isEqual, shuffle } = require('lodash');
const { createDeck } = require('../utils/deck');

class Game {
  constructor() {
    this.status = GAME_STATUS.waiting;
    this.players = [];
    this.deck = shuffle(createDeck());
    this.activePlayerId = null;
    this.cardStack = [];
    this.counter = 0;
    this.nextPlayerId = null;
    this.freezeCounter = 0;
    this.freezedPlayers = { id: null, count: null };
    //we have to think about different way to keep it, because sometimes
    //it could be 2 or more freezed players
  }

  getPlayerById(playerId) {
    const player = this.players.find(player => player.id === playerId);
    return player;
  };

  getCardsFromDeck(amount) {
    const cards = this.deck.slice(0, amount);
    this.deck = this.deck.slice(amount);
    return cards;
  };

  setNextPlayer() {
    const activePlayerIndex = this.players.findIndex((player) => {
      return player.id === this.activePlayerId;
    });
    const nextPlayerIndex = (activePlayerIndex + 1) % this.players.length;
    this.activePlayerId = this.players[nextPlayerIndex].id;
  };

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
    if (!player.cards.some(cardOnHand => isEqual(card, cardOnHand))) {
      return false;
    }
    if (cardStackCount > 0 &&
      (card.figure !== lastCard.figure
        && card.color !== lastCard.color
        && card.figure !== 'Q'
        && lastCard.figure !== 'Q')) {
      return false;
    }
    return true;
  };

  addPlayer(player) {
    const playerCards = this.getCardsFromDeck(5);
    this.players.push(player);
    player.cards = playerCards;

    if (this.activePlayerId === null) {
      this.activePlayerId = player.id;
    }
  };

  pullCard(playerId) {
    let cardsCount = 0;
    if (this.counter === 0) {
      cardsCount = 1;
    }
    else {
      cardsCount = this.counter;
      this.counter = 0;
    };
    const player = this.getPlayerById(playerId);
    const cards = this.getCardsFromDeck(cardsCount);
    player.cards.push(...cards);
    this.setNextPlayer();
    this.status = GAME_STATUS.inProgress;
  };

  putCard(playerId, card) {
    const cardStackCount = this.cardStack.length;
    const lastCard = this.cardStack[cardStackCount - 1];
    const player = this.players.find(player => player.id === playerId);
    if (this.freezeCounter > 0 && card.figure !== '4') {
      this.freezeCounter--;
      this.setNextPlayer();
      this.status = GAME_STATUS.inProgress;
      return 'You are not allowed to move';
    }
    else {
      player.cards = player.cards.filter(
        (playerCard) => (!isEqual(playerCard, card))
      );
      this.cardStack.push(card)
    };

    if (this.counter >= 2 && lastCard.figure === 'K' && card.figure !== 'Q'){
      this.pullCard(playerId);
    }

    else if (this.counter >= 2 && card.figure !== 'Q' && 
      (card.figure !== '2' || card.figure !== '3')) {
      this.pullCard(playerId);
    }

    if (card.figure === '2') {
      this.counter += 2;
    }

    else if (card.figure === '3') {
      this.counter += 3;
    }

    else if (card.figure === '4') {
      this.freezeCounter++;
      this.freezedPlayer.id = this.setNextPlayer();
      this.freezedPlayer.count = this.freezeCounter;
      this.status = GAME_STATUS.inProgress;
      return 'your friend is freezed';
    }

    else if (card.figure === 'K' && card.color === 'Hearts') {
      this.counter += 5;
    }

    else if (card.figure === 'J') {

    }

    else if (card.figure === 'A') {

    }

    this.setNextPlayer();
    return 'You card was put';
  };
}

const GAME_STATUS = {
  waiting: 'waiting',
  inProgress: 'inProgress',
  finished: 'finished'
};

const game = new Game();

module.exports = { game, GAME_STATUS };
