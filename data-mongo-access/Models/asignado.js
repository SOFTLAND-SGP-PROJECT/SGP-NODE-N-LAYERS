var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var asignadoSchema = new Schema({
    nombre: { type: String, unique: true, required: [true, 'El nombre es necesario'] },
    email: { type: String },
    perfil: { type: String }

});

module.exports = mongoose.model('asignado', asignadoSchema);