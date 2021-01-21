const Repository = require("./repository");

class UsuarioRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "USR_SGPCLH");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "USR_SGPCLH";
    }
    async RecuperacionClienteSGP(nrocta, oldpwd) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionClienteSGP :NROCTA, :OLDPWD ', {
                replacements: { NROCTA: nrocta, OLDPWD: oldpwd },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async ActualizacionClienteSGP(nrocta, sgpimp, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_ActualizacionClienteSGP :NROCTA, :SGPIMG, :USERID', {
                replacements: { NROCTA: nrocta, SGPIMG: sgpimp, USERID: userid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
}
module.exports = UsuarioRepository;