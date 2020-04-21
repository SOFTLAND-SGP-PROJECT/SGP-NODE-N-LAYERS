const Controller = require("./controller");
const Models = require("../models");
const jsonMapper = require('json-mapper-json');


class VotacionController extends Controller {
    constructor({ VotacionService }) {
        super(VotacionService, Models.votacion);
        this._entityMap = Models.votacion;
    }
    async get(req, res) {
        const { id } = req.params;
        const { nrocta } = req.params;

        let entity = await this._entityService.get(id, nrocta)
            .then((data) => {
                if (!data) {
                    return res.status(200).json({
                        ok: true,
                        message: 'No hay votacion cargada',
                        payload: null
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });


    }
    async postVotoNuevo(req, res) {
        const body = req.body;
        const { id } = req.params;
        console.log(body);

        const createdEntity = await this._entityService.create(body)
            .then((voto) => {
                if ((voto && voto.length === 0) || !voto) {
                    console.log('El voto no se pudo cargar');

                    return res.status(400).json({
                        ok: false,
                        message: 'El voto no se pudo cargar',
                    });
                }
                return res.status(201).json({
                    ok: true,
                    payload: `El voto del parte ${voto.USR_SGPLOG_CODIGO} fue cargado con Exito`
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
    async putVotoNuevo(req, res) {
        const body = req.body;
        const { nrocta, codigo } = req.params;
        const createdEntity = await this._entityService.putVotoNuevo(nrocta, codigo, body)
            .then((data) => {
                if (!data) {
                    return res.status(200).json({
                        ok: true,
                        message: 'La votacion no se actualizo',
                        payload: null
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: data
                });
            });
    }
}

module.exports = VotacionController;