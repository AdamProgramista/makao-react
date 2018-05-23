const { game } = require('../models/game');

const turnGuard = (req, res, next) => {
  const gamePlayersCount = game.players.length;
  if (gamePlayersCount === 1) {
    res.status(401).send('Please wait for second player to start game');
    return;
  }
  next();
}

module.exports = { turnGuard };
