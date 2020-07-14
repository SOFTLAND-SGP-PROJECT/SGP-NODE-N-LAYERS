const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");

class ObjetoController extends Controller {
    constructor({ ObjetoService }) {
        super(ObjetoService, Models);
        this._entityService = ObjetoService
        this._entityMap = Models.objeto;
    }


    async getAllWithParams(req, res) {
        const { modulo } = req.params;
        const { termino } = req.params;

        const entities = await this._entityService.getAllWithParams(modulo, termino)
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getAllWithModulo(req, res) {
        const { modulo } = req.params;
        const entities = await this._entityService.getAllWithModulo(modulo);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }

}

module.exports = ObjetoController;