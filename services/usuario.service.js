const Service = require("./service");

class UsuarioService extends Service {
  constructor({ UsuarioRepository }) {
    super(UsuarioRepository);
    this._entityRepository = UsuarioRepository;
  }
  async getUsuario(nrocta) {
    const entities = await this._entityRepository.getUsuario(nrocta);
    return entities;
  }
}

module.exports = UsuarioService;
