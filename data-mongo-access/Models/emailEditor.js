var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var emailEditorSchema = new Schema({
    codigo: { type: String, unique: true, required: [true, 'El código es necesario'] },
    descripcion: { type: String },
    contenido: { type: String }

});

module.exports = mongoose.model('emailEditor', emailEditorSchema);