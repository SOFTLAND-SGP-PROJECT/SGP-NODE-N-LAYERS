// const Controller = require("./controller");
// const Models = require("../models");
const path = require('path');
const { rutaPP } = require('../../config/config');
const { response } = require('express');
const fs = require('fs');

class EmailEditorController {

    constructor({ EmailEditorService }) {
        this._entityService = EmailEditorService;
    }

    // Method http GET
    async getEmailEditorByCodigo(req, res = response) {
        var { codigo } = req.params;
        return await this._entityService.getEmailEditorByCodigo(codigo)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
    async getAllEmailEditor(req, res = response) {
        return this._entityService.getAllEmailEditor()
            .then((data) => {
                res.status(200).json({
                    ok: true,
                    payload: data
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }

    // Method http PUT 
    async putEmailEditor(req, res = response) {
        var email = req.body;
        return await this._entityService.putEmailEditor(email)
            .then(email => {
                return res.status(201).json({
                    ok: true,
                    payload: `el ${email.codigo} fue cargado con Exito`
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }

    // Method http POST
    async postEmailEditor(req, res = response) {
        var email = req.body;
        return this._entityService.postEmailEditor(email)
            .then(email => {
                return res.status(201).json({
                    ok: true,
                    payload: `Email fue creado con Exito`
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }

    // Method http DELETE 
    async deleteEmailEditorByCodigo(codigo) {
        var { codigo } = req.params;
        return this._entityService.deleteEmailEditorByCodigo(codigo)
            .then(email => {
                return res.status(201).json({
                    ok: true,
                    payload: `el ${email.codigo} fue borrado con Exito`
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    payload: error
                });
            });
    }
}
module.exports = EmailEditorController;