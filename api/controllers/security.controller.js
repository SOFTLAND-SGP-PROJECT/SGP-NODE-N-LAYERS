const Controller = require("./controller");

class SecurityController {
    constructor({ Profile }) {
        this._entityBuisness = Profile;
    }
    async getPerfiles(req, res) {
        const entities = await this._entityBuisness.getPerfiles()
            .then(perfiles => {
                if (!perfiles) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No hay perfiles cargados',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: perfiles
                });
            })
            .catch(error => {
                console.log(error);

                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    };
    async getPerfilNombre(req, res) {
        var { nombre } = req.params

        const entities = await this._entityBuisness.getPerfilNombre(nombre)
            .then(perfiles => {
                if (!perfiles) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No hay perfiles cargados',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: perfiles
                });
            })
            .catch(error => {
                console.log(error);

                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    };
    async getAsignadoMail(req, res) {
        var { email } = req.params;
        console.log(email);

        const entities = await this._entityBuisness.getAsignadoMail(email)
            .then(asignado => {
                if (!asignado) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No hay perfiles cargados',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: asignado
                });
            })
            .catch(error => {
                console.log(error);

                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    };
    async postPerfilSeguridad(req, res) {
        var perfil = req.body;
        const entities = await this._entityBuisness.postPerfil(perfil.nombre, perfil.avatar, perfil.asignados, perfil.ruta);
        return res.status(200).json({
            ok: true,
            payload: 'perfilSeguridad'
        });
        // 
        //     .then((perfilSeguridad) => {
        //         if ((perfilSeguridad && perfilSeguridad.length === 0) || !perfilSeguridad) {
        //             return res.status(400).json({
        //                 ok: false,
        //                 message: 'El perfil no se pudo cargar',
        //             });
        //         }
        //         return res.status(201).json({
        //             ok: true,
        //             payload: `Perfil de Seguridad ${perfilSeguridad} cargado con Exito`
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);

        //         return res.status(500).json({
        //             ok: false,
        //             payload: error
        //         });
        //     });
    }
}
module.exports = SecurityController;