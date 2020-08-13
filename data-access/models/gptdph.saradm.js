'use strict';
module.exports = (sequelize, DataTypes) => {
    const GPTDPH = sequelize.define('GPTDPH', {
        GPTDPH_CODPRO: DataTypes.STRING,
        GPTDPH_DESCRP: DataTypes.STRING,
        GPTDPH_NROCTA: DataTypes.STRING,
        GPTDPH_DIRECC: DataTypes.STRING,
        GPTDPH_CODPAI: DataTypes.STRING,
        GPTDPH_CODPOS: DataTypes.STRING,
        GPTDPH_BMPBMP: DataTypes.STRING,
        GPTDPH_DEPOSI: DataTypes.STRING,
        GPTDPH_SECTOR: DataTypes.STRING,
        GPTDPH_OBJETI: DataTypes.STRING,
        GPTDPH_ALCANC: DataTypes.STRING,
        GPTDPH_SUPUES: DataTypes.STRING,
        GPTDPH_RESTRI: DataTypes.STRING,
        GPTDPH_RESPRO: DataTypes.STRING,
        GPTDPH_OLEOLE: DataTypes.STRING,
        USR_GPTDPH_GASTRA: DataTypes.STRING,
        USR_GPTDPH_CLAPRO: DataTypes.STRING,
        USR_GPTDPH_AUTDOC: DataTypes.STRING,
        USR_GPTDPH_USAUDO: DataTypes.STRING,
        USR_GPTDPH_FEAUDO: DataTypes.DATE,
        USR_GPTDPH_TIPVTA: DataTypes.STRING,
        USR_GPTDPH_MODOFC: DataTypes.STRING,
        USR_GPTDPH_CODOFC: DataTypes.STRING,
        USR_GPTDPH_NROOFC: DataTypes.INTEGER,
        USR_GPTDPH_CIERRE: DataTypes.STRING,
        USR_GPTDPH_AUTDCC: DataTypes.STRING,
        USR_GPTDPH_ENVCRN: DataTypes.STRING,
        USR_GPTDPH_ESTPRO: DataTypes.STRING,
        USR_GPTDPH_DESCOM: DataTypes.STRING,
        USR_GPTDPH_MODFAC: DataTypes.STRING,
        USR_GPTDPH_TIPPRO: DataTypes.STRING,
        USR_GPTDPH_ARTCOD: DataTypes.STRING,
        USR_GPTDPH_ENVMAT: DataTypes.STRING,
        USR_GPTDPH_FRQIDA: DataTypes.INTEGER,
        USR_GPTDPH_INFVAL: DataTypes.STRING,
        USR_GPTDPH_HRSPRE: DataTypes.INTEGER,
        USR_GPTDPH_CLASIE: DataTypes.STRING,
        USR_GPTDPH_TIPCUR: DataTypes.STRING,
        USR_GPTDPH_LNKCUR: DataTypes.STRING,
        USR_GPTDPH_HORDES: DataTypes.STRING,
        USR_GPTDPH_HORHAS: DataTypes.STRING,
        USR_GPTDPH_LNKENC: DataTypes.STRING
    }, {
        tableName: 'GPTDPH',
        timestamps: false,
        freezeTableName: true
    });
    GPTDPH.associate = function(models) {
        // associations can be defined here
    };
    return GPTDPH;
};