const express = require('express');
const ongController = require('./controllers/ongController');
const activityController = require('./controllers/activityController');
const POAController = require('./controllers/perOngActivityController');
const sessionController = require('./controllers/sessionController');
const { celebrate, segments, Joi } = require('celebrate');

const routes = express.Router();

routes.post('/sessoes', sessionController.index)

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object.keys({
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    cidade: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), ongController.create);

routes.get('/atividades', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), activityController.index);

routes.post('/atividades/nova', celebrate({
  [Segments.HEADERS]: Joit.object({
    authorization: Joi.string().required().length(8),
  }).unknown()
}), celebrate({
  [Segments.BODY]: Joi.object.keys({
    titulo: Joi.string().required(),
    descricao: Joi.string().required(),
    valor: Joi.number().required(),
  })
}), activityController.create);

routes.delete('/atividades/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), activityController.delete);

routes.get('/poa', celebrate({
  [Segments.HEADERS]: Joit.object({
    authorization: Joi.string().required().length(8),
  }).unknown(),
}), POAController.index);


module.exports = routes;
