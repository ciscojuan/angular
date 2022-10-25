"use strict";
//modules
const bcrypt = require("bcrypt-nodejs");
const user = require("../models/user");
const fs = require('fs');
const path = require('path'); //rutas de sistema de archivo

//services
const jwt = require('../services/jwt')
//models
const User = require("../models/user");
//const { exists } = require("../models/user");

const pruebas = (req, res) => {
  res.status(200).send({
    message: "Probando el controlador usuario y la accion pruebas",
    user: req.user
  });
};

const saveUser = (req, res) => {
  //create user object()
  let user = new User();

  //get request params
  let params = req.body;

  //validate and set data user into user object
  if (params.password && params.name && params.surname && params.email) {
    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = params.role;
    user.country = params.country;
    user.image = params.image;

    //Check user haven't been created
    User.findOne({ email: user.email.toLowerCase() }, (err, issetUser) => {
      if (err) {
        res.status(500).send({ message: "error comprobando el usuario" });
      } else {
        if (!issetUser) {
          //cypher password
          bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;

            //save user into db
            user.save((err, userStored) => {
                if(err){
                    res.status(500).send({ message: "Error al guardar el usuario" });
                }else{
                    if (!userStored){ 
                    res.status(404).send({ message: "No se ha registrado el usuario" });
                    } else {
                    res.status(201).send({message: "Usuario guardado en la Base de Datos ...", user: userStored, });
                    }
                }
                }); 
            });
        } else {
            res.status(200).send({
                message: "El usuario no puede registrarce, ya hay uno con el mismo email.",
            });
        }
      }
    });

  } else {
    res.status(200).send({
      message: "Introduce los datos correctamente para registrar el usuario.",
    });
  }
};

const login = (req, res) => {
    //get user data
    const params = req.body;
    const email = params.email;
    const password = params.password;
    //Check user existed
    User.findOne({email: email.toLowerCase()}, (err, user)=>{
        if(err){
            res.status(500).send({message: 'Error al comprobar el usuario'});
        }else{
            if(user){
                //match password ? login successfull : err
                bcrypt.compare(password, user.password, (err, check) =>{
                    //generate token
                    if(check){ 

                        if(params.gettoken){
                          //get jwat token
                          res.status(200).send({
                            token: jwt.CreateToken(user)
                          });
                        }else{
                          res.status(200).send({user})
                        }

                    }else{
                        res.status(400).send({message: 'email o contraseña no existe'});
                    }
                })
            }else{
                res.status(400).send({message: 'El usuario no existe'});
            }
        }
    });
}

const updateUser = (req, res) =>{
  var user_id = req.params.id;
  var update = req.body;

  if(user_id != req.user.sub){
    res.status(500).send({message: 'No tienes permiso para actualizar el usuario'} )
  }
  
  User.findByIdAndUpdate(user_id, update,{new: true}, (err, userUpdated) =>{
    if(err){
      res.status(500).send({message: 'Error al actualizar usuario'})
    }else{
      if(!userUpdated){
        res.status(404).send({message: 'No se ha podido actualizar el usuario'});
      }else{
        res.status(200).send({user: 'Usuario actualizado con exito'});
      }
    }
  });
}

const uploadImage = (req, res) =>{
  var userId = req.params.id
  var file_name = 'No subido ...';

  if(req.files){
    var file_path = req.files.image.path;
    var file_split = file_path.split('\\');
    var file_name = file_split[2];

    var ext_split = file_name.split('\.');
    var file_ext = ext_split[1].toLowerCase();

    if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'png'){
      
      if(userId != req.user.sub){
        res.status(200).send({message: 'No tiene permiso para actualizar el usuario'});
      }

      User.findByIdAndUpdate(userId, {image: file_name}, {new: true}, (err, userUpdated) =>{
        if(err){
          res.status(500).send({
            message: 'Error al actualizar usuario'
        });
        }else{
          if(!userUpdated){
            res.status(404).send({message: 'No se ha podido actualizar el usuario'});
          }else{
            res.status(200).send({user: userUpdated, image: file_name});
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
  var path_file = './uploads/users/'+imageFile;

  fs.access(path_file, (err)=>{
    if(!err){
      res.status(200).sendFile(path.resolve(path_file));
    }
    else{
      res.status(404).send({message: 'la imagen no existe'})
    }
  })
}

const keepers = (req, res) =>{
  //select * from coleccione WHERE ROLE == 'admin'
  User.find({role:'ROLE_ADMIN'}).exec((err, users) => {
    if(err){
      res.status(500).send({message: 'Error en la peticion'});

    }else{
      if(!users){
        res.status(404).send({message: 'No hay cuidadores para mostrar!'});
        
      }else{
        res.status(200).send({users});
      }
    }
  });
}
module.exports = {
  pruebas,
  saveUser,
  login,
  updateUser,
  uploadImage,
  getImage,
  keepers
};
