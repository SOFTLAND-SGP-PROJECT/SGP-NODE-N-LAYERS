const Repository = require("./repository");

class UsuariosRepository extends Repository {
    constructor({ db, dbSM }) {
        super(db, "USR_SGPCLU");
        this._Op = db.Sequelize.Op;
        this._dbSM = dbSM;
        this._sequelizedbSM = dbSM.sequelize;
        this._OpSM = dbSM.Sequelize.Op;
        this.entity = "USR_SGPCLU";
    }
    async RecuperacionUsuarioSGP(usuario) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionUsuarioSGP :SGPUID, :NROCTA, :TERMINO', {
                replacements: { SGPUID: usuario.SGPUID, NROCTA: usuario.NROCTA, TERMINO: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async getAllWithTwoParams(nrocta, termino) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionUsuarioSGP :SGPUID, :NROCTA, :TERMINO', {
                replacements: { SGPUID: '', NROCTA: nrocta, TERMINO: ('%').concat(termino).concat('%') },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async getAllWithOneParams(nrocta) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionUsuarioSGP :SGPUID, :NROCTA, :TERMINO', {
                replacements: { SGPUID: '', NROCTA: nrocta, TERMINO: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async getUsuarioById(sgpuid) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_RecuperacionUsuarioSGP :SGPUID, :NROCTA, :TERMINO', {
                replacements: { SGPUID: sgpuid, NROCTA: '', TERMINO: '' },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }
    async CrearUsuariosSGP(usuario) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_CrearUsuariosSGP :SGPUID, :NROCTA, :SGPIMG, :CODCON, :SGPPWD, :USERID ', {
                replacements: { SGPUID: usuario.SGPUID, NROCTA: usuario.NROCTA, SGPIMG: usuario.SGPIMG, CODCON: usuario.CODCON, SGPPWD: usuario.SGPPWD, USERID: usuario.USERID },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }

    async ActualizacionUsuarioSGP(usuario) {
        return await this._sequelizedbSM
            .query('EXEC SLSPWEB_ActualizacionUsuarioSGP :NROCTA, :SGPUID, :SGPPWD, :SGPIMG, :USERID ', {
                replacements: { NROCTA: usuario.NROCTA, SGPUID: usuario.SGPUID, SGPPWD: usuario.SGPPWD, SGPIMG: usuario.SGPIMG, USERID: usuario.USERID },
                type: this._sequelizedbSM.QueryTypes.SELECT
            });
    }


}
module.exports = UsuariosRepository;