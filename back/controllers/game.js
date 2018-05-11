const { Player } =  require('../models/player');
const { game } = require('../models/game');

const join = (req, res) => {
  const user = req.session.user;
  const player = new Player(user);
  game.addPlayer(player);
  res.status(200).send({player});
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
  const playerId = req.session.user.id
  const card = req.body.card;
  game.playCard(playerId, card);
}

const pullCard = (req, res) => {

}

module.exports = { join, status };
