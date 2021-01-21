const Repository = require("./repository");

class ObjetoPerfilRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "USR_SGPPEI");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "USR_SGPPEI";
    }
    async CrearObjetoPerfilSGP(perfil, codobj, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_CrearObjetoPerfilSGP :PERFIL, :CODOBJ, :USERID', {
                replacements: { PERFIL: perfil, CODOBJ: codobj, USERID: userid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async BorrarObjetoPerfilSGP(perfil, codobj, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BorrarObjetoPerfilSGP :PERFIL, :CODOBJ, :USERID', {
                replacements: { PERFIL: perfil, CODOBJ: codobj, USERID: userid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async BorrarTodosObjetoPerfilSGP(perfil, codobj, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BorrarObjetoPerfilSGP :PERFIL, :CODOBJ, :USERID', {
                replacements: { PERFIL: perfil, CODOBJ: '', USERID: userid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async RecuperacionObjetoPerfilSGP(perfil) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionObjetosPerfilSGP :PERFIL, :NROCTA, :SGPUID', {
                replacements: { PERFIL: perfil, NROCTA: '', SGPUID: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async RecuperacionObjetoPerfilPorIdSGP(nrocta, sgpuid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionObjetosPerfilSGP :PERFIL, :NROCTA, :SGPUID', {
                replacements: { PERFIL: '', NROCTA: nrocta, SGPUID: sgpuid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
}
module.exports = ObjetoPerfilRepository;