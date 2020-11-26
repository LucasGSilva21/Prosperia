const { Router } = require('express');

const user = require('./user.routes');
const session = require('./session.routes');

const routes = new Router();

routes.use('/user', user);
routes.use('/auth', session);

module.exports = routes;
