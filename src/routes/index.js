const expreess = require('express');

const controller = require('../controllers/index');

const routes = expreess.Router();

routes.get('/', controller.index);

module.exports = routes;