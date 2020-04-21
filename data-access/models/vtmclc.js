'use strict';
module.exports = (sequelize, DataTypes) => {
  const VTMCLC = sequelize.define('VTMCLC', {
    VTMCLC_NROCTA: {type: DataTypes.STRING, primaryKey: true },
    VTMCLC_CODCON: DataTypes.STRING,
    VTMCLC_PUESTO: DataTypes.STRING,
    VTMCLC_OBSERV: DataTypes.STRING,
    VTMCLC_TIPSEX: DataTypes.STRING,
    VTMCLC_DIREML: DataTypes.STRING,
    VTMCLC_TELINT: DataTypes.STRING,
    VTMCLC_CELULA: DataTypes.STRING,
    VTMCLC_RECFAC: DataTypes.STRING,
    USR_VTMCLC_APELLI: DataTypes.STRING,
    USR_VTMCLC_NOMBRE: DataTypes.STRING,
    USR_VTMCLC_CARGO: DataTypes.STRING,
    USR_VTMCLC_INACTI: DataTypes.STRING,
    USR_VTMCLC_MAIPAR: DataTypes.STRING,
    USR_VTMCLC_ENVIIS: DataTypes.STRING,
    USR_VTMCLC_ENVIFE: DataTypes.STRING,
    USR_VTMCLC_CONABO: DataTypes.STRING,
    USR_VTMCLC_MAIHAB: DataTypes.STRING,
    USR_VTMCLC_ENCUES: DataTypes.STRING,
    VTMCLC_DEBAJA: DataTypes.STRING,
    VTMCLC_OLDUID: DataTypes.STRING,
    USR_VTMCLC_CNTPAR: DataTypes.INTEGER,
    USR_VTMCLC_NIVCON: DataTypes.STRING
  }, {
    tableName: 'VTMCLC',
    timestamps: false,
    freezeTableName: true
  });
  VTMCLC.associate = function(models) {
    // associations can be defined here
  };
  return VTMCLC;
};
