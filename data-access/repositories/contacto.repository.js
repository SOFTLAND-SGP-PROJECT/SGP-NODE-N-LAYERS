const Repository = require("./repository");

class ContactoRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "VTMCLC");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "VTMCLC";
    }
    async findOneByUid(uid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionContactosPorUid :UID', {
                replacements: { UID: uid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async findOneByNrocta(nrocta) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionClientePorNrocta :NROCTA', {
                replacements: { NROCTA: nrocta },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });

    }
    async getAllWithTwoParams(nrocta, termino) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionContactos :NROCTA, :CODCON', {
                replacements: { NROCTA: nrocta, CODCON: termino },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async getUsuarioByNrocta(direml) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionContactos :NROCTA, :CODCON', {
                replacements: { NROCTA: '', CODCON: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            }).then(data => {
                return data.filter(d => d.VTMCLC_DIREML === direml);
            });
    }
    async getAllWithOneParams(nrocta) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionContactos :NROCTA, :CODCON', {
                replacements: { NROCTA: nrocta, CODCON: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async postCrearContacto(nrocta, nombre, apelli, tipsex, direml, celula, enviis, envife, conabo, maihab, encues) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RegistracionContactos :NROCTA, :NOMBRE, :APELLI, :TIPSEX, :DIREML, :CELULA, :ENVIIS, :ENVIFE, :CONABO, :MAIHAB, :ENCUES', {
                replacements: { NROCTA: nrocta, NOMBRE: nombre, APELLI: apelli, TIPSEX: tipsex, DIREML: direml, CELULA: celula, ENVIIS: enviis, ENVIFE: envife, CONABO: conabo, MAIHAB: maihab, ENCUES: encues },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });

    }
    async putActualizarContacto(nrocta, codcon, direml, celula, enviis, envife, conabo, maihab, lastlogin) {
        if (lastlogin === undefined) lastlogin = 'N';
        console.log('putActualizarContacto');
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_ActualizacionContactos :NROCTA, :CODCON, :DIREML, :CELULA, :ENVIIS, :ENVIFE, :CONABO, :MAIHAB', {
                replacements: { NROCTA: nrocta, CODCON: codcon, DIREML: direml, CELULA: celula, ENVIIS: enviis, ENVIFE: envife, CONABO: conabo, MAIHAB: maihab },
                type: this._sequelizedbSM.QueryTypes.SELECT
            })

    }
    async deleteEliminarContacto(nrocta, codcon) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BajadeContactos :NROCTA, :CODCON ', {
                replacements: { NROCTA: nrocta, CODCON: codcon },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });

    }
}
module.exports = ContactoRepository;