const express = require('express');
const router = express.Router();
const userController = require('../controlers/user');

router.post('/user', userController.login);

module.exports = { router };
