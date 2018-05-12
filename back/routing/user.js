const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/new', userController.login);
router.get('/me', userController.getSessionUser);

module.exports = { router };
