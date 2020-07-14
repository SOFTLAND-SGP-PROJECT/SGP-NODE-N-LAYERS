const Service = require("./service");

class ContactoService extends Service {
  constructor({ ContactoRepository }) {
    super(ContactoRepository);
    this._entityRepository = ContactoRepository;
  }
  async getAllWithTwoParams(nrocta,termino) {
    const entities = await this._entityRepository.getAllWithTwoParams(nrocta,termino);
    return entities;
  }
  async getAllWithOneParams(nrocta) {
    const entities = await this._entityRepository.getAllWithOneParams(nrocta);
    return entities;
  }
}

module.exports = ContactoService;
