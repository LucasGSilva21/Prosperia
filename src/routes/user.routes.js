const { Router } = require('express');

const UserController = require('../controllers/UserController');

const routes = new Router();

routes.get('/', UserController.getAll);
routes.get('/:userId', UserController.getOne);
routes.post('/', UserController.store);
routes.delete('/:userId', UserController.delete);

module.exports = routes;
