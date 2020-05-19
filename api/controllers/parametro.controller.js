const Controller = require("./controller");

class ParametroController {
    constructor({ ParametroService }) {
        this._entityService = ParametroService;
    }
    async getNumeroPartePublico(req, res) {
        var { tipo } = req.params
        await this._entityService.getNumeroPartePublico(tipo)
            .then(numero => {
                return res.status(200).json({
                    ok: true,
                    payload: numero
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
    async postNumeroPartePublico(req, res) {
        var { tipo, codfor, numero } = req.params;

        await this._entityService.postNumeroPartePublico(tipo, codfor, numero)
            .then(parametro => {
                return res.status(200).json({
                    ok: true,
                    payload: `El numero ${numero} de tipo ${tipo} se encuentra cargado`
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
    async putNumeroPartePublico(req, res) {
        var { numero, tipo, codfor } = req.params;

        await this._entityService.putNumeroPartePublico(numero, tipo, codfor)
            .then(parametro => {
                return res.status(200).json({
                    ok: true,
                    payload: parametro
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
module.exports = ParametroController;