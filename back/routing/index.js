const express = require('express');
const router = express.Router();
const { router: gameRouter } = require('./game');
const { router: userRouter } = require('./user');

router
  .use('/game', gameRouter)
  .use('/user', userRouter);

module.exports = { router };
