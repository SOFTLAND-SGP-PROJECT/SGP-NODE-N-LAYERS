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
}

module.exports = ContactoController;