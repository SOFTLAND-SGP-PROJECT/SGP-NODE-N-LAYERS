const Service = require("./service");

class ContactoService extends Service {
    constructor({ ContactoRepository }) {
        super(ContactoRepository);
        this._entityRepository = ContactoRepository;
    }
    async getAllWithTwoParams(nrocta, termino) {
        return await this._entityRepository.getAllWithTwoParams(nrocta, termino);
    }
    async getAllWithOneParams(nrocta) {
        return await this._entityRepository.getAllWithOneParams(nrocta);
    }
    async postCrearContacto(nrocta, nombre, apelli, tipsex, direml, celula, enviis, envife, conabo, maihab, encues) {
        return await this._entityRepository.postCrearContacto(nrocta, nombre, apelli, tipsex, direml, celula, enviis, envife, conabo, maihab, encues);
    }
    async putActualizarContacto(nrocta, codcon, direml, celula, enviis, envife, conabo, maihab) {
        return await this._entityRepository.putActualizarContacto(nrocta, codcon, direml, celula, enviis, envife, conabo, maihab);
    }
    async deleteEliminarContacto(nrocta, codcon) {
        return await this._entityRepository.deleteEliminarContacto(nrocta, codcon);
    }
    async findOneByUid(uid) {
        return await this._entityRepository.findOneByUid(uid);
    }
    async findOneByNrocta(nrocta) {
        return await this._entityRepository.findOneByNrocta(nrocta);
    }
}

module.exports = ContactoService;