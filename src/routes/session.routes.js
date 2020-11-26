const { Router } = require('express');

const SessionController = require('../controllers/SessionController');

const routes = new Router();

routes.post('/', SessionController.login);

module.exports = routes;
