var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var perfilSchema = new Schema({
    nombre: { type: String, unique: true, required: [true, 'El nombre es necesario'] },
    avatar: { type: String, required: [true, 'El avatar es necesario'] },
    asignados: [{
        contacto: { type: String, required: [true, 'El contacto es necesario'] },
        email: { type: String },
    }],
    menu: [{
        titulo: { type: String, required: [true, 'La titulo es necesaria'] },
        icono: { type: String, required: [true, 'La icono es necesaria'] },
        url: { type: String },
        sideMenu: [{
            titulo: { type: String },
            icono: { type: String },
            url: { type: String }
        }]
    }],
    guard: [{
        ruta: { type: String, required: [true, 'La ruta es necesaria'] }
    }]
});

module.exports = mongoose.model('perfil', perfilSchema);