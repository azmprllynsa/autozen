const express = require('express');
const user = require('./user');
const inspector = require('./inspector');

const router = express.Router();

router
  .get('/', (req, res) => {
    res.send({
      message: 'Welcome to autoZen',
    });
  })
  .use('/user', user)
  .use('/inspector', inspector);

module.exports = router;
