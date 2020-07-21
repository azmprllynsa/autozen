const express = require('express');

const router = express.Router();

const userController = require('../controllers/UserController');

router
  .post('/register', userController.registerUser)
  .post('/login', userController.loginUser)
  .get('/', userController.getUser);

module.exports = router;
