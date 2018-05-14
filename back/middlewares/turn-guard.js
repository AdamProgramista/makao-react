const { game } = require('../models/game');

const turnGuard = (req, res, next) => {
  const gamePlayers = game.players.length;
  if (gamePlayers === 1) {
    res.status(401).send("Please wait for secound player to start game");
    return;
  }
  next();
}

module.exports = { turnGuard };
