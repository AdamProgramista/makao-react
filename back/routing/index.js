const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const gameController = require('../controllers/game')

router.post('/user/new', userController.login);

router.post('/game/join', gameController.join);

module.exports = { router };
