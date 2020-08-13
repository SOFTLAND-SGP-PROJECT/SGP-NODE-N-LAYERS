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
            // console.log(e);
            return [];
        });

    }
    async postCurso(codigo, asistente) {
        return await this._sequelize
            .query('EXEC SLSPWEB_IncorporacionAsistentes :CODPRO, :NROCTA, :CODCON, :USERID, :DIREML , :USR_NOASIS, :OBSERV', {
                replacements: { CODPRO: codigo, NROCTA: asistente.nrocta, CODCON: asistente.codcon, USERID: 'WEB', DIREML: asistente.direml, USR_NOASIS: 'N', OBSERV: '' },
                type: this._sequelize.QueryTypes.SELECT
            });

    }
    async getCursoPorCodigo(codigo) {
        return await this._sequelize
            .query(`select GPTDPH_BMPBMP, GPTDPH_OLEOLE from GPTDPH where GPTDPH_CODPRO = '${codigo}'`, { type: this._sequelize.QueryTypes.SELECT })
    }
    async getLogros(nrocta) {
        return await this._sequelize
            .query(`SELECT 
                    USR_GPTDPA_CODPRO,  
                    isnull(USR_GPTDPA_NOASIS,'N') USR_GPTDPA_NOASIS, 
                    (select  top 1 GPTPRI_FCHINI from GPTPRI where GPTPRI_CODPRO = USR_GPTDPA_CODPRO) GPTPRI_FCHINI, 
                    case when USR_GPTDPH_DESCOM ='' or USR_GPTDPH_DESCOM is null  then GPTDPH_DESCRP else USR_GPTDPH_DESCOM END USR_GPTDPH_DESCOM, 
                    USR_GPTDPH_TIPCUR, 
                    USR_GPTDPH_HORDES, 
                    USR_GPTDPH_HORHAS,  
                    GPTDPH_BMPBMP
                FROM USR_GPTDPA 
                inner join GPTDPH on GPTDPH_CODPRO = USR_GPTDPA_CODPRO 
                WHERE 
                    USR_GPTDPA_NROCTA = '${nrocta}' AND
                    isnull(USR_GPTDPA_NOASIS,'N') = 'N' AND
                    not exists (select  top 1 GPTPRI_FCHINI from GPTPRI where GPTPRI_CODPRO = USR_GPTDPA_CODPRO AND GPTPRI_FCHINI > GetDate())
                group by 
                    USR_GPTDPA_CODPRO, isnull(USR_GPTDPA_NOASIS,'N'),
                    USR_GPTDPH_DESCOM, USR_GPTDPH_TIPCUR, GPTDPH.GPTDPH_DESCRP,
                    USR_GPTDPH_HORDES, USR_GPTDPH_HORHAS, GPTDPH_BMPBMP
                order by (select  top 1 GPTPRI_FCHINI from GPTPRI where GPTPRI_CODPRO = USR_GPTDPA_CODPRO) desc`, { type: this._sequelize.QueryTypes.SELECT })

    }
    async getCursosPendientes(nrocta) {
        return await this._sequelize
            .query(`SELECT 
                    USR_GPTDPA_CODPRO,  
                    isnull(USR_GPTDPA_NOASIS,'N') USR_GPTDPA_NOASIS, 
                    (select  top 1 GPTPRI_FCHINI from GPTPRI where GPTPRI_CODPRO = USR_GPTDPA_CODPRO) GPTPRI_FCHINI, 
                    case when USR_GPTDPH_DESCOM ='' or USR_GPTDPH_DESCOM is null  then GPTDPH_DESCRP else USR_GPTDPH_DESCOM END USR_GPTDPH_DESCOM, 
                    USR_GPTDPH_TIPCUR, 
                    USR_GPTDPH_HORDES, 
                    USR_GPTDPH_HORHAS,  
                    GPTDPH_BMPBMP
                FROM USR_GPTDPA 
                inner join GPTDPH on GPTDPH_CODPRO = USR_GPTDPA_CODPRO 
                WHERE 
                    USR_GPTDPA_NROCTA = '${nrocta}' AND
                    isnull(USR_GPTDPA_NOASIS,'N') = 'N' AND
                    exists (select  top 1 GPTPRI_FCHINI from GPTPRI where GPTPRI_CODPRO = USR_GPTDPA_CODPRO AND GPTPRI_FCHINI > GetDate())
                group by 
                    USR_GPTDPA_CODPRO, isnull(USR_GPTDPA_NOASIS,'N'),
                    USR_GPTDPH_DESCOM, USR_GPTDPH_TIPCUR, GPTDPH.GPTDPH_DESCRP,
                    USR_GPTDPH_HORDES, USR_GPTDPH_HORHAS, GPTDPH_BMPBMP
                order by (select  top 1 GPTPRI_FCHINI from GPTPRI where GPTPRI_CODPRO = USR_GPTDPA_CODPRO) asc`, { type: this._sequelize.QueryTypes.SELECT })

    }
    async getAsistentesPorCurso(codpro, nrocta) {
        return await this._sequelize
            .query(`SELECT 
                        USR_GPTDPA_CODPRO,  
                        USR_GPTDPA_CODCON, 
                        USR_GPTDPA_DIREML,
                        isnull(USR_GPTDPA_NOASIS,'N') USR_GPTDPA_NOASIS
                    FROM USR_GPTDPA 
                    inner join GPTDPH on GPTDPH_CODPRO = USR_GPTDPA_CODPRO 
                    WHERE 
                        USR_GPTDPA_NROCTA = '${nrocta}' AND
                        isnull(USR_GPTDPA_NOASIS,'N') = 'N' 
                    AND USR_GPTDPA_CODPRO = '${codpro}'
                    group by 
                        USR_GPTDPA_CODPRO, isnull(USR_GPTDPA_NOASIS,'N'),
                        USR_GPTDPA_DIREML,USR_GPTDPA_CODCON
            `, { type: this._sequelize.QueryTypes.SELECT });
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