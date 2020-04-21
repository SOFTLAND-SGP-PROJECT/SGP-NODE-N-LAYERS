const Service = require("./service");

class ImpactoService extends Service {
  constructor({ ImpactoRepository }) {
    super(ImpactoRepository);
  }

  async getAllWithParams(termino) {
    const entities = await this._entityRepository.getAllWithParams(termino);
    return entities;
  }
}

module.exports = ImpactoService;
