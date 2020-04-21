const Service = require("./service");

class DocumentoService extends Service {
    constructor({ DocumentoRepository }) {
        super(DocumentoRepository);
    }
    async getDocumentos(nrocta) {
        return await this._entityRepository.getDocumentos(nrocta);
    }
}

module.exports = DocumentoService;