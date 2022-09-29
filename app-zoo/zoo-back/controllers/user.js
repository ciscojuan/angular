'use strict'
//modules
const bcrypt = require('bcrypt-nodejs');

//models
const User = require('../models/user');


const pruebas = (req, res)=>{
    res.status(200).send({
        message: 'Probando el contrrolador usuario y la accion pruebas'
    });
}

const saveUser = (req, res) => {
    
    //create user object()
    let user = new User();

    //get request params
    let params = req.body;

    //validate and set data user into user object
    if(params.password && params.name &&params.surname && params.email){
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.role = params.role;
        user.country = params.country;
        user.image = params.image;

        //cypher password
        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;

            //save user into db
            user.save((err, userStored) => {
                if(err){
                    res.status(500).send({ message: 'Error al guardar el usuario'});
                }
                else{
                    if(!userStored){
                        res.status(404).send({message: 'No se ha registrado el usuario'})
                    }else{
                        res.status(201).send({
                            message: 'Usuario guardado en la Base de Datos ...',
                            user: userStored
                        })
                    }
                }
            })
        })
    }else{
        res.status(200).send({
            message: 'Introduce los datos correctamente para registrar el usuario.',
            params: params
        })
    }


}
module.exports = {
    pruebas,
    saveUser
}