const Service = require("./service");

class ContactoService extends Service {
    constructor({ ContactoRepository }) {
        super(ContactoRepository);
        this._entityRepository = ContactoRepository;
    }
    async getAllWithTwoParams(nrocta, termino) {
        const entities = await this._entityRepository.getAllWithTwoParams(nrocta, termino);
        return entities;
    }
    async getAllWithOneParams(nrocta) {
        const entities = await this._entityRepository.getAllWithOneParams(nrocta);
        return entities;
    }
    async postCrearContacto(nrocta, nombre, apelli, tipsex, direml, celula, enviis, envife, conabo, maihab) {
        const entities = await this._entityRepository.postCrearContacto(nrocta, nombre, apelli, tipsex, direml, celula, enviis, envife, conabo, maihab);
        return entities;
    }
    async putActualizarContacto(nrocta, codcon, direml, celula, enviis, envife, conabo, maihab) {
        const entities = await this._entityRepository.putActualizarContacto(nrocta, codcon, direml, celula, enviis, envife, conabo, maihab);
        return entities;
    }
    async deleteEliminarContacto(nrocta, codcon) {
        const entities = await this._entityRepository.deleteEliminarContacto(nrocta, codcon);
        return entities;
    }
}

module.exports = ContactoService;