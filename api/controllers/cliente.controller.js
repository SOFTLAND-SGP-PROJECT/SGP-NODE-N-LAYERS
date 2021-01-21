const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");

class ClienteController extends Controller {

    constructor({ ClienteService }) {
        super(ClienteService, Models);
        this._entityMap = Models.usuario;
        this._entityService = ClienteService;
    }
    async getUsuario(req, res) {
        const { id } = req.params;
        const entities = await this._entityService.getUsuario(id);
        jsonMapper(entities, this._entityMap)
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
    async getUsuarioByNrocta(req, res) {
        const { direml } = req.params;
        return await this._entityService.getUsuarioByNrocta(direml)
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
}
module.exports = ClienteController;