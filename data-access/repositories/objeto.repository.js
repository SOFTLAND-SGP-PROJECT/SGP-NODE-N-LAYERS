const Repository = require("./repository");


class ObjetoRepository extends Repository {
    constructor({ db }) {
        super(db, "USR_SPTERH");
        this._db = db;
        this._sequelize = db.sequelize;
        this._Op = db.Sequelize.Op;
        this.entity = "USR_SPTERH";
    }

    getAllWithParams(modulo, termino) {
        return this._sequelize
            .query('EXEC SLSPWEB_ObejtosModel :MODULO , :TERMINO', {
                replacements: { MODULO: modulo, TERMINO: termino },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
}
module.exports = ObjetoRepository;