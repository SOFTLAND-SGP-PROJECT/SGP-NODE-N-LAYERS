const Repository = require("./repository");

class PerfilRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "USR_SGPPEH");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "USR_SGPPEH";
    }
    async CrearPerfilSGP(descrip, avatar, nrocta, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_CrearPerfilSGP :DESCRP, :AVATAR, :NROCTA, :USERID, :CODIGO', {
                replacements: { DESCRP: descrip, AVATAR: avatar, NROCTA: nrocta, USERID: userid, CODIGO: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async ActualizacionPerfilSGP(descrip, avatar, codigo, userid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_CrearPerfilSGP :DESCRP, :AVATAR, :NROCTA, :USERID, :CODIGO', {
                replacements: { DESCRP: descrip, AVATAR: avatar, NROCTA: '', USERID: userid, CODIGO: codigo },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async getPerfilById(id) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionPerfilesSGP :NROCTA, :ID', {
                replacements: { NROCTA: '', ID: id },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async RecuperacionPerfilSGP(nrocta) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionPerfilesSGP :NROCTA, :ID', {
                replacements: { NROCTA: nrocta, ID: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }

    async deletePerfil(nrocta, id) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BorrarPerfilSGP :NROCTA, :ID', {
                replacements: { NROCTA: nrocta, ID: id },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }

}
module.exports = PerfilRepository;