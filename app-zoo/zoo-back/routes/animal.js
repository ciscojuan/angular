'use strict'
const express = require('express');
const AnimalController = require('../controllers/animal');
//middlewares
const mdAuth = require('../middlewares/authenticate')
const mdAdmin = require('../middlewares/isAdmin');
const api = express.Router();

const multipart = require('connect-multiparty');
const md_uploads = multipart({uploadDir: './uploads/animals'});

api.get('/pruebas-animales', mdAuth.ensureAuth, AnimalController.pruebas);
api.post('/animal',[/* mdAdmin.isAdmin, */  mdAuth.ensureAuth], AnimalController.saveAnimal);
api.get('/animals', AnimalController.getAnimals);
api.get('/getAnimal/:id', AnimalController.getAnimal)
api.put('/animal/:id', mdAuth.ensureAuth, AnimalController.updateAnimal);
api.post('/upload-image-animal/:id',[mdAuth.ensureAuth, md_uploads] , AnimalController.uploadImage);
api.get('/getImage-animal/:imageFile', AnimalController.getImage);
api.delete('/animal/:id',  mdAuth.ensureAuth, AnimalController.removeAnimal);



module.exports = api;