const Repository = require("./repository");

class PerfilAsignadoRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "USR_SGPCLP");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "USR_SGPCLP";
    }
    async CrearPerfilAsignadoUsuarioSGP(nrocta, sgpuid, perfil, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_CrearPerfilesAsignadosUsuarioSGP :NROCTA, :SGPUID, :PERFIL, :USERID', {
                replacements: { NROCTA: nrocta, SGPUID: sgpuid, PERFIL: perfil, USERID: userid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async BorrarPerfilesAsignadosUsuarioSGP(nrocta, sgpuid, perfil) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BorrarPerfilesAsignadosUsuarioSGP :NROCTA, :SGPUID, :PERFIL ', {
                replacements: { NROCTA: nrocta, SGPUID: sgpuid, PERFIL: perfil },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async BorrarTodoUsuarioAsignadoPerfilSGP(nrocta, sgpuid, perfil) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BorrarPerfilesAsignadosUsuarioSGP :NROCTA, :SGPUID, :PERFIL ', {
                replacements: { NROCTA: nrocta, SGPUID: '', PERFIL: perfil },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async RecuperacionPerfilAsignadoUsuarioSGP(nrocta, sgpuid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionPerfilesAsignadosUsuarioSGP :NROCTA, :SGPUID', {
                replacements: { NROCTA: nrocta, SGPUID: sgpuid },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
}
module.exports = PerfilAsignadoRepository;