var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var parametroSchema = new Schema({
    tipo: { type: String, required: [true, 'El tipo es necesario'] },
    numero: { type: Number, required: [true, 'El numero es necesario'] },
    codfor: { type: String, required: [true, 'El codigo de formulario es necesario'] },
    codigo: { type: String, required: [true, 'El código es necesario'] }
});

module.exports = mongoose.model('parametro', parametroSchema);