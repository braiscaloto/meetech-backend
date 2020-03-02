'use strict';

const express = require('express');
const login = require('../controllers/auth/auth-login-controller');

const router = express.Router();

router.post('/auth', login);
router.get('/auth', (req, res) => {
  res.send('Hello Heroku');
});

module.exports = router;
