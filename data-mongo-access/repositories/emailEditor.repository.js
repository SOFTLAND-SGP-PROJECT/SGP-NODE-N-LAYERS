const EmailEditor = require('../Models/emailEditor');

class EmailEditorRepository {
    constructor() {}

    async getEmailEditorByCodigo(codigo) {
        // console.log(codigo);

        return await EmailEditor.find({ 'codigo': codigo.toUpperCase() }, (err, emailEncontrado) => {
            if (err) throw err;
            return emailEncontrado;
        });
    }
    async getAllEmailEditor() {
        console.log('hola');

        return await EmailEditor.find({}, (err, emailEncontrado) => {
            if (err) throw err;
            return emailEncontrado;
        });
    }
    async putEmailEditor(email) {

        return await EmailEditor.findOne({
                codigo: email.codigo
            })
            .then((emailEditor) => {
                this.filtro(emailEditor.codigo, email.codigo);
                this.filtro(emailEditor.descripcion, email.descripcion);
                this.filtro(emailEditor.contenido, email.contenido);
                emailEditor
                    .save((err, emailModificado) => {
                        if (err) throw err;
                        return emailModificado;
                    });
            });
    }
    async postEmailEditor(email) {

        console.log(email);

        var emailEditor = new EmailEditor({
            codigo: email.codigo,
            descripcion: email.descripcion,
            contenido: email.contenido
        });
        return await emailEditor.save((err, emailGuardado) => {
            if (err) throw err;
            return emailGuardado;
        });
    }
    async deleteEmailEditorByCodigo(codigo) {

        return await EmailEditor.deleteOne({ 'codigo': codigo }, (err, emailBorrado) => {
            if (err) throw err;
            return emailBorrado;
        });
    }
    filtro(field, value) {
        if (value) {
            field = value;
        }
    }
}

module.exports = EmailEditorRepository;