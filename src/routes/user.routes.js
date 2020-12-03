/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const { Router } = require('express');

const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, UserController.getAll);
routes.get('/:userId', authMiddleware, UserController.getOne);
routes.post('/', UserController.store);
routes.delete('/:userId', authMiddleware, UserController.delete);

module.exports = routes;
