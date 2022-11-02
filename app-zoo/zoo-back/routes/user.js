'use strict'
const express = require('express');
const UserController = require('../controllers/user');
//middlewares
const mdAuth = require('../middlewares/authenticate')
const api = express.Router();

const multipart = require('connect-multiparty');
const md_uploads = multipart({uploadDir: './uploads/users/'});

api.get('/pruebas', mdAuth.ensureAuth, UserController.pruebas);
api.post('/save', UserController.saveUser)
api.post('/login', UserController.login);
api.put('/update/:id',mdAuth.ensureAuth , UserController.updateUser);
api.post('/upload-image-user/:id',[mdAuth.ensureAuth, md_uploads] , UserController.uploadImage);
api.get('/getImage/:imageFile', UserController.getImage)
api.get('/keepers', UserController.keepers)

module.exports = api;