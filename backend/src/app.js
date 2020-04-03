/**
 * Rota: É tudo aquilo que aparece como path 
 * Recruso: Aquilo onde vc quer chegar depois de percorrer o path
 * 
 * localhost:33/users => Rota / Recurso
 */
/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma inforção no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Tudo funciona usando GET, só que é uma tremenda gambiarra
 */
/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação...)
 * Route Params: Parâmetros que indentificam recursos ("/users/:id" tudo aquilo depois de "users/" é route param. No caso, o id do usuário.)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors(
  // origin: http://meuapp.com.br
));
app.use(express.json()); //Converte o JSON em um objeto. Colocar antes das rotas !!
app.use(routes);
app.use(errors());


module.exports = app;
