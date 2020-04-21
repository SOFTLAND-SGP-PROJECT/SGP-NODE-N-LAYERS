const Service = require("./service");

class NovedadService extends Service {
  constructor({ NovedadRepository }) {
    super(NovedadRepository);
  }
  async getNovedadesGeneral(nrocta)   {
    return  await this._entityRepository.getNovedadesGeneral(nrocta);
  }
}

module.exports = NovedadService;
