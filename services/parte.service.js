const Service = require("./service");

class ParteService extends Service {
    constructor({ ParteRepository }) {
        super(ParteRepository);
    }
    async getParte(nrocta, codfor, nrofor) {
        return await this._entityRepository.getParte(nrocta, codfor, nrofor);
    }
    agregarArchivoOLEOLE(modfor, codfor, nrofor, file) {
        return this._entityRepository.agregarArchivoOLEOLE(modfor, codfor, nrofor, file);
    }
    async postParte(nrocta, versio, userid, descrp, adjunt, modobj, codobj, codimp, codocu, codsub, tipcla) {
        return await this._entityRepository.postParte(nrocta, versio, userid, descrp, adjunt, modobj, codobj, codimp, codocu, codsub, tipcla);
    }
    async putCambioEstado(nrocta, codfor, nrofor, estnew, asgare, asgres, obscli, adjunt, valora) {
        return await this._entityRepository.putCambioEstado(nrocta, codfor, nrofor, estnew, asgare, asgres, obscli, adjunt, valora);
    }
    async getPartes(nrocta, limit, pendingOnly) {
        return await this._entityRepository.getPartes(nrocta, limit, pendingOnly);
    }
    async getPartesCount(nrocta) {
        return await this._entityRepository.getPartesCount(nrocta);
    }
    async getAccionesParte(nrocta, codfor, nrofor) {
        return await this._entityRepository.getAccionesParte(nrocta, codfor, nrofor);
    }
    async getEstadosDeParte(nrocta) {
        return await this._entityRepository.getEstadosDeParte(nrocta);
    }
    async getHistoriaParte(nrocta, codfor, nrofor) {
        return await this._entityRepository.getHistoriaParte(nrocta, codfor, nrofor);
    }
    async getPartesRelacionados(nrocta, modulo, fechaDesde, fechaHasta, info, numero) {
        const entities = await this._entityRepository.getPartesRelacionados(nrocta, modulo, fechaDesde, fechaHasta, info, numero);
        return entities;
    }
    async getInformantesdePartes(termino) {
        const entities = await this._entityRepository.getInformantesdePartes(termino);
        return entities;
    }
}


module.exports = ParteService;