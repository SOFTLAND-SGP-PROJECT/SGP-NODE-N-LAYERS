var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cursoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    cupo: { type: Number, required: [true, 'El cupo es necesario'] },
    codigo: { type: String, unique: true, required: [true, 'El codigo es necesario'] },
    horario: { type: String, required: [true, 'El horario es necesario'] },
    horarios: [{
        lblHorarios: { type: String },
        txtHorarios: { type: String }
    }],
    costo: { type: String, required: [true, 'El costo es necesario'] },
    costos: [{
        lblCostos: { type: String },
        txtCostos: { type: String },
        tachado: { type: Boolean }
    }],
    leyenda: { type: String, required: [true, 'La leyenda es necesaria'] },
    aviso: { type: String, required: [true, 'El aviso es necesario'] },
    tema: { type: String, required: [true, 'El tema es necesario'] },
    temas: [{
        item: { type: String }
    }],
    requisitos: [{
        item: { type: String }
    }],
    fecha: { type: Date, required: [true, 'La fecha es necesaria'] },
    imagen: { type: String },
    archivo: { type: String }
});

module.exports = mongoose.model('curso', cursoSchema);