'use strict';
module.exports = (sequelize, DataTypes) => {
  const SPTCII = sequelize.define('SPTCII', {
    SPTCII_TIPCLA: DataTypes.STRING,
    SPTCII_CODSUB: DataTypes.STRING,
    SPTCII_TIPDES: DataTypes.STRING,
    SPTCII_ESTDES: DataTypes.STRING,
    SPTCII_TIPHAS: DataTypes.STRING,
    SPTCII_ESTHAS: DataTypes.STRING,
    SPTCII_CODARE: DataTypes.STRING,
    SPTCII_CODRES: DataTypes.STRING,
    SPTCII_TIPMA1: DataTypes.STRING,
    SPTCII_CODMAI: DataTypes.STRING,
    SPTCII_TIPMA2: DataTypes.STRING,
    SPTCII_CODMA2: DataTypes.STRING,
    SPTCII_TIPMA3: DataTypes.STRING,
    SPTCII_CODMA3: DataTypes.STRING,
    SPTCII_DEFECT: DataTypes.STRING,
    SPTCII_REQUER: DataTypes.STRING,
    SPTCII_IRORIG: DataTypes.STRING,
    SPTCII_TIPORI: DataTypes.STRING,
    SPTCII_ESTORI: DataTypes.STRING,
    SPTCII_TEMARE: DataTypes.STRING,
    SPTCII_TIPASI: DataTypes.STRING,
    SPTCII_ESTASI: DataTypes.STRING,
    SPTCII_DESFUN: DataTypes.STRING,
    SPTCII_TRAHOR: DataTypes.STRING,
    SPTCII_ESTHOR: DataTypes.STRING,
    SPTCII_TEMRES: DataTypes.STRING,
    SPTCII_FCHENT: DataTypes.STRING,
    SPTCII_REQCON: DataTypes.STRING,
    SPTCII_CAMARE: DataTypes.STRING,
    SPTCII_INHIBE: DataTypes.STRING,
    SPTCII_RIESGO: DataTypes.STRING,
    SPTCII_STATUS: DataTypes.STRING
  }, {
    tableName: 'SPTCII',
    timestamps: false,
    freezeTableName: true
  });
  SPTCII.associate = function(models) {
    // associations can be defined here
  };
  return SPTCII;
};
