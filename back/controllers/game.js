const { Player } =  require('../models/player');
const { game } = require('../models/game');

const join = (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.status(401).send('User undefined');
    return;
  }

  const player = new Player(user);
  game.addPlayer(player);
  res.status(200).send({game, player});
};

module.exports = { join };
