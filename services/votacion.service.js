const Service = require("./service");

class VotacionService extends Service {
    constructor({ VotacionRepository }) {
        super(VotacionRepository);
    }
    async get(id, nrocta) {
        const entity = await this._entityRepository.get(id, nrocta);
        return entity;
    }
    async putVotoNuevo(nrocta, codigo, body) {
        const entity = await this._entityRepository.putVotoNuevo(nrocta, codigo, body);
        return entity;
    }
}

module.exports = VotacionService;