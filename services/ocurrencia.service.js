const Service = require("./service");

class OcurrenciaService extends Service {
  constructor({ OcurrenciaRepository }) {
    super(OcurrenciaRepository);
  }

  async getAllWithParams(termino) {
    const entities = await this._entityRepository.getAllWithParams(termino);  
    return entities;
  }
}

module.exports = OcurrenciaService;
