const { response } = require('express');
const Models = require("../models");
const { generarJWT } = require("../helpers/jwt.helper");
const jsonMapper = require("json-mapper-json/lib/json-mapper");
var bcrypt = require('bcryptjs');

class LoginNewController {

    constructor({ Login }) {
        this._entityMap = Models.usuarioSGP;
        this._entityBusiness = Login;
    }
    async login(req, res = response) {
        var usuario = req.body;
        var validPassword = false;
        await this._entityBusiness.Login(usuario)
            .then(async data => {
                if (!data) {
                    return res.status(404).json({
                        ok: false,
                        status: 404,
                        error: 'Usuario o password no valido'
                    });
                }
                // if (data.authorized == false) {
                //     return res.status(401).json({
                //         ok: false,
                //         status: 401,
                //         error: 'Solicite ingreso a su administrador de sistema'
                //     });
                // }

                // if (data.authorized && data.cliente == false) {
                //     return await this.validationAndTokenTemporaryAsync(data, res);
                // }

                if (data.USR_SGPCLU_SGPPWD) {
                    validPassword = bcrypt.compareSync(usuario.SGPPWD, data.USR_SGPCLU_SGPPWD);
                }


                if (!validPassword) {
                    return res.status(400).json({
                        ok: false,
                        status: 404,
                        error: 'usuario o password no valido'
                    });
                }
                return await this.validationAndTokenAsync(data, res);
            })
            .catch(error => {
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async getUsuarioSGP(req, res = response) {
        var usuario = req.body;
        await this._entityBusiness.RecuperacionUsuarioSGP(usuario)
            .then(data => {
                if (data === undefined || data.length === 0) {
                    return res.status(200).json({
                        ok: false,
                        status: 200,
                        error: 'No hay usuario encontrados'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data,
                });
            })
            .catch(error => {
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async getAllWithTwoParams(req, res) {
        const { nrocta } = req.params;
        const { termino } = req.params;
        const entities = await this._entityBusiness.getAllWithTwoParams(nrocta, termino);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getUsuarioById(req, res = response) {
        const { sgpuid } = req.params;
        console.log(sgpuid);
        return await this._entityBusiness.getUsuarioById(sgpuid)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithOneParams(req, res) {
        const { nrocta } = req.params;
        const entities = await this._entityBusiness.getAllWithOneParams(nrocta);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async CrearUsuariosSGP(req, res = response) {
        var usuario = req.body;
        const salt = bcrypt.genSaltSync();
        usuario.SGPPWD = bcrypt.hashSync(usuario.SGPPWD, salt);
        return await this._entityBusiness.CrearUsuariosSGP(usuario)
            .then(data => {
                // console.log(data);
                return res.status(200).json({
                    ok: true,
                    payload: data,
                });
            })
            .catch(error => {
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async ActualizarUsuarioSGP(req, res = response) {
        var usuario = req.body;
        const salt = bcrypt.genSaltSync();
        usuario.SGPPWD = bcrypt.hashSync(usuario.SGPPWD, salt);
        return await this._entityBusiness.ActualizacionUsuarioSGP(usuario)
            .then(data => {
                // console.log(data);
                return res.status(200).json({
                    ok: true,
                    payload: data,
                });
            })
            .catch(error => {
                res.status(500).json({
                    ok: false,
                    error: error
                });
            });
    }
    async validationAndTokenAsync(data, res = response) {
        const token = await generarJWT(data.USR_SGPCLU_SGPUID, '12h');
        return res.status(200).json({
            ok: true,
            status: 200,
            payload: {
                token,
                username: (data.USR_SGPCLU_NROCTA).toUpperCase(),
                empresa: {
                    name: (data.USR_SGPCLH_NROCTA).toUpperCase(),
                    logo: data.USR_SGPCLH_SGPIMG
                },
                lastLogin: data.USR_SGPCLU_SGPLOG,
                uid: data.USR_SGPCLU_SGPUID,
                email: data.USR_SGPCLU_SGPUID,
                image: data.USR_SGPCLU_SGPIMG
            },
            error: null
        });

    }
    async validationAndTokenTemporaryAsync(data, res = response) {
        const token = await generarJWT(data.USR_SGPCLU_SGPUID, 60 * 5);
        res.setHeader(token, token)
        return res.status(203).json({
            ok: false,
            status: 203,
            token,
            uid: data.uid,
            payload: 'Es el primer contacto y debe completar el formulario con permisos administrador',
            error: null
        });
    }
    async ActualizacionClienteSGP(req, res = response) {
        const cliente = req.body;
        const { nrocta } = req.params;
        return await this._entityBusiness.ActualizacionClienteSGP(nrocta, cliente.SGPIMG, cliente.USERID)
            .then(data => {
                // console.log(data);
                return res.status(200).json({
                    ok: true,
                    payload: data,
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

module.exports = LoginNewController;