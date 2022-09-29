'use strict'
const mongoose = require('mongoose');
const app = require('./app.js');
const port = process.env.PORT || 3789

mongoose.connect('mongodb://localhost:27017/zoo', (err, res) =>{
    if(err){
        throw err;
    }else{
        console.log('Conexion a la base de datos exitosa !!!');
        app.listen(port, ()=>{
            console.log('El servidor local con node y express estan funcionando en el puerto', port)
        });
    }
});