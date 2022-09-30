'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const passwd = 'p0lyOnym.480rt3d.c0n4r14l.mU5h3d.081t5.p1rl5.m1cr06r4Ph.Sk3ld3r5.M3l0n5.k4pOk';

exports.CreateToken = (user) =>{
    var payload = {
        sub: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        role: user.role,
        image: user.image,
        country: user.country,
        create_date: moment().unix(),
        exp_date: moment().add(30, 'days').unix
    };
    return jwt.encode(payload, passwd);
}