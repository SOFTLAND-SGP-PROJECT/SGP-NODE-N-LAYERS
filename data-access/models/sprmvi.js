'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPRMVI = sequelize.define('SPRMVI', {
    SPRMVI_MODFOR: DataTypes.STRING,
    SPRMVI_CODFOR: DataTypes.STRING,
    SPRMVI_NROFOR: DataTypes.INTEGER,
    SPRMVI_NROASG: DataTypes.INTEGER,
    SPRMVI_NROITM: {type: DataTypes.INTEGER, primaryKey: true },
    SPRMVI_FCHMOV: DataTypes.DATE,
    SPRMVI_TIPCLA: DataTypes.STRING,
    SPRMVI_CODSUB: DataTypes.STRING,
    SPRMVI_TIPDES: DataTypes.STRING,
    SPRMVI_ESTACT: DataTypes.STRING,
    SPRMVI_TIPHAS: DataTypes.STRING,
    SPRMVI_ESTNEW: DataTypes.STRING,
    SPRMVI_CLASIF: DataTypes.STRING,
    SPRMVI_FCHREQ: DataTypes.DATE,
    SPRMVI_FCHLIM: DataTypes.DATE,
    SPRMVI_OBSERV: DataTypes.STRING,
    SPRMVI_MODREL: DataTypes.STRING,
    SPRMVI_CODREL: DataTypes.STRING,
    SPRMVI_NROREL: DataTypes.INTEGER,
    SPRMVI_ASGREL: DataTypes.INTEGER,
    SPRMVI_MOTIVO: DataTypes.STRING,
    SPRMVI_APLARE: DataTypes.STRING,
    SPRMVI_APLCOD: DataTypes.STRING,
    SPRMVI_PEDARE: DataTypes.STRING,
    SPRMVI_PEDRES: DataTypes.STRING,
    SPRMVI_ASGARE: DataTypes.STRING,
    SPRMVI_ASGRES: DataTypes.STRING,
    SPRMVI_NROINT: DataTypes.INTEGER,
    SPRMVI_USERNT: DataTypes.STRING,
    SPRMVI_ORIARE: DataTypes.STRING,
    SPRMVI_ORIRES: DataTypes.STRING,
    SPRMVI_HORNOV: DataTypes.STRING,
    SPRMVI_MINUTO: DataTypes.FLOAT,
    SPRMVI_CODTEM: DataTypes.STRING,
    SPRMVI_CODPRI: DataTypes.STRING,
    SPRMVI_OBSCLI: DataTypes.STRING,
    SPRMVI_DESFUN: DataTypes.TEXT,
    SPRMVI_ORDENX: DataTypes.INTEGER,
    SPRMVI_TIPASG: DataTypes.STRING,
    USR_SPRMVI_TIPPRO: DataTypes.INTEGER,
    USR_SPRMVI_TIPAPL: DataTypes.INTEGER,
    USR_SPRMVI_OCURRE: DataTypes.INTEGER,
    USR_SPRMVI_CALIFI: DataTypes.STRING,
    USR_SPRMVI_MAINOT: DataTypes.STRING,
    USR_SPRMVI_TIPGSL: DataTypes.INTEGER,
    USR_SPRMVI_PRIGSL: DataTypes.INTEGER,
    USR_SPRMVI_CALGSL: DataTypes.INTEGER,
    USR_SPRMVI_ACARAI: DataTypes.TEXT,
    NEW_SPRMVI_OBSCLI: DataTypes.STRING,
    NEW_SPRMVI_OBSERV: DataTypes.STRING
  }, {
    tableName: 'SPRMVI',
    timestamps: false,
    freezeTableName: true
  });
  SPRMVI.associate = function(models) {
    SPRMVI.belongsTo(models.SPRMVH);
    // associations can be defined here
  };
  return SPRMVI;
  // SPRMVI.removeAttribute('id');
};
