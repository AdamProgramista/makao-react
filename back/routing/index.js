const express = require('express');
const { router: gameRouter } = require('./game');
const { router: userRouter } = require('./user');
const router = express.Router();

router
  .use('/game', gameRouter)
  .use('/user', userRouter);

module.exports = { router };
