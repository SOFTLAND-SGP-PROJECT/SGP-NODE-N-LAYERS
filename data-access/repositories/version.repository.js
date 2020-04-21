const Repository = require("./repository");

class VersionRepository extends Repository {
    constructor({ db }) {
        super(db, "USR_SPTVER", {
            limit: 50
        });
        this._Op = db.Sequelize.Op
        this._sequelize = db.sequelize;
    }
    getAllWithParams(termino) {
        return this._sequelize
            .query('EXEC SLSPWEB_VersionesHabilitadas :TERMINO', {
                replacements: { TERMINO: termino },
                type: this._sequelize.QueryTypes.SELECT
            });
    }

}

module.exports = VersionRepository;