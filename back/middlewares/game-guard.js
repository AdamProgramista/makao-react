const { game } = require('../models/game');

const gameGuard = (req, res, next) => {
  const gamePlayersCount = game.players.length;
  if (gamePlayersCount === 0) {
    res.status(401).send('No players yet, please login as first player');
    return;
  }
  next();
}

module.exports = { gameGuard };
