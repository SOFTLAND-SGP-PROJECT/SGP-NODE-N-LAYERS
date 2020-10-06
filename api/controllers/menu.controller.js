const { response } = require('express');
const Models = require("../models");

var bcrypt = require('bcryptjs');

class MenuController {

    constructor({ Menu }) {
        this._entityMap = Models.member;
        this._entityBusiness = Menu;
    }
    async menu(req, res = response) {
        await this._entityBusiness.MenuJson()
            .then(async data => {
                if (data === undefined) {
                    return res.status(404).json({
                        ok: false,
                        status: 404,
                        error: 'Usuario o password no valido'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async postItemMenu(req, res = response) {
        var itemMenu = req.body;
        await this._entityBusiness.CrearMenuSGP(itemMenu)
            .then(async data => {
                if (data === undefined) {
                    return res.status(404).json({
                        ok: false,
                        status: 404,
                        error: 'Usuario o password no valido'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async putItemMenu(req, res = response) {
        var itemMenu = req.body;
        var { codigo } = req.params;
        await this._entityBusiness.ActualizacionMenuSGP(itemMenu, codigo)
            .then(async data => {
                if (data === undefined) {
                    return res.status(404).json({
                        ok: false,
                        status: 404,
                        error: 'Usuario o password no valido'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async deleteItemMenu(req, res = response) {
        var itemMenu = req.body;
        await this._entityBusiness.BorrarObjetoMenuSGP(itemMenu)
            .then(async data => {
                if (data === undefined) {
                    return res.status(404).json({
                        ok: false,
                        status: 404,
                        error: 'Usuario o password no valido'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }

}

module.exports = MenuController;