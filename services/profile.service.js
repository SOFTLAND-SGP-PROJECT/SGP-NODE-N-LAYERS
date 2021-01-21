const Service = require("./service");

class ProfileService {

    constructor({ PerfilRepository, ObjetoPerfilRepository, PerfilAsignadoRepository }) {
        this._perfilRepository = PerfilRepository;
        this._objetoPerfilRepository = ObjetoPerfilRepository;
        this._perfilAsignadoRepository = PerfilAsignadoRepository;
    }

    // USR_SGPPEH tabla de cabecera de perfiles
    async CrearPerfilSGP(descrip, avatar, nrocta, userid) {
        return await this._perfilRepository.CrearPerfilSGP(descrip, avatar, nrocta, userid);
    }

    async ActualizacionPerfilSGP(descrip, avatar, codigo, userid) {
        return await this._perfilRepository.ActualizacionPerfilSGP(descrip, avatar, codigo, userid);
    }

    async RecuperacionPerfilSGP(nrocta) {
        return await this._perfilRepository.RecuperacionPerfilSGP(nrocta);
    }
    async getPerfilById(id) {
        return await this._perfilRepository.getPerfilById(id);
    }
    async deletePerfil(nrocta, id) {
        return await this._perfilRepository.deletePerfil(nrocta, id);
    }

    // USR_SGPPEI tabla hija de perfiles
    async CrearObjetoPerfilSGP(perfil, codobj, userid) {
        return await this._objetoPerfilRepository.CrearObjetoPerfilSGP(perfil, codobj, userid);
    }
    async BorrarObjetoPerfilSGP(perfil, codobj, userid) {
        return await this._objetoPerfilRepository.BorrarObjetoPerfilSGP(perfil, codobj, userid);
    }
    async BorrarTodosObjetoPerfilSGP(perfil, codobj, userid) {
        return await this._objetoPerfilRepository.BorrarTodosObjetoPerfilSGP(perfil, codobj, userid);
    }
    async RecuperacionObjetoPerfilSGP(perfil) {
        return await this._objetoPerfilRepository.RecuperacionObjetoPerfilSGP(perfil);
    }
    async RecuperacionObjetoPerfilPorIdSGP(nrocta, sgpuid) {
        return await this._objetoPerfilRepository.RecuperacionObjetoPerfilPorIdSGP(nrocta, sgpuid);
    }

    // USR_SGPCLP tabla de perfiles asignado a usuarios
    async CrearPerfilAsignadoUsuarioSGP(nrocta, sgpuid, perfil, userid) {
        return await this._perfilAsignadoRepository.CrearPerfilAsignadoUsuarioSGP(nrocta, sgpuid, perfil, userid);
    }
    async BorrarPerfilesAsignadosUsuarioSGP(nrocta, sgpuid, perfil) {
        return await this._perfilAsignadoRepository.BorrarPerfilesAsignadosUsuarioSGP(nrocta, sgpuid, perfil);
    }
    async BorrarTodoUsuarioAsignadoPerfilSGP(nrocta, sgpuid, perfil) {
        return await this._perfilAsignadoRepository.BorrarTodoUsuarioAsignadoPerfilSGP(nrocta, sgpuid, perfil);
    }
    async RecuperacionPerfilAsignadoUsuarioSGP(nrocta, sgpuid) {
        return await this._perfilAsignadoRepository.RecuperacionPerfilAsignadoUsuarioSGP(nrocta, sgpuid);
    }

}
module.exports = ProfileService;