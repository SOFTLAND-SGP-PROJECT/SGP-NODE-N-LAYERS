// const Service = require("./service");

class SecurityService {
    constructor({ PerfilRepository, AsignadoRepository }) {
        this._perfilRepository = PerfilRepository;
        this._asignadoRepository = AsignadoRepository;
    }


    // servicios perfiles
    async getPerfiles() {
        return await this._perfilRepository.getPerfiles();
    }
    async postPerfil(nombre, avatar, asignados, menu, ruta) {
        return await this._perfilRepository.postPerfil(nombre, avatar, asignados, menu, ruta);
    }
    async getPerfilNombre(nombre) {
        return await this._perfilRepository.getPerfilNombre(nombre);
    }


    // servicios asignados
    async deleteAsignadoMail(mail) {
        await this._asignadoRepository.deleteAsignadoMail(mail);
    }

    async getAsignadoMail(email) {
        return await this._asignadoRepository.getAsignadoMail(email);
    }
    async postPerfilAsignado(asignados, nombre) {
        for (let asignado of asignados) {
            await this._asignadoRepository.deleteAsignadoMail(asignado.mail);
            await this._asignadoRepository.postPerfilAsignado(asignado, nombre);
        }

    }


}

module.exports = SecurityService;