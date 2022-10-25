'use strict'
//modules
const fs = require('fs');
const path = require('path'); //rutas de sistema de archivo

//models
const User = require("../models/user");
const Animal = require("../models/animal");
const animal = require('../models/animal');

const pruebas = (req, res) => {
  res.status(200).send({
    message: "Probando el controlador animal y la accion pruebas",
    user: req.user
  });
};

const saveAnimal = (req, res) => {
    //crear objeto animal
    var animal = new Animal();
    //recojer parametros que llegan por post
    var params = req.body;
    if(params.name){
        //asignar valores a cada porpiedad de animal
        animal.name = params.name;
        animal.description = params.description;
        animal.year = params.year;
        animal.image = null;
        animal.user = req.user.sub;
        animal.country = params.country;
        //Guardar animal
        animal.save((err, animalStored) =>{
            if(err){
                res.status(500).send({message: 'error en el servidor'});
            }else{
                if(!animalStored){
                    res.status(404).send({message: 'No se puedo guardar el animal'});
                }else{
                    res.status(200).send({
                        animal: animalStored
                    })
                }
            }
        })
    }else{
        res.status(200).send({message: 'El nombre es obligatorio'})
    }
};

const getAnimals = (err, res) =>{
    //traiga los parametros referenciados de la coleccion respectiva a esta
    animal.find({}).populate({path: 'user'}).exec((err, animals) => {
        if(err){
            res.status(500).send({message: 'Error en la peticion.'})
        }else{
            if(!animals){
                res.status(404).send({message: 'No hay animales para mostrar.'})
            }else{
                res.status(200).send({animals})
            }
        }
    })
}
module.exports = {
    pruebas,
    saveAnimal,
    getAnimals
};