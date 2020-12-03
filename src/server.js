/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);
