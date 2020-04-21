const Repository = require("./repository");

class HabilitacionRepository extends Repository {
    constructor({ db }) {
        super(db, "HBTAUI", {
            limit: 50
        });
        this._db = db;
        this._sequelize = db.sequelize;
        this._Op = db.Sequelize.Op;
        this.entity = "HBTAUI";
    }
    postHabilitacion(nrocta, tiphab, noveda, direml, observ, phbpat, company, suc, data) {
        if (phbpat === 'null') phbpat = null;
        console.log(company, suc, data);

        return this._sequelize
            .query('EXEC SLSPWEB_RegistraLicencias :NROCTA, :TIPHAB, :NOVEDA, :DIREML, :OBSERV, :PHBPAT, :COMPANY, :SUCURS, :HABILITACION', {
                replacements: { NROCTA: nrocta, TIPHAB: tiphab, NOVEDA: noveda, DIREML: direml, OBSERV: observ, PHBPAT: phbpat, COMPANY: company, SUCURS: suc, HABILITACION: data },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    getTipoHabilitacion() {
        return this._sequelize
            .query('EXEC SLSPWEB_TipoHabilitacion', {
                replacements: {},
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    getNovedades() {
        return this._sequelize
            .query('EXEC SLSPWEB_ListaNovedades', {
                replacements: {},
                type: this._sequelize.QueryTypes.SELECT
            })
    }
}

module.exports = HabilitacionRepository;