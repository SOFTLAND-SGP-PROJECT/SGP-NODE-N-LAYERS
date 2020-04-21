const Service = require("./service");

class ObjetoService extends Service {
  constructor({ ObjetoRepository }) {
    super(ObjetoRepository);
    this._entityRepository = ObjetoRepository;
  }

  async getAllWithParams(modulo,termino) {
    const entities = await this._entityRepository.getAllWithParams(modulo,termino);
    return entities;
  }
  async getAllWithModulo(modulo) {
    const entities = await this._entityRepository.getAllWithModulo(modulo);
    return entities;
  }
}

module.exports = ObjetoService;
