const { Router } = require('express');

const user = require('./user.routes');

const routes = new Router();

routes.use('/user', user);

module.exports = routes;
