const Perfil = require('../Models/perfil');

class PerfilRepository {
    constructor() {

    }
    async getPerfiles() {
        return await Perfil.find({}, (err, perfiles) => {
            if (err) {
                return;
            }
            return perfiles;
        });
    }
    async getPerfilNombre(nombre) {
        return await Perfil.find({ 'nombre': nombre }, (err, perfil) => {
            if (err) throw err;
            return perfil;
        });
    }
    async deletePerfilNombre(nombre) {
        return await Perfil.deleteOne({ 'nombre': nombre }, (err, perfilBorrado) => {
            if (err) throw err;
            return perfilBorrado;
        });
    }
    async postPerfil(nombre, avatar, asignados, menu, ruta) {
        asignados = asignados.map(a => { return { contacto: a.codigo, email: a.mail } });
        ruta = ruta.map(r => { return { ruta: r } });

        console.log(ruta);
        var perfil = new Perfil({
            nombre: nombre,
            avatar: avatar,
            asignados: asignados,
            menu: menu,
            guard: ruta
        });
        return await perfil.save((err, perfilGuardado) => {
            if (err) throw err;
            return perfilGuardado;
        });
    }
}

module.exports = PerfilRepository;