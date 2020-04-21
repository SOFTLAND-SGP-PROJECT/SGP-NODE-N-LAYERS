const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Modulo = require("../models");

class ModuloController extends Controller {

    constructor({ ModuloService }) {
        super(ModuloService, Modulo);
        this._entityMap = Modulo.modulo;
        this._entityService = ModuloService;
    }
    async getAllWithParams(req, res) {
        const { termino, nrocta } = req.params;
        const entities = await this._entityService.getAllWithParams(termino, nrocta);
        jsonMapper(entities, this._entityMap)
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
    async getNovedades(req, res) {
        const entities = await this._entityService.getNovedades()
            .then((data) => {
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }

}

module.exports = ModuloController;