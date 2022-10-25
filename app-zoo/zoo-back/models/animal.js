'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema= Schema({
    name: String,
    description: String,
    year: Date,
    image: String,
    user: {type: Schema.ObjectId, ref:'User'},
    country: String,
});
module.exports = mongoose.model('Animal', AnimalSchema);