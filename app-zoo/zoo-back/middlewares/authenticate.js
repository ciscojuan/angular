'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'p0lyOnym.480rt3d.c0n4r14l.mU5h3d.081t5.p1rl5.m1cr06r4Ph.Sk3ld3r5.M3l0n5.k4pOk';

exports.ensureAuth = (req, res, next) => {
    if(!req.headers.authorization){
        res.status(403).send({
            message: 'La peticion no tiene la cabecera de authenticacion'
        })
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try{
        var payload = jwt.decode(token, secret);

        if(payload.exp_date <= moment().unix()){
            return res.status(401).send({message: 'El token ha expirado'
        });
        }
    }catch(ex){
        return res.status(404).send({ message: 'El Token no es valido' })
    }

    req.user = payload;

    next();
}
