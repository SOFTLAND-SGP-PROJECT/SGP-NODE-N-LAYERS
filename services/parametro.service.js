class ParametroService {
    constructor({ ParametroRepository }) {
        this._parametroRepository = ParametroRepository;
    }


    // servicios parametros
    async getNumeroPartePublico(tipo) {
        return await this._parametroRepository.getNumeroPartePublico(tipo);
    }
    async postNumeroPartePublico(tipo, codfor, numero) {
        return await this._parametroRepository.postNumeroPartePublico(tipo, codfor, numero);
    }
    async putNumeroPartePublico(numero, tipo, codfor) {
        return await this._parametroRepository.putNumeroPartePublico(numero, tipo, codfor);
    }
}

module.exports = ParametroService;