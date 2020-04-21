const Service = require("./service");

class HabilitacionService extends Service {
    constructor({ HabilitacionRepository }) {
        super(HabilitacionRepository);
    }
    async postHabilitacion(nrocta, tiphab, noveda, direml, observ, phbpat, company, suc, data) {
        return await this._entityRepository.postHabilitacion(nrocta, tiphab, noveda, direml, observ, phbpat, company, suc, data);
    }
    async getTipoHabilitacion() {
        return await this._entityRepository.getTipoHabilitacion();
    }
    async getNovedades() {
        return await this._entityRepository.getNovedades();
    }
}

module.exports = HabilitacionService;