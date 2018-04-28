const { Player } =  require('../models/player');
const { game } = require('../models/game');

const join = (req, res) => {
  const user = req.session.user;
  const player = new Player(user);
  game.addPlayer(player);
  res.status(200).send({game, player});
};

const status = (req, res) => {
  const player = req.session.user;
  const result = {
    status: game.status,
    players: game.players.map((player) => ({
      id: player.id,
      name: player.name,
      cardsCount: player.cards.length
    })),
    activePlayerId: game.activePlayerId,
    cardStack: game.cardStack
  };
  res.send(result);
}

module.exports = { join, status };
