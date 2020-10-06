const Service = require("./service");

class LoginService extends Service {
    constructor({ UsuariosRepository, UsuarioRepository }) {
        super(UsuariosRepository);
        this._usuariosRepository = UsuariosRepository;
        this._usuarioRepository = UsuarioRepository;
    }


    // USR_SGPCLH tabla de cabecera de clientes
    async RecuperacionClienteSGP(nrocta, oldpwd) {
        return await this._usuarioRepository.RecuperacionClienteSGP(nrocta, oldpwd);
    }
    async ActualizacionClienteSGP(nrocta, sgpimp, userid) {
        return await this._usuarioRepository.ActualizacionClienteSGP(nrocta, sgpimp, userid);
    }

    // USR_SGPCLU tabla Hija de contactos
    async RecuperacionUsuarioSGP(usuario) {
        return await this._usuariosRepository.RecuperacionUsuarioSGP(usuario);
    }
    async CrearUsuariosSGP(usuario) {
        return await this._usuariosRepository.CrearUsuariosSGP(usuario);
    }

    async ActualizacionUsuarioSGP(usuario) {
        return await this._usuariosRepository.ActualizacionUsuarioSGP(usuario);
    }
    async getAllWithTwoParams(nrocta, termino) {
        return await this._usuariosRepository.getAllWithTwoParams(nrocta, termino);
    }
    async getAllWithOneParams(nrocta) {
        return await this._usuariosRepository.getAllWithOneParams(nrocta);
    }
    async getUsuarioById(sgpuid) {
        return await this._usuariosRepository.getUsuarioById(sgpuid);
    }
}

module.exports = LoginService;