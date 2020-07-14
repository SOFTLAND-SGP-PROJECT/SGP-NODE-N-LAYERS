const Controller = require("./controller");

class DocumentoController extends Controller {
    constructor({ DocumentoService }) {
        super(DocumentoService);
    }
    async getDocumentos(req, res) {
        const { nrocta } = req.params;
        let entity = await this._entityService.getDocumentos(nrocta)
            .then((documentos) => {
                if ((documentos && documentos.length === 0) || !documentos) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se encontraron documentos',
                    });
                }
                return res.status(200).json({
                    ok: true,
                    payload: documentos
                });
            }).catch(
                error => {
                    console.log(error);
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
module.exports = DocumentoController;