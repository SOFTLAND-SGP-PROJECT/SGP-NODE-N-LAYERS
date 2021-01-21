const Repository = require("./repository");

class MenuRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "USR_SGPMEH");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "USR_SGPMEH";
    }
    async RecuperacionMenuSGP(codigo) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionObjetoMenuSGP :CODOBJ', {
                replacements: {
                    CODOBJ: codigo
                },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async CrearMenuSGP(item) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_CrearObjetoMenuSGP :CODOBJ, :DESCRP, :SLICON, :URLURL, :NIVELO, :USERID', {
                replacements: {
                    CODOBJ: item.USR_SGPMEH_CODOBJ,
                    DESCRP: item.USR_SGPMEH_DESCRP,
                    SLICON: item.USR_SGPMEH_SLICON,
                    URLURL: item.USR_SGPMEH_URLURL,
                    NIVELO: item.USR_SGPMEH_NIVELO,
                    USERID: item.USR_SG_USERID
                },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async ActualizacionMenuSGP(item, codigo) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_ActualizarObjetoMenuSGP :CODOBJ, :NEWCODOBJ, :USERID', {
                replacements: {
                    CODOBJ: codigo,
                    NEWCODOBJ: item.USR_SGPMEH_CODOBJ,
                    USERID: item.USR_SG_USERID
                },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async BorrarObjetoMenuSGP(item) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_BorrarObjetoMenuSGP :CODOBJ, :USERID', {
                replacements: {
                    CODOBJ: item.USR_SGPMEH_CODOBJ,
                    USERID: item.USR_SG_USERID
                },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
}
module.exports = MenuRepository;