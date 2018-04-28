const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game');
const { userAuthenticationGuard } = require('../middlewares/user-authentication-guard');

router.use(userAuthenticationGuard);

router.get('/', gameController.status);
router.post('/join', gameController.join);

module.exports = { router };
