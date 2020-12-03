const { Router } = require('express');

const UserCardController = require('../controllers/UserCardController');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, UserCardController.getAll);
routes.get('/:userCardId', authMiddleware, UserCardController.getOne);
routes.post('/', UserCardController.store);
routes.delete('/:userCardId', authMiddleware, UserCardController.delete);

module.exports = routes;
