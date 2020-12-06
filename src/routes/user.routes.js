/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const { Router } = require('express');

const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/general/authMiddleware');
const UserValidate = require('../middlewares/validate/user.validate');

const routes = new Router();

routes.get('/', authMiddleware, UserController.getAll);
routes.get('/:userId', authMiddleware, UserValidate.exists, UserController.getOne);
routes.post('/', UserValidate.store, UserController.store);
routes.delete('/:userId', authMiddleware, UserValidate.exists, UserController.delete);

module.exports = routes;
