const Controller = require("./controller");
const jsonMapper = require('json-mapper-json');
const Models = require("../models");

class UsuarioController extends Controller {

    constructor({ UsuarioService }) {
        super(UsuarioService, Models);
        this._entityMap = Models.usuario;
        this._entityService = UsuarioService;
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
}
module.exports = UsuarioController;