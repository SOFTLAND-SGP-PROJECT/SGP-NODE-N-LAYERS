const Service = require("./service");

class PartePublicoService extends Service {
    constructor({ PartePublicoRepository }) {
        super(PartePublicoRepository);
    }

    async postParte(parte) {
        const entities = await this._entityRepository.postParte(parte);
        return entities;
    }
    async get(tippub, codigo) {
        const entities = await this._entityRepository.get(tippub, codigo);
        return entities;
    }
    async getAllWithTermino(tippub, codigo) {
        const entities = await this._entityRepository.getAllWithTermino(tippub, codigo);
        return entities;
    }
    async getAllWithTipo(tippub) {
        const entities = await this._entityRepository.getAllWithTipo(tippub);
        return entities;
    }
    async getSomeWithFilters(tippub, terminos) {
        return await this._entityRepository.getSomeWithFilters(tippub, terminos);
    }
    async getAllWithSearchFilters(tippub, modulo, objeto, version, termino, offset, limit) {
        const entities = await this._entityRepository.getAllWithSearchFilters(tippub, modulo, objeto, version, termino, offset, limit);
        return entities;
    }
    async deleteParte(id) {
        const entities = await this._entityRepository.deleteParte(id);
        return entities;
    }

}

module.exports = PartePublicoService;