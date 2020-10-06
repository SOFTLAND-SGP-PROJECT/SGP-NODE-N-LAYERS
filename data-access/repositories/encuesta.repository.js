class EncuestaRepository {
    constructor({ dbSM }) {
        this._db = dbSM;
        this._sequelize = dbSM.sequelize;
        this._Op = dbSM.Sequelize.Op;
    }

    async getEncuestaPorTipo(tipcur) {
        return await this._sequelize
            .query('EXEC SLSPWEB_RecuperacionEstructuraEncuesta :TIPCUR', {
                replacements: { TIPCUR: tipcur },
                type: this._sequelize.QueryTypes.SELECT
            });
    }
    async postRespuestaEncuesta(respuesta, nrocta, codpro) {
        // console.log(respuesta.tipenc, respuesta.nroenc, nrocta, respuesta.codcon, codpro, respuesta.textos, respuesta.nropre, respuesta.codres);
        return await this._sequelize
            .query('EXEC SLSPWEB_RegistracionEncuesta :TIPCUR, :NROENC, :NROCTA, :CODCON, :CODPRO, :TEXTOS, :NROPRE, :CODRES', {
                replacements: { TIPCUR: respuesta.tipenc, NROENC: respuesta.nroenc, NROCTA: nrocta, CODCON: respuesta.codcon, CODPRO: codpro, TEXTOS: respuesta.textos, NROPRE: (respuesta.nropre).toString(), CODRES: (respuesta.codres).toString() },
                type: this._sequelize.QueryTypes.SELECT
            }).spread(result => {
                // console.log(result);
                return result;
            });
    }

    // models.sequelize

    // .query('DECLARE @outParam1 INT, @outParam2 INT EXEC procedureName 
    // @param1=:param, @outParam1 = @outParam1 output, @outParam2 = @outParam2 output 
    // SELECT @outParam1 AS "outParam1", @outParam2 AS "outParam2"',
    // {
    // replacements:
    // {
    //     param: 123
    //     },
    //     type: models.sequelize.QueryTypes.EXEC
    // }).spread(result => {
    // if (result)
    // {
    //     console.log("\nInside result : " + JSON.stringify(result));
    //     //return response here
    // }
    // SLSPWEB_RegistracionEncuesta](@TIPENC VARCHAR(6), @NROENC AS INT, @NROCTA VARCHAR(20), @CODCON varchar(40), @CODPRO varchar(40), @TEXTOS VARCHAR(255),
    // @NROPRE AS VARCHAR(6), @CODRES AS VARCHAR(6), @NROENCOUT AS INT OUTPUT


}

module.exports = EncuestaRepository;