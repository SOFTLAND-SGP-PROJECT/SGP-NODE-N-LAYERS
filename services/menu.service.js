const Service = require("./service");

class MenuService extends Service {
    constructor({ MenuRepository }) {
        super(MenuRepository);
        this._entityRepository = MenuRepository;
    }

    // USR_SGPMEH menu 
    async RecuperacionMenuSGP(codigo) {
        return await this._entityRepository.RecuperacionMenuSGP(codigo);
    }
    async CrearMenuSGP(item) {
        return await this._entityRepository.CrearMenuSGP(item);
    }
    async ActualizacionMenuSGP(item, codigo) {
        return await this._entityRepository.ActualizacionMenuSGP(item, codigo);
    }
    async BorrarObjetoMenuSGP(item) {
        return await this._entityRepository.BorrarObjetoMenuSGP(item);
    }
}

module.exports = MenuService;