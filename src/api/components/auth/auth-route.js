const express = require('express');
const authController = require('./auth-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);
  route.get('/me', authController.me);
  route.post('/login', authController.login);
  route.post('/register', authController.register);
  route.post('/refresh', authController.refresh);
};
