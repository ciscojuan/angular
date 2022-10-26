'use strict'

exports.isAdmin = (req, res, next) =>{
    if(req.user.role != 'admin'){
        res.status(200).send({message: 'No tienes acceso a esta zona'});
    }
    next();
}