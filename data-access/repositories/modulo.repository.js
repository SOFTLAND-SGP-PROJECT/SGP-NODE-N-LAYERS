const Repository = require("./repository");

class ModuloRepository extends Repository {
    constructor({ db }) {
        super(db, "USR_SPTERH", "HBTMOD");
        this._db = db;
        this._sequelize = db.sequelize;
        this._Op = db.Sequelize.Op
        this.entity = "USR_SPTERH";
        this.entityNovedades = "HBTMOD";

    }
    getAllWithParams(termino, nrocta) {
        if (termino == 'null') termino = null;

        return this._sequelize
            .query('EXEC SLSPWEB_ModuloHabilitados :NROCTA , :TERMINO', {
                replacements: { NROCTA: nrocta, TERMINO: termino },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    getNovedades() {
        const Op = this._Op;
        return this._db[this.entityNovedades]
            .findAll({
                where: { HBTMOD_ESNOVE: 'S' },
                order: [
                    ['HBTMOD_DESCRP', 'DESC']
                ]
            });
    }
}

module.exports = ModuloRepository;