/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const { Router } = require('express');

const SessionController = require('../controllers/SessionController');

const routes = new Router();

routes.post('/', SessionController.login);

module.exports = routes;
