const { response } = require('express');

class SecurityController {
    constructor({ Profile }) {
        this._entityBuisness = Profile;
    }
    async getPerfiles(req, res = response) {
        const { nrocta } = req.params;
        return await this._entityBuisness.getPerfiles(nrocta)
            .then(perfiles => {
                if (perfiles.length === 0) {
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
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getPerfilById(req, res = response) {
        var { id } = req.params
        await this._entityBuisness.getPerfilById(id)
            .then(perfiles => {
                console.log(perfiles);
                return res.status(200).json({
                    ok: true,
                    payload: perfiles
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getPerfilesAsignados(req, res = response) {
        var { nrocta, id } = req.params;
        await this._entityBuisness.getPerfilesAsignados(nrocta, id)
            .then((data) => {
                return res.status(201).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getMenu(req, res = response) {
        var perfil = req.body;
        await this._entityBuisness.getMenu(perfil.nrocta, perfil.sgpuid)
            .then((menu) => {
                return res.status(201).json({
                    ok: true,
                    payload: menu
                });
            })
    }
    async postAsignarAdmin(req, res = response) {
        var admin = req.body;
        var { nrocta } = req.params;
        await this._entityBuisness.postAsignarAdmin(nrocta, admin.SGPUID, admin.PERFIL, admin.USERID)
            .then(() => {
                return res.status(201).json({
                    ok: true,
                    payload: 'Perfil de Seguridad cargado con Exito'
                });
            })
    }
    async putPerfilSeguridad(req, res = response) {
        var perfil = req.body;
        var { nrocta } = req.params;
        await this._entityBuisness.putPerfilSeguridad(perfil.descrip, perfil.avatar, nrocta, perfil.ruta, perfil.asignados, perfil.userid, perfil.codigo)
            .then(() => {
                return res.status(201).json({
                    ok: true,
                    payload: 'Perfil de Seguridad cargado con Exito'
                });
            })
    }
    async postPerfilSeguridad(req, res = response) {
        var perfil = req.body;
        var { nrocta } = req.params;
        await this._entityBuisness.postPerfil(perfil.descrip, perfil.avatar, nrocta, perfil.ruta, perfil.asignados, perfil.userid)
            .then(() => {
                return res.status(201).json({
                    ok: true,
                    payload: 'Perfil de Seguridad cargado con Exito'
                });
            })

    }
    async deletePerfilSeguridad(req, res = response) {
        var { nrocta, id } = req.params;
        await this._entityBuisness.deletePerfil(nrocta, id)
            .then(() => {
                return res.status(201).json({
                    ok: true,
                    payload: 'Perfil borrado con exito'
                });
            })
    }
}
module.exports = SecurityController;