const { game } = require('../models/game');

const gameGuard = (req, res, next) => {
  const gamePlayers = game.players.length;
  if (gamePlayers <= 0) {
    res.status(401).send("No players jet, please login as first player");
    return;
  }
  next();
}

module.exports = { gameGuard };
