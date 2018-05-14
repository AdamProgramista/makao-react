const express = require('express');
const gameController = require('../controllers/game');
const { userAuthenticationGuard } = require('../middlewares/user-authentication-guard');
const { gameGuard } = require('../middlewares/game-guard');
const { turnGuard } = require('../middlewares/turn-guard');
const router = express.Router();

router.use(userAuthenticationGuard);
router.post('/join', gameController.join);
router.use(gameGuard);
router.get('/', gameController.status);
router.use(turnGuard);
router.post('/put-card', gameController.putCard);
router.post('/pull-card', gameController.pullCard);

module.exports = { router };
