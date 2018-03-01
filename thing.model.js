const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThingSchema = new Schema({
   n: String
}, {
    collection: 'test_thing'
});


Thing = mongoose.model('Thing', ThingSchema);

module.exports = Thing;
