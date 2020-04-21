const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");


class OcurrenciaController extends Controller {

    constructor({ OcurrenciaService }) {
        super(OcurrenciaService, Models.ocurrencia);
        this._entityMap = Models.ocurrencia;
    }

    async getAllWithParams(req, res) {
        const { termino } = req.params;
        const entities = await this._entityService.getAllWithParams(termino);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }

}

module.exports = OcurrenciaController;