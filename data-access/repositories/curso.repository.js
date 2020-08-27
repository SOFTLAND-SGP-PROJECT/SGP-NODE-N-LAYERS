class CursoRepository {
    constructor({ dbSM }) {
        this._db = dbSM;
        this._sequelize = dbSM.sequelize;
        this._Op = dbSM.Sequelize.Op;
    }
    async getCursos() {
        return await this._sequelize
            .query('EXEC SLSPWEB_RecuperacionDeCursos', {
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    async getProximoCursos() {
        return this._sequelize
            .query('EXEC SLSPWEB_RecuperacionDeCursos', {
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    async getCursosInscriptos(codigo) {
        return await this.getCursos().then(e => {
            let inscripciones = e.filter(c => c.GPTDPH_CODPRO === codigo)
            console.log(inscripciones[0]);
            return [];
        });

    }
    async postCurso(codigo, asistente) {
        return await this._sequelize
            .query('EXEC SLSPWEB_IncorporacionAsistentes :CODPRO, :NROCTA, :CODCON, :USERID, :DIREML , :USR_NOASIS, :USR_PCTBFN, :OBSERV, :LINKENC', {
                replacements: { CODPRO: codigo, NROCTA: asistente.nrocta, CODCON: asistente.codcon, USERID: 'WEB', DIREML: asistente.direml, USR_NOASIS: 'N', USR_PCTBFN: asistente.USR_PCTBFN, OBSERV: '', LINKENC: asistente.linkenc },
                type: this._sequelize.QueryTypes.SELECT
            });

    }
    async getCursoPorCodigo(codigo) {
        return await this._sequelize
            .query(`select GPTDPH_BMPBMP, GPTDPH_OLEOLE, USR_GPTDPH_BMPWEB from GPTDPH where GPTDPH_CODPRO = '${codigo}'`, { type: this._sequelize.QueryTypes.SELECT })
    }
    async getLogros(nrocta) {
        return await this._sequelize
            .query('EXEC SLSPWEB_MisCursosHistoricos :NROCTA ', {
                replacements: { NROCTA: nrocta },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    async getCursosPendientes(nrocta) {
        return await this._sequelize
            .query('EXEC SLSPWEB_MisCursosPendientes :NROCTA ', {
                replacements: { NROCTA: nrocta },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    async getAsistentesPorCurso(codpro, nrocta) {
        return await this._sequelize
            .query('EXEC SLSPWEB_AsistentesPorCurso :NROCTA, :CODPRO ', {
                replacements: { NROCTA: nrocta, CODPRO: codpro },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    async deleteAsistentePorCurso(codigo, asistente) {
        return await this._sequelize
            .query('EXEC SLSPWEB_ActualizacionAsistentes :CODPRO, :NROCTA, :CODCON, :USERID, :DIREML , :USR_NOASIS, :OBSERV', {
                replacements: { CODPRO: codigo, NROCTA: asistente.nrocta, CODCON: asistente.codcon, USERID: 'WEB', DIREML: asistente.direml, USR_NOASIS: 'S', OBSERV: asistente.motivo },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
}

module.exports = CursoRepository;