class Login {

    constructor({ LoginService }) {
        this._entityService = LoginService;
    }

    async Login(usuario) {
        return await this._entityService.RecuperacionUsuarioSGP(usuario)
            .then(async data => {
                if (data.length > 0) {
                    return data[0];
                } else {
                    return [];
                    // console.log('No existe contacto, busco si existe en cabecera para ver si es admin ...');
                    // return await this.buscarContactoEnCabeceraAsync(usuario);
                }
            });
    }
    async RecuperacionUsuarioSGP(usuario) {
        return await this._entityService.RecuperacionUsuarioSGP(usuario);
    }
    async CrearUsuariosSGP(usuario) {
        return await this._entityService.CrearUsuariosSGP(usuario);
    }
    async getAllWithTwoParams(nrocta, termino) {
        return await this._entityService.getAllWithTwoParams(nrocta, termino);
    }
    async getAllWithOneParams(nrocta) {
        return await this._entityService.getAllWithOneParams(nrocta);
    }
    async getUsuarioById(sgpuid) {
        return await this._entityService.getUsuarioById(sgpuid);
    }
    async ActualizacionUsuarioSGP(usuario) {
        return await this._entityService.ActualizacionUsuarioSGP(usuario);
    }
    async ActualizacionClienteSGP(nrocta, sgpimp, userid) {
        return await this._entityService.ActualizacionClienteSGP(nrocta, sgpimp, userid);
    }


    // Si no existe en tabla contacto los valores de SGPUID y SGPPWD pueden ser el nrocta y el password viejo
    async buscarContactoEnCabeceraAsync(usuario) {
        return await this._entityService.RecuperacionClienteSGP(usuario.SGPUID, usuario.SGPPWD)
            .then(async usuarioCliente => {
                if (usuarioCliente.length > 0) {
                    console.log('No existe como empresa, entonces debe ser agregado por su admin...');
                    return [];
                }
                /* Si existe como empresa tengo que chequear de que sea el primer contacto
                 *  Creo un contacto pasandole el uid como nrocta para saber si tiene contactos.
                 */
                let checkContactos = {
                    SGPUID: "",
                    NROCTA: usuario.SGPUID
                };
                return await this._entityService.RecuperacionUsuarioSGP(checkContactos)
                    .then(usuarioContacto => {
                        let result = {};
                        if (usuarioContacto.length === 0 || usuarioContacto !== undefined) {
                            console.log("Es el primer contacto que se loguea y se lo habilita como contacto admin por default...");
                            result = {
                                'uid': usuarioCliente[0].USR_SGPCLH_NROCTA,
                                'pwd': usuarioCliente[0].USR_SGPCLH_OLDPWD,
                                'cliente': false,
                                'authorized': true
                            };
                        }
                        // El contacto no es el primer contacto por lo tanto no esta autorizado para ingresar.
                        return result;
                    });

            });
    }

}
module.exports = Login;