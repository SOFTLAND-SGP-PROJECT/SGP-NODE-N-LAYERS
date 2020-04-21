const Service = require("./service");

class ModuloService extends Service {
    constructor({ ModuloRepository }) {
        super(ModuloRepository);
        this._entityRepository = ModuloRepository;
    }
    async getAllWithParams(termino, nrocta) {
        return await this._entityRepository.getAllWithParams(termino, nrocta);
    }
    async getNovedades() {
        return await this._entityRepository.getNovedades();
    }
}

module.exports = ModuloService;