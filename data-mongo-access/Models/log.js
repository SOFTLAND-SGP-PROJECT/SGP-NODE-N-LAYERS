var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var logSchema = new Schema({
    tipo: { type: String, required: [true, 'El tipo es necesario'] },
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    descripcion: { type: String, required: [true, 'La descripción es necesaria'] },
    proceso: { type: String, required: [true, 'El proceso es necesario'] },
    usuario: { type: String, required: [true, 'El usuario es necesario'] },
    fecha: { type: Date, required: [true, 'La fecha y hora son necesarias'] }
});

module.exports = mongoose.model('log', logSchema);