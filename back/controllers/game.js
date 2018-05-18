const { Player } =  require('../models/player');
const { game, GAME_STATUS } = require('../models/game');

const join = (req, res) => {
  const user = req.session.user;
  const existingPlayer = game.getPlayerById(user.id);
  if (existingPlayer) {
    res.send({player: existingPlayer});
    return;
  }
  if (game.status === GAME_STATUS.inProgress) {
    res.send('Could not join, game in progress');
    return;
  }
  const player = new Player(user);
  game.addPlayer(player);
  res.send({player});
};

const status = (req, res) => {
  const playerId = req.session.user.id;
  const result = {
    status: game.status,
    players: game.players.map((player) => ({
      id: player.id,
      name: player.name,
      cardsCount: player.cards.length
    })),
    activePlayerId: game.activePlayerId,
    cardStack: game.cardStack,
    playerCards: game.getPlayerById(playerId).cards
  };
  res.send(result);
}

const putCard = (req, res) => {
  const playerId = req.session.user.id;
  const card = req.body.card;
  if (!game.validatePlayerTurn(playerId, card)) {
    res.status(403).send('Invalid turn');
    return;
  }
  game.putCard(playerId, card);
  res.send();
}

const pullCard = (req, res) => {
  const playerId = req.session.user.id;
  if (!game.validatePlayerTurn(playerId)) {
    res.status(403).send('Invalid turn');
    return;
  }
  game.pullCard(playerId);
  res.send();
}

module.exports = { join, status, putCard, pullCard };
