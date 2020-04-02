const express = require('express');
const ongController = require('./controllers/ongController');
const activityController = require('./controllers/activityController');
const POAController = require('./controllers/perOngActivityController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessoes', sessionController.index)

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/atividades', activityController.index);
routes.post('/atividades/nova', activityController.create);
routes.delete('/atividades/:id', activityController.delete);
routes.get('/poa', POAController.index);


module.exports = routes;
