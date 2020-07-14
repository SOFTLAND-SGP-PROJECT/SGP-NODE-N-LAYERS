class ParametroService {
    constructor({ LogRepository }) {
            this._logRepository = LogRepository;
        }
        // servicios parametros
    async postLog(tipo, nombre, descripcion, proceso, usuario) {
        return await this._logRepository.postLog(tipo, nombre, descripcion, proceso, usuario);
    }
}

module.exports = ParametroService;