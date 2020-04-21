const Asignado = require('../Models/asignado');

class AsignadoRepository {
    constructor() {}
    async getAsignadoMail(email) {
        console.log(email);

        return await Asignado.find({ 'email': email }, (err, asignado) => {
            if (err) throw err;
            return asignado;
        });
    }
    async postPerfilAsignado(asignado, nombre) {
        console.log(asignado);
        console.log(nombre);

        var asignado = new Asignado({
            nombre: asignado.codigo,
            email: asignado.mail,
            perfil: nombre
        });
        return await asignado.save((err, asignadoGuardado) => {
            if (err) throw err;
            return asignadoGuardado;
        });
    }
    async deleteAsignadoMail(mail) {

        return await Asignado.deleteOne({ 'email': mail }, (err, asignadoBorrado) => {
            if (err) throw err;
            return asignadoBorrado;
        });
    }
}

module.exports = AsignadoRepository;