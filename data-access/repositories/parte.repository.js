const Repository = require("./repository");
// const path = require('path');
// const fs = require('fs');
class ParteRepository extends Repository {
    constructor({ db }) {
        super(db, "SPRMVH", {
            limit: 50
        });
        this._db = db;
        this._sequelize = db.sequelize;
        this._Op = db.Sequelize.Op;
        this.entity = "SPRMVH";
    }
    getParte(nrocta, codfor, nrofor) {
        return this._sequelize
            .query('EXEC SLSPWEB_ParteCompleto :NROCTA, :MODFOR, :CODFOR, :NROFOR', {
                replacements: { NROCTA: nrocta, MODFOR: 'SP', CODFOR: codfor, NROFOR: nrofor },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    agregarArchivoOLEOLE(modfor, codfor, nrofor, file) {
        return this._sequelize
            .query('EXEC SLSPWEB_AgregarArchivoOLEOLE :MODFOR, :CODFOR, :NROFOR, :FILE ', {
                replacements: { MODFOR: modfor, CODFOR: codfor, NROFOR: nrofor, FILE: file },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    postParte(nrocta, versio, userid, descrp, adjunt, modobj, codobj, codimp, codocu, codsub, tipcla) {
        if (codsub === undefined || codsub === '' || codsub === 'null') codsub = 'C';
        if (tipcla === undefined || tipcla === '' || tipcla === 'null') tipcla = 'SQL';

        return this._sequelize
            .query('EXEC SLSPWEB_RegistraParte :NROCTA, :VERSIO, :USERID, :DESCRP, :ADJUNT , :MODOBJ, :CODOBJ, :CODIMP, :CODOCU, :CODSUB, :TIPCLA', {
                replacements: { NROCTA: nrocta, VERSIO: versio, USERID: userid, DESCRP: descrp, ADJUNT: adjunt, MODOBJ: modobj, CODOBJ: codobj, CODIMP: codimp, CODOCU: codocu, CODSUB: codsub, TIPCLA: tipcla },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    putCambioEstado(nrocta, codfor, nrofor, estnew, asgare, asgres, obscli, adjunt, valora) {
        // console.log(nrocta.toUpperCase(), 'SP', codfor, parseInt(nrofor), estnew, asgare, asgres, obscli, adjunt, valora);

        return this._sequelize
            .query('EXEC SLSPWEB_CambioEstado :NROCTA, :MODFOR, :CODFOR, :NROFOR, :ESTNEW, :ASGARE, :ASGRES, :OBSCLI, :ADJUNT, :VALORA', {
                replacements: { NROCTA: nrocta.toUpperCase(), MODFOR: 'SP', CODFOR: codfor, NROFOR: parseInt(nrofor), ESTNEW: estnew, ASGARE: asgare, ASGRES: asgres, OBSCLI: obscli, ADJUNT: adjunt, VALORA: valora },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    getPartes(nrocta, limit, pendingOnly) {
        if (limit === undefined) limit = null
        if (pendingOnly == undefined) pendingOnly = null
        return this._sequelize
            .query('EXEC SLSPWEB_ParteReducido :NROCTA, :MODFOR, :CODFOR, :NROFOR, :ESTADO, :LIMIT, :PENDINGONLY', {
                replacements: { NROCTA: nrocta, MODFOR: 'SP', CODFOR: null, NROFOR: null, ESTADO: null, LIMIT: limit, PENDINGONLY: pendingOnly },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    getPartesRelacionados(nrocta, modulo, fechaDesde, fechaHasta, info, numero) {
        const Op = this._Op;
        // const sequelize = this._Sequelize;
        var filtro = [];
        modulo = modulo == 'null' ? '' : modulo;
        modulo = (modulo == undefined) ? '' : modulo;
        nrocta = nrocta == 'null' ? '' : nrocta;
        nrocta = nrocta == undefined ? '' : nrocta;
        if (nrocta !== '') {
            filtro.push({ SPRMVH_NROCTA: nrocta })
        }
        if (modulo !== '') {
            filtro.push({ SPRMVH_MODFOR: modulo });

        }
        if (fechaDesde != "null" && fechaHasta != "null") {
            filtro.push({
                SPRMVH_FCHMOV: {
                    [Op.between]: [fechaDesde, fechaHasta]
                }
            })
        }
        if (info != "null") {
            filtro.push({ SPRMVH_CODFOR: info })
        }
        if (numero != "null") {
            filtro.push({ SPRMVH_NROFOR: parseInt(numero) })

        }
        return this._db[this.entity]
            .findAll({
                where: {
                    [Op.and]: filtro
                }
            });

    }
    getPartesCount(nrocta) {
        return this._sequelize
            .query('EXEC SLSPWEB_CantidadPartes :NROCTA ', {
                replacements: { NROCTA: nrocta },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    getAccionesParte(nrocta, codfor, nrofor) {
        return this._sequelize
            .query('EXEC SLSPWEB_AccionesDeParte :NROCTA, :MODFOR, :CODFOR, :NROFOR', {
                replacements: { NROCTA: nrocta, MODFOR: 'SP', CODFOR: codfor, NROFOR: nrofor },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    getEstadosDeParte(nrocta) {
        return this._sequelize
            .query('EXEC SLSPWEB_FiltroPorEstado :NROCTA ', {
                replacements: { NROCTA: nrocta },
                type: this._sequelize.QueryTypes.SELECT
            })
    }
    getHistoriaParte(nrocta, codfor, nrofor) {
        return this._sequelize
            .query('EXEC SLSPWEB_HistoriaParte :NROCTA, :MODFOR, :CODFOR, :NROFOR', {
                replacements: { NROCTA: nrocta, MODFOR: 'SP', CODFOR: codfor, NROFOR: nrofor },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    getInformantesdePartes(termino) {

        termino = (termino == 'null') ? '' : termino;
        termino = (termino == undefined) ? '' : termino;

        return this._sequelize
            .query(`SELECT DISTINCT SPRMVH_CODFOR, SPCCBH_DESCRP FROM SPRMVH
                INNER JOIN SPCCBH ON
                SPCCBH_MODCOM = SPRMVH_MODFOR and
                SPCCBH_CODCOM = SPRMVH_CODFOR
                where
                (SPRMVH_CODFOR LIKE '%${termino}%' OR SPCCBH_DESCRP LIKE '%${termino}%')
                ORDER BY SPRMVH_CODFOR ASC`, { type: this._sequelize.QueryTypes.SELECT })
    }
}

module.exports = ParteRepository;