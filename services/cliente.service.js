const Service = require("./service");

class ClienteService extends Service {
    constructor({ ClienteRepository, ContactoRepository }) {
        super(ClienteRepository);
        this._entityRepository = ClienteRepository;
        this._contactoRepository = ContactoRepository;
    }
    async getUsuario(nrocta) {
        return await this._entityRepository.getUsuario(nrocta);
    }
    async getUsuarioByNrocta(direml) {
        return await this._contactoRepository.getUsuarioByNrocta(direml);
    }
}

module.exports = ClienteService;