'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//configurar CORS
const cors = require('cors');
//cargar rutas
const user_routes = require('./routes/user');
const animal_routes = require('./routes/animal');
//middlewares de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


//rutas base
app.use('/api', user_routes);
app.use('/api', animal_routes);

module.exports = app;