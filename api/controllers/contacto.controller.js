const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");

class ContactoController extends Controller {

    constructor({ ContactoService }) {
        super(ContactoService, Models);
        this._entityMap = Models.contacto;
        this._entityService = ContactoService;
    }
    async getAllWithTwoParams(req, res) {
        const { nrocta } = req.params;
        const { termino } = req.params;
        const entities = await this._entityService.getAllWithTwoParams(nrocta, termino);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithOneParams(req, res) {
        const { nrocta } = req.params;
        const entities = await this._entityService.getAllWithOneParams(nrocta);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async postCrearContacto(req, res) {
        const { nrocta } = req.params;
        const contacto = req.body;
        console.log(contacto);
        await this._entityService.postCrearContacto(nrocta, contacto.nombre, contacto.apelli, contacto.tipsex, contacto.direml, contacto.celula, contacto.enviis, contacto.envife, contacto.conabo, contacto.maihab)
            .then(data => {
                return res.status(200).json({
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
    async putActualizarContacto(req, res) {
        const { nrocta } = req.params;
        const contacto = req.body;
        console.log(contacto);
        await this._entityService.putActualizarContacto(nrocta, contacto.codcon, contacto.mail, contacto.celula, contacto.enviis, contacto.envife, contacto.conabo, contacto.maihab)
            .then(data => {
                return res.status(200).json({
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
    async deleteEliminarContacto(req, res) {
        const { nrocta } = req.params;
        const contacto = req.body;
        console.log(contacto);
        await this._entityService.deleteEliminarContacto(nrocta, contacto.codcon)
            .then(data => {
                return res.status(200).json({
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
}

module.exports = ContactoController;