'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cargar rutas
const user_routes = require('./routes/user');
const animal_routes = require('./routes/animal');
//middlewares de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas base
app.use('/api', user_routes);
app.use('/api', animal_routes);

module.exports = app;