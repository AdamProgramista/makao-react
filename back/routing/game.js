const express = require('express');
const gameController = require('../controllers/game');
const { userAuthenticationGuard } = require('../middlewares/user-authentication-guard');
const router = express.Router();

router.use(userAuthenticationGuard);

router.get('/', gameController.status);
router.post('/join', gameController.join);
router.post('/putcard', gameController.putCard);

module.exports = { router };
