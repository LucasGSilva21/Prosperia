const { Router } = require('express');

const CardController = require('../controllers/CardController');
const authMiddleware = require('../middlewares/general/authMiddleware');

const routes = new Router();

routes.get('/', authMiddleware, CardController.getAll);
routes.get('/:cardId', authMiddleware, CardController.getOne);
routes.post('/', authMiddleware, CardController.store);
routes.delete('/:cardId', authMiddleware, CardController.delete);

module.exports = routes;
