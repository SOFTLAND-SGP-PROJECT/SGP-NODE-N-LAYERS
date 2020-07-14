const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");


class ImpactoController extends Controller {

    constructor({ ImpactoService }) {
        super(ImpactoService, Models.impacto);
        this._entityMap = Models.impacto;
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

module.exports = ImpactoController;