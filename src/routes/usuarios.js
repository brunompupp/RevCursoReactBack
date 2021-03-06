const express = require('express');

const controller = require('../controllers/usuarios');

const routes = express.Router();


routes.get('/', controller.index);

routes.get('/:id', controller.store);

routes.post('/', controller.create);

routes.put('/:id', controller.update);

routes.delete('/:id', controller.delete);


module.exports = routes;