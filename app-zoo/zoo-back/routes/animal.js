'use strict'
const express = require('express');
const AnimalController = require('../controllers/animal');
//middlewares
const mdAuth = require('../middlewares/authenticate')
const api = express.Router();

const multipart = require('connect-multiparty');
const md_uploads = multipart({uploadDir: './uploads/animals'});

api.get('/pruebas-animales', mdAuth.ensureAuth, AnimalController.pruebas);
api.post('/animal', mdAuth.ensureAuth, AnimalController.saveAnimal);
api.get('/animals', AnimalController.getAnimals);


module.exports = api;