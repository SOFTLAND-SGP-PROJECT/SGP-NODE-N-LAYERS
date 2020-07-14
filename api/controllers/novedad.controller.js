const Controller = require("./controller");

class NovedadController extends Controller {
    constructor({ NovedadService }) {
        super(NovedadService);
    }
    async getNovedadesGeneral(req, res) {
        const { nrocta } = req.params;
        let entity = await this._entityService.getNovedadesGeneral(nrocta)
            .then((novedad) => {
                if ((novedad && novedad.length === 0) || !novedad) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontraron novedades',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: novedad
                });
            }).catch(
                error => {
                    if (error) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error en la conexión con base de datos',
                            errors: error
                        });
                    }
                });
    }
}
module.exports = NovedadController;