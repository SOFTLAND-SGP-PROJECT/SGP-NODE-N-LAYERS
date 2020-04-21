const Repository = require("./repository");

class DocumentoRepository extends Repository {
    constructor({ db }) {
        super(db, "USR_SPWEBDOCU", {
            limit: 50
        });
        this._db = db;
        this._sequelize = db.sequelize;
        this._Op = db.Sequelize.Op;
        this.entity = "USR_SPWEBDOCU";
    }
    getDocumentos(nrocta) {
        return this._sequelize
            .query('EXEC SLSPWEB_Documentos :NROCTA', {
                replacements: { NROCTA: nrocta },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
}

module.exports = DocumentoRepository;