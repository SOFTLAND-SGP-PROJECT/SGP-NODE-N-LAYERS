// const Controller = require("./controller");
// const Models = require("../models");
const path = require('path');
const { rutaPP } = require('../../config/config');
const fs = require('fs');
const { log } = require('console');

class EncuestaController {

    constructor({ EncuestaService }) {
        this._entityService = EncuestaService;
    }

    // Method http GET
    async getEncuestaPorTipo(req, res) {
        const { tipcur } = req.params;

        await this._entityService.getEncuestaPorTipo(tipcur)
            .then((data) => {
                console.log(data);
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

    // Method http POST
    async postRespuestaEncuesta(req, res) {
        const { nrocta, codpro } = req.params;
        const respuesta = req.body;
        console.log(respuesta);

        await this._entityService.postRespuestaEncuesta(respuesta, nrocta, codpro)
            .then((data) => {
                console.log(data);
                return res.status(201).json({
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

    // async postCurso(req, res) {
    //     var asistente = req.body;
    //     const { codigo } = req.params;
    //     await this._entityService.postCurso(codigo, asistente)
    //         .then(data => {
    //             return res.status(201).json({
    //                 ok: true,
    //                 payload: `Curso ${codigo} fue cargado con Exito`
    //             });
    //         })
    //         .catch(error => {
    //             this._logService.postLog('C', 'Alta de curso', error, 'error de conexión', 'admin');
    //             console.log(error);
    //             return res.status(500).json({
    //                 ok: false,
    //                 payload: error
    //             });
    //         });
    // }

    // Method http DELETE
    // async deleteAsistentePorCurso(req, res) {
    //     var { codigo } = req.params;
    //     const asistente = req.body;
    //     console.log(codigo);
    //     console.log(asistente);

    //     await this._entityService.deleteAsistentePorCurso(codigo, asistente)
    //         .then(data => {
    //             return res.status(201).json({
    //                 ok: true,
    //                 payload: `el ${codigo} fue borrado con Exito`
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             return res.status(500).json({
    //                 ok: false,
    //                 payload: error
    //             });
    //         });
    // }

    // Method http PUT 
    // async putRegistrar(req, res) {
    //     var contacto = req.body;
    //     var { codigo, nrocta } = req.params;
    //     console.log(nrocta);

    //     console.log(contacto);
    //     await this._entityService.putRegistrar(codigo, contacto.descrip, contacto.email, nrocta, contacto.fecha)
    //         .then(data => {
    //             return res.status(201).json({
    //                 ok: true,
    //                 payload: `el ${contacto.descrip} fue cargado con Exito`
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             return res.status(500).json({
    //                 ok: false,
    //                 payload: error
    //             });
    //         });
    // }

    //Funciones auxiliares

}
module.exports = EncuestaController;