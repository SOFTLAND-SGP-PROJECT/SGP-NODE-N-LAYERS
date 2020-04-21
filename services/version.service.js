const Service = require("./service");

class VersionService extends Service {
  constructor({ VersionRepository }) {
    super(VersionRepository);
  }

  async getAllWithParams(termino) {
    const entities = await this._entityRepository.getAllWithParams(termino);  
    return entities;
  }
}

module.exports = VersionService;
