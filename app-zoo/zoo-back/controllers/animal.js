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

const getAnimals = (req, res) =>{
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
};

const getAnimal = (req, res) =>{
    var animalId = req.params.id; //recojer parametro ingresado por la URL

    animal.findById(animalId).populate({path: 'user'}).exec((err, animal) =>{
        if(err){
            res.status(500).send({message: 'Error al hacer en la peticion'});
        }else{
            if(!animal){
                res.status(404).send({message: 'No se encontro el animal.'})
            }else{
                res.status(200).send({animal})            
            }

        }
    });
};

const updateAnimal = (req, res)=>{
    var animalId = req.params.id;
    var animalData = req.body;

    animal.findByIdAndUpdate(animalId, animalData, {new: true}, (err, animalUpdated)=>{
        if(err){
            res.status(500).send({message: 'Error en la peticion.'})
        }else{
            if(!animalUpdated){
                res.status(404).send({message: 'No se pudo actualizar el animal.'})
            }else{
                res.status(200).send({animal: animalUpdated}) 
            }
        }
    });
};

const uploadImage = (req, res) =>{
    var animalId = req.params.id
    var file_name = 'No subido ...';
  
    if(req.files){
      var file_path = req.files.image.path;
      var file_split = file_path.split('\\');
      var file_name = file_split[2];
  
      var ext_split = file_name.split('\.');
      var file_ext = ext_split[1].toLowerCase();
  
      if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'png'){
        
        /* if(userId != req.user.sub){
          res.status(200).send({message: 'No tiene permiso para actualizar el usuario'});
        } */
  
        animal.findByIdAndUpdate(animalId, {image: file_name}, {new: true}, (err, animalUpdated) =>{
          if(err){
            res.status(500).send({
              message: 'Error al actualizar animal'
          });
          }else{
            if(!animalUpdated){
              res.status(404).send({message: 'No se ha podido actualizar el animal'});
            }else{
              res.status(200).send({animal: animalUpdated, image: file_name});
            }
          }
        });
        
      }else{
        fs.unlink(file_path, (err) =>{
          if(err){
            res.status(200).send({message: 'Formato no valido y fichero no borrado...'})
          }else{
            res.status(200).send({message: 'Formato no valido ...'})
          }
        });
      }
    }else{
      res.status(200).send({message: 'Imagen no cargada ...'})
    }
    
  }
  
  const getImage = (req, res) =>{
    var imageFile = req.params.imageFile;
    var path_file = './uploads/animals/'+imageFile;
  
    fs.access(path_file, (err)=>{
      if(!err){
        res.status(200).sendFile(path.resolve(path_file));
      }
      else{
        res.status(404).send({message: 'la imagen no existe'})
      }
    })
  };

const removeAnimal = (req, res) =>{
    var animalId = req.params.id;
    console.log(animalId);
    animal.findByIdAndRemove(animalId, (err, animalRemoved) =>{
        if(err){
            res.statu(500).send({message: 'Error en la Peticion.'})
        }else{
            if(!animalRemoved){
                res.status(404).send({message: 'No se encontro al animal.'})
            }else{
                res.status(200).send({
                    message: 'Animal borrado con exito.',
                    animal: animalRemoved
                })
            }
        }
    });
};
  
  
module.exports = {
    pruebas,
    saveAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    uploadImage,
    getImage,
    removeAnimal
};