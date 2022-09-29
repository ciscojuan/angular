'use strict'

const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();

api.get('/pruebas', UserController.pruebas);
api.post('/save', UserController.saveUser)

module.exports = api;