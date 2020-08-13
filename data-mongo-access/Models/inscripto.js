var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var inscriptoSchema = new Schema({
    codigo: { type: String, required: [true, 'Codigo es necesario'] },
    nrocta: { type: String, required: [true, 'nrocta es necesario'] },
    contacto: { type: String, required: [true, 'Contacto es necesario'] },
    email: { type: String, required: [true, 'Email es necesario'] },
    fecha: { type: Date, required: [true, 'fecha es necesario'] },
    debaja: { type: String, required: [true, 'Debaja es necesario'] }
});

module.exports = mongoose.model('inscripto', inscriptoSchema);